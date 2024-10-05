import MapView, {Marker, Polyline, PROVIDER_GOOGLE} from 'react-native-maps';
import {StylesLayout} from '../Themes/StylesLayout';
import {Location} from '../../Infrastructure/Interfaces/Location';
import {MarkerProps} from '../../Infrastructure/Interfaces/Marcadores';
import React from 'react';

interface MapaProps {
  markers?: MarkerProps[];
  showsUserLocation?: boolean;
  initialLocation: Location;
  userLocation?: Location;
  destination?: Location;
}

export const Mapa = ({
  markers = [],
  showsUserLocation = false,
  initialLocation,
  userLocation,
  destination,
}: MapaProps) => {
  return (
    <>
      {/* Mapa */}
      <MapView
        provider={PROVIDER_GOOGLE}
        style={StylesLayout.map}
        region={{
          latitude: initialLocation.latitude,
          longitude: initialLocation.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        showsUserLocation={showsUserLocation} // Ubicacion del usuario
      >
        {/* Recorrer Marcadores */}
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.title}
            description={marker.description}
          />
        ))}

        {userLocation && destination && (
          <Polyline
            coordinates={[
              {
                latitude: userLocation.latitude,
                longitude: userLocation.longitude,
              },
              {
                latitude: destination.latitude,
                longitude: destination.longitude,
              },
            ]}
            strokeColor="#000"
            strokeWidth={3}
          />
        )}
      </MapView>
    </>
  );
};
