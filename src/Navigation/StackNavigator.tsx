/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
import {DrawerNavigation} from './Protected/DrawerNavigation';
import {AuthStack} from './Public/AuthStack';
import {useAuthStore} from '../Presentation/store/auth/useAuthStore';
import {LoadingScreen} from '../Presentation/Screens/LoadingScreen';
import {PermissionStack} from './Protected/Permissions/PermissionsStack';
import {usePermissions} from '../Presentation/store/Permissions/usePermissionsStore';
import {useEffect} from 'react';
import {useLocationStore} from '../Presentation/store/Location/useLocationStore';
import {API_URL_ANDROID} from '@env';

export const StackNavigator = () => {
  // Uso mi hook
  const {status, user} = useAuthStore();
  // Hook de permisos
  const {locationStatus, callStatus, storageStatus} = usePermissions();
  // Hook de Location
  const {lastKnowLocation, getLocation} = useLocationStore();

  console.log('=============== Levantando la aplicacion ===============');

  // Direccion de la api
  console.log(`La dirección de la api es: ${API_URL_ANDROID}`);

  // Bienvenida del usuario
  console.log(`El estado del usuario es ${status}`);
  console.log(`Bienvenido: ${user?.fullName} con el rol ${user?.roles}`);
  console.log(
    `Latitud: ${lastKnowLocation?.latitude} Longitud: ${lastKnowLocation?.longitude}`,
  );

  // Gestión de permisos
  console.log(`El estado del permiso de location es: ${locationStatus}`);
  console.log(`El estado del permiso de llamada es: ${callStatus}`);
  console.log(`El estado del permiso de almacenamiento es: ${storageStatus}`);

  // Si locationStatus es 'granted', obtenemos la localización
  useEffect(() => {
    if (locationStatus === 'granted') {
      if (lastKnowLocation === null) {
        getLocation();
      }
    }
  }, [locationStatus, lastKnowLocation]);

  // Verifica si todos los permisos están concedidos
  const allPermissionsGranted =
    locationStatus === 'granted' &&
    callStatus === 'granted' &&
    storageStatus === 'granted';

  // Si el estado de autenticación está en proceso, mostramos una pantalla de carga
  if (status === 'checking') {
    return <LoadingScreen />;
  }

  // Si los permisos están en estado 'undetermined', mostramos una pantalla de carga
  if (
    locationStatus === 'undetermined' ||
    callStatus === 'undetermined' ||
    storageStatus === 'undetermined'
  ) {
    return <LoadingScreen />;
  }

  // Lógica para usuarios autenticados
  if (status === 'authenticated') {
    // Si todos los permisos son granted, mostramos el DrawerNavigation (la app principal)
    if (allPermissionsGranted) {
      return <DrawerNavigation />;
    }

    // Si falta algún permiso, redirigimos a la pantalla de permisos correspondiente
    if (locationStatus !== 'granted') {
      return <PermissionStack initialRouteName="LocationScreen" />;
    }

    if (callStatus !== 'granted') {
      return <PermissionStack initialRouteName="CallScreen" />;
    }

    if (storageStatus !== 'granted') {
      return <PermissionStack initialRouteName="StorageScreen" />;
    }
  }

  // Si no está autenticado, mostramos el stack de autenticación
  return <AuthStack />;
};
