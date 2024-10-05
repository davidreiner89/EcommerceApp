/* eslint-disable react/react-in-jsx-scope */
import {
  createStackNavigator,
  StackCardStyleInterpolator,
} from '@react-navigation/stack';
import {Envio} from '../../../Infrastructure/Interfaces/Envio';
import {SEnvios} from '../../../Presentation/Screens/Envios/SEnvios';
import {SDetEnvio} from '../../../Presentation/Screens/DettalleEnvio/SDetEnvio';
import {SRuta} from '../../../Presentation/Screens/Ruta/SRuta';

export type EnviosStackParams = {
  SEnvios: undefined;
  SDetEnvio: {envio: Envio};
  SRuta: undefined;
};

export const EnviosStack = createStackNavigator<EnviosStackParams>();

const FadeAnimation: StackCardStyleInterpolator = ({current}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export const EnviosStackNavigation = () => (
  <EnviosStack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: FadeAnimation,
    }}>
    <EnviosStack.Screen name="SEnvios" component={SEnvios} />
    <EnviosStack.Screen name="SDetEnvio" component={SDetEnvio} />
    <EnviosStack.Screen name="SRuta" component={SRuta} />
  </EnviosStack.Navigator>
);
