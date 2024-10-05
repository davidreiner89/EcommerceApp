/* eslint-disable react-native/no-inline-styles */
import {Mapa} from '../../components';
import {Pressable, View} from 'react-native';
import {Icon} from '@ui-kitten/components';
import {StackScreenProps} from '@react-navigation/stack';
import {LoadingScreen} from '../LoadingScreen';
import {useLocationStore} from '../../store/Location/useLocationStore';
import {StylesRutas} from '../../Themes/StylesRutas';
import {RecojosStackParams} from '../../../Navigation/Protected/Recojos/RecojosStackNavigation';
import React from 'react';

interface Props extends StackScreenProps<RecojosStackParams, 'SRuta'> {}

export const SRuta = ({navigation}: Props) => {
  // Usamos el hook
  const {lastKnowLocation} = useLocationStore();

  if (lastKnowLocation === null) {
    return <LoadingScreen />;
  }

  // Marcadores
  const markers = [
    {
      latitude: -11.93709354252966,
      longitude: -77.04810708264783,
      title: 'Marcador 1',
      description: 'Description 1',
    },
    {
      latitude: -11.937916,
      longitude: -77.048779,
      title: 'Marcador 2',
      description: 'Description 2',
    },
  ];

  const userLocation = lastKnowLocation;

  const destination = {
    latitude: -11.937916,
    longitude: -77.048779,
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <View
        style={{
          position: 'absolute',
          top: 10,
          left: 20,
          zIndex: 2,
        }}>
        <Pressable onPress={handleGoBack} style={StylesRutas.iconContainer}>
          <Icon
            fill="#000000"
            name="arrow-back-outline"
            style={{width: 20, height: 20}}
          />
        </Pressable>
      </View>
      <Mapa
        showsUserLocation={true}
        initialLocation={lastKnowLocation}
        userLocation={userLocation}
        destination={destination}
        markers={markers}
      />
    </>
  );
};
