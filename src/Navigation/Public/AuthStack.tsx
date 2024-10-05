/* eslint-disable react/react-in-jsx-scope */
import {
  createStackNavigator,
  StackCardStyleInterpolator,
} from '@react-navigation/stack';
import {LoginScreen} from '../../Presentation/Screens/Auth/LoginScreen';
import {RegisterScreen} from '../../Presentation/Screens/Auth/RegisterScreen';

export type RootStackParams = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

const fadeAnimation: StackCardStyleInterpolator = ({current}) => {
  return {
    cardStyle: {
      opacity: current.progress,
    },
  };
};

export const AuthStack = () => (
  <Stack.Navigator
    initialRouteName="LoginScreen"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      options={{cardStyleInterpolator: fadeAnimation}}
      name="LoginScreen"
      component={LoginScreen}
    />
    <Stack.Screen
      options={{cardStyleInterpolator: fadeAnimation}}
      name="RegisterScreen"
      component={RegisterScreen}
    />
  </Stack.Navigator>
);
