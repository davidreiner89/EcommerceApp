import {StorageAdapter} from '../../config/adapters/storage-adapter';
import {Location} from '../../Infrastructure/Interfaces/Location';

// Funcion para almacenar la ubicacion en cache
export const cacheLocation = async (location: Location) => {
  try {
    await StorageAdapter.setItem('Location', JSON.stringify(location));
  } catch (error) {
    console.log('Error al almacenar la localización en cache');
  }
};

// Funcion para obtener la ubicacion en cache
export const getCachedLocation = async (): Promise<Location | null> => {
  try {
    const location = await StorageAdapter.getItem('Location');
    return location ? JSON.parse(location) : null;
  } catch (error) {
    console.log('Error al obtener la localización en cache');
  }

  return null;
};
