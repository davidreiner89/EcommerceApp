import {
  check,
  openSettings,
  PERMISSIONS,
  PermissionStatus,
  request,
} from 'react-native-permissions';
import {PermissionStatusAplication} from '../../Infrastructure/Interfaces/PermissionsAplication';
import {Platform} from 'react-native';
import {mapPermissionStatus} from './MapPermissions';

// Funcion para el permiso de llamadas
export const requestCallPermission =
  async (): Promise<PermissionStatusAplication> => {
    if (Platform.OS === 'ios') {
      return 'granted';
    }

    let status: PermissionStatus = 'unavailable';

    // Sistemas Operativos
    if (Platform.OS === 'android') {
      status = await request(PERMISSIONS.ANDROID.CALL_PHONE);
    } else {
      throw new Error('Plataforma no Soportada');
    }

    // Si el permiso esta bloqueado
    if (status === 'blocked') {
      await openSettings();
      return await checkCallPermission();
    }

    return mapPermissionStatus(status);
  };

export const checkCallPermission =
  async (): Promise<PermissionStatusAplication> => {
    if (Platform.OS === 'ios') {
      return 'granted';
    }

    let status: PermissionStatus = 'unavailable';

    // Sistemas Operativos
    if (Platform.OS === 'android') {
      status = await check(PERMISSIONS.ANDROID.CALL_PHONE);
    } else {
      throw new Error('Plataforma no Soportada');
    }

    return mapPermissionStatus(status);
  };
