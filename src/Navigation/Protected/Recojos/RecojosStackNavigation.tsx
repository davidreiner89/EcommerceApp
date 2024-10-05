/* eslint-disable react/react-in-jsx-scope */
import {
  createStackNavigator,
  StackCardStyleInterpolator,
} from '@react-navigation/stack';
import {Envio} from '../../../Infrastructure/Interfaces/Envio';
import {SRecojos} from '../../../Presentation/Screens/Recojo/SRecojos';
import {SDetRecojo} from '../../../Presentation/Screens/DetalleRecojo/SDetRecojo';
import {SRuta} from '../../../Presentation/Screens/Ruta/SRuta';

export type RecojosStackParams = {
  SRecojo: undefined;
  SDetRecojo: {envio: Envio};
  SRuta: undefined;
};

export const RecojosStack = createStackNavigator<RecojosStackParams>();

const FadeAnimation: StackCardStyleInterpolator = ({current}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export const RecojosStackNavigation = () => (
  <RecojosStack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: FadeAnimation,
    }}>
    <RecojosStack.Screen name="SRecojo" component={SRecojos} />
    <RecojosStack.Screen name="SDetRecojo" component={SDetRecojo} />
    <RecojosStack.Screen name="SRuta" component={SRuta} />
  </RecojosStack.Navigator>
);
