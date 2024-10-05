import {PermissionStatus} from 'react-native-permissions';
import {PermissionStatusAplication} from '../../Infrastructure/Interfaces/PermissionsAplication';

// Funcion para mapear los estados de los permisos
export const mapPermissionStatus = (
  status: PermissionStatus,
): PermissionStatusAplication => {
  const permissionMapper: Record<PermissionStatus, PermissionStatusAplication> =
    {
      granted: 'granted',
      denied: 'denied',
      blocked: 'blocked',
      unavailable: 'unavailable',
      limited: 'limited',
    };
  return permissionMapper[status] ?? 'unavailable';
};
