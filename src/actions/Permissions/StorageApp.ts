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

// Version de Android
const androidVersion = parseInt(Platform.Version as string, 10);
// const androidVersion = Platform.Version;

// Funcion para el permiso de almacenamiento
export const requestStoragePermission =
  async (): Promise<PermissionStatusAplication> => {
    let status: PermissionStatus = 'unavailable';

    // Tipos sistemas operativos
    if (Platform.OS === 'ios') {
      status = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
    } else if (Platform.OS === 'android') {
      console.log(`La version de Android es: ${androidVersion}`);

      if (androidVersion < 30) {
        status = await request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
      } else {
        status = await request(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
      }
    } else {
      throw new Error('Plataforma no Soportada');
    }

    // Si el permiso esta bloqueado
    if (status === 'blocked') {
      await openSettings();
      return await checkStoragePermission();
    }

    return mapPermissionStatus(status);
  };

// Verificar el permiso
export const checkStoragePermission =
  async (): Promise<PermissionStatusAplication> => {
    let status: PermissionStatus = 'unavailable';

    // Tipos sistemas operativos
    if (Platform.OS === 'ios') {
      status = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
    } else if (Platform.OS === 'android') {
      if (androidVersion < 30) {
        status = await check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
      } else {
        status = await check(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
      }
    } else {
      throw new Error('Plataforma no Soportada');
    }

    return mapPermissionStatus(status);
  };
