import Geolocation from '@react-native-community/geolocation';
import {Location} from '../../Infrastructure/Interfaces/Location';
import {cacheLocation, getCachedLocation} from './GetSetLocation';

// Funcion para obtener la ubicacion
export const getCurrentLocation = async (): Promise<Location> => {
  console.log('Obteniendo la localización...');

  // Intentamos obtener la localizacion en cache
  const cachedLocation = await getCachedLocation();

  // Si la localizacion en cache es valida, retornamos la localizacion
  if (cachedLocation) {
    console.log(
      `La localizacion en cache es: ${cachedLocation.latitude} ${cachedLocation.longitude}`,
    );
    return cachedLocation;
  }

  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => {
        // Guardamos la localizacion en cache
        const currentLocation: Location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };

        // Guardamos la localizacion en cache
        cacheLocation(currentLocation);

        // Resolve
        resolve(currentLocation);
      },
      error => {
        console.log(`No se pudo obtener la localización ${error}`);
        reject(error);
      },
      {
        enableHighAccuracy: true,
      },
    );
  });
};
