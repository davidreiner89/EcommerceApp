/* eslint-disable react/react-in-jsx-scope */
import {createContext, PropsWithChildren, useEffect, useState} from 'react';
import {LocationState} from '../store/Location/useLocationStore';
import {Location} from '../../infrastructure/interfaces/Location';
import {getCurrentLocation} from '../../actions/Location/Location';

export const LocationContext = createContext<LocationState | undefined>(
  undefined,
);

export const LocationProvider = ({children}: PropsWithChildren) => {
  // Estado de la ultima localizacion
  const [lastKnowLocation, setLastKnowLocation] = useState<Location | null>(
    null,
  );

  // Funcion para obtener la localizacion
  const getLocation = async () => {
    const location = await getCurrentLocation();
    console.log(
      `Las coordenadas son: ${location.latitude}, ${location.longitude}`,
    );
    setLastKnowLocation(location);
    return location;
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <LocationContext.Provider value={{lastKnowLocation, getLocation}}>
      {children}
    </LocationContext.Provider>
  );
};
