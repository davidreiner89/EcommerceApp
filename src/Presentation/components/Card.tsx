/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {View, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Envio} from '../../Infrastructure/Interfaces/Envio';
import {Icon} from '@ui-kitten/components';
import {MyIcon} from './ui/MyIcon';
import {StylesCard} from '../Themes/StylesCard';

interface CardProps {
  envio: Envio;
  redirect: string;
}

export const Card: React.FC<CardProps> = ({envio, redirect}) => {
  // Instanciamos la navegación
  const navigation = useNavigation();

  // Función para redirigir a la pantalla de detalles
  const navigateDetail = (envio: Envio, redirect: string) => {
    navigation.navigate(redirect, {envio});
  };

  return (
    <View style={StylesCard.container}>
      <View style={StylesCard.raya} />
      <View style={StylesCard.logoContainer}>
        <MyIcon name="archive-outline" />
      </View>
      <View style={StylesCard.textContainer}>
        <Text style={StylesCard.envioNumber} numberOfLines={1}>
          {envio?.numeroEnvio}
        </Text>
        <Text style={StylesCard.envioName}>{envio?.nombre}</Text>
      </View>
      <Pressable onPress={() => navigateDetail(envio, redirect)}>
        <Icon
          name="arrow-ios-forward-outline"
          fill="#0d6db3"
          style={{width: 24, height: 24}}
        />
      </Pressable>
    </View>
  );
};
