import {useContext} from 'react';
import type {PermissionStatusAplication} from '../../../infrastructure/interfaces/PermissionsAplication';
import {PermissionsContext} from '../../Provider/PermissionsProvider';

export interface PermissionState {
  // Localizacion
  locationStatus: PermissionStatusAplication;
  requestLocationPermissionStore: () => Promise<PermissionStatusAplication>;
  checkLocationPermissionStore: () => Promise<PermissionStatusAplication>;

  // Almacenamiento
  storageStatus: PermissionStatusAplication;
  requestStoragePermissionStore: () => Promise<PermissionStatusAplication>;
  checkStoragePermissionStore: () => Promise<PermissionStatusAplication>;

  // Llamadas
  callStatus: PermissionStatusAplication;
  requestCallPermissionStore: () => Promise<PermissionStatusAplication>;
  checkCallPermissionStore: () => Promise<PermissionStatusAplication>;
}

export const usePermissions = (): PermissionState => {
  const context = useContext(PermissionsContext);
  if (!context) {
    throw new Error(
      'usePermissions debe ser usado dentro de un PermissionsProvider',
    );
  }
  return context;
};
