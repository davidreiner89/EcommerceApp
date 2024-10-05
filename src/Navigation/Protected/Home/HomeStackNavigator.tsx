/* eslint-disable react/react-in-jsx-scope */
import {HomeScreen} from '../../../Presentation/Screens/HomeScreen';
import {ProductScreen} from '../../../Presentation/Screens/Product/ProductScreen';
import {
  createStackNavigator,
  StackCardStyleInterpolator,
} from '@react-navigation/stack';

export type HomeStackParams = {
  HomeScreen: undefined;
  ProductScreen: {productId: string};
};

// Creo el navegador
const Stack = createStackNavigator<HomeStackParams>();

const fadeAnimation: StackCardStyleInterpolator = ({current}) => {
  return {
    cardStyle: {
      opacity: current.progress,
    },
  };
};

export const HomeStackNavigator = () => (
  <Stack.Navigator
    initialRouteName="HomeScreen"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      options={{cardStyleInterpolator: fadeAnimation}}
      name="HomeScreen"
      component={HomeScreen}
    />
    <Stack.Screen
      name="ProductScreen"
      component={ProductScreen}
      initialParams={{productId: 'new'}}
    />
  </Stack.Navigator>
);
