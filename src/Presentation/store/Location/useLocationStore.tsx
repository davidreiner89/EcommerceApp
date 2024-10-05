import {useContext} from 'react';
import {Location} from '../../../Infrastructure/Interfaces/Location';
import {LocationContext} from '../../Provider/LocationProvider';

export interface LocationState {
  lastKnowLocation: Location | null;
  getLocation: () => Promise<Location | null>;
}

export const useLocationStore = (): LocationState => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error(
      'useLocationStore debe ser usado dentro de un LocationProvider',
    );
  }
  return context;
};
