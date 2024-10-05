import {Platform} from 'react-native';
import {
  check,
  openSettings,
  PERMISSIONS,
  PermissionStatus,
  request,
} from 'react-native-permissions';
import type {PermissionStatusAplication} from '../../Infrastructure/Interfaces/PermissionsAplication';
import {mapPermissionStatus} from './MapPermissions';

// Funcion para el aviso de requerir permiso a traves de un pop up
export const requestLocationPermission =
  async (): Promise<PermissionStatusAplication> => {
    // Inicializamos el estado en indisponible
    let status: PermissionStatus = 'unavailable';

    // Verificamos la plataforma
    if (Platform.OS === 'ios') {
      status = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else if (Platform.OS === 'android') {
      status = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    } else {
      throw new Error('Plataforma no Soportada');
    }

    // Vemos el estado
    if (status === 'blocked') {
      await openSettings();
      return await checkLocationPermission();
    }

    return mapPermissionStatus(status);
  };

// Funcion para verificar si el permiso ya se otorgo
export const checkLocationPermission =
  async (): Promise<PermissionStatusAplication> => {
    // Inicializamos el estado en indisponible
    let status: PermissionStatus = 'unavailable';

    // Verificamos la plataforma
    if (Platform.OS === 'ios') {
      status = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else if (Platform.OS === 'android') {
      status = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    } else {
      throw new Error('Plataforma no Soportada');
    }

    return mapPermissionStatus(status);
  };
