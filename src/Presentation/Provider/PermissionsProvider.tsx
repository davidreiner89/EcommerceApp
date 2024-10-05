/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
// /* eslint-disable react-hooks/exhaustive-deps */
import {createContext, PropsWithChildren, useEffect, useState} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Alert, AppState} from 'react-native';

import {PermissionState} from '../store/Permissions/usePermissionsStore';
import {PermissionStatusAplication} from '../../infrastructure/interfaces/PermissionsAplication';

import {
  checkLocationPermission,
  requestLocationPermission,
} from '../../actions/Permissions/LocationApp';
import {
  checkCallPermission,
  requestCallPermission,
} from '../../actions/Permissions/CallApp';
import {PermissionsStackParams} from '../../Navigation/Protected/Permissions/PermissionsStack';
import {
  checkStoragePermission,
  requestStoragePermission,
} from '../../actions/Permissions/StorageApp';
import {useAuthStore} from '../store/auth/useAuthStore';

export const PermissionsContext = createContext<PermissionState>(
  {} as PermissionState,
);

export const PermissionsProvider = ({children}: PropsWithChildren) => {
  // Navegacion
  const navigation = useNavigation<NavigationProp<PermissionsStackParams>>();
  // uso mi hook
  const {checkStatus} = useAuthStore();

  // Estado de los permisos
  const [locationStatus, setLocationStatus] =
    useState<PermissionStatusAplication>('undetermined');
  const [storageStatus, setStorageStatus] =
    useState<PermissionStatusAplication>('undetermined');
  const [callStatus, setCallStatus] =
    useState<PermissionStatusAplication>('undetermined');

  // Funciones para solicitar permisos
  // Localizacion
  const requestLocationPermissionStore = async () => {
    const statusLocation = await requestLocationPermission();

    // Actualizamos el estado
    setLocationStatus(statusLocation);

    // Si es granted avanza a la siguiente pagina
    if (statusLocation === 'granted') {
      navigation.navigate('CallScreen');
    } else {
      Alert.alert('Permiso necesario', 'El permiso de ubicación es requerido.');
    }

    return statusLocation;
  };

  // Llamadas
  const requestCallPermissionStore = async () => {
    const statusCall = await requestCallPermission();
    setCallStatus(statusCall);

    if (statusCall === 'granted') {
      navigation.navigate('StorageScreen');
    } else {
      Alert.alert('Permiso necesario', 'El permiso de llamadas es requerido.');
    }

    return statusCall;
  };

  // Almacenamiento
  const requestStoragePermissionStore = async () => {
    const statusStorage = await requestStoragePermission();
    setStorageStatus(statusStorage);

    if (statusStorage !== 'granted') {
      Alert.alert(
        'Permiso necesario',
        'El permiso de almacenamiento es requerido.',
      );
    }

    return statusStorage;
  };

  // Verificar Permisos
  // Localizacion
  const checkLocationPermissionStore = async () => {
    const statusCheckStore = await checkLocationPermission();
    setLocationStatus(statusCheckStore);
    return statusCheckStore;
  };

  // Llamadas
  const checkCallPermissionStore = async () => {
    const statusCheckCall = await checkCallPermission();
    setCallStatus(statusCheckCall);
    return statusCheckCall;
  };

  // Almacenamiento
  const checkStoragePermissionStore = async () => {
    const statusCheckStorage = await checkStoragePermission();
    setStorageStatus(statusCheckStorage);
    return statusCheckStorage;
  };

  // Verificamos el estado
  useEffect(() => {
    checkStatus();
  }, []);

  // Verificar Permisos cuando el componente se monta
  useEffect(() => {
    checkLocationPermission();
    checkCallPermission();
    checkStoragePermission();
  }, []);

  // Si la aplicacion cambia de estado
  useEffect(() => {
    const checkPermissions = async () => {
      await checkLocationPermissionStore();
      await checkCallPermissionStore();
      await checkStoragePermissionStore();
    };

    checkPermissions();

    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'active') {
        checkPermissions();
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <PermissionsContext.Provider
      value={{
        locationStatus,
        requestLocationPermissionStore,
        checkLocationPermissionStore,
        callStatus,
        requestCallPermissionStore,
        checkCallPermissionStore,
        storageStatus,
        requestStoragePermissionStore,
        checkStoragePermissionStore,
      }}>
      {children}
    </PermissionsContext.Provider>
  );
};
