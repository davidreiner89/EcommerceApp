/* eslint-disable react/react-in-jsx-scope */
import {
  createStackNavigator,
  StackCardStyleInterpolator,
} from '@react-navigation/stack';
import {SCall} from '../../../Presentation/Screens/Permissions/Call';
import {SLocation} from '../../../Presentation/Screens/Permissions/Location';
import {SStorage} from '../../../Presentation/Screens/Permissions/Storage';

export type PermissionsStackParams = {
  CallScreen: undefined;
  LocationScreen: undefined;
  StorageScreen: undefined;
};

interface PermissionStackProps {
  initialRouteName: keyof PermissionsStackParams;
}

const PermissionsStack = createStackNavigator<PermissionsStackParams>();

const fadeAnimation: StackCardStyleInterpolator = ({current}) => {
  return {
    cardStyle: {
      opacity: current.progress,
    },
  };
};

export const PermissionStack = ({initialRouteName}: PermissionStackProps) => (
  <PermissionsStack.Navigator
    initialRouteName={initialRouteName}
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: fadeAnimation,
    }}>
    <PermissionsStack.Screen name="CallScreen" component={SCall} />
    <PermissionsStack.Screen name="LocationScreen" component={SLocation} />
    <PermissionsStack.Screen name="StorageScreen" component={SStorage} />
  </PermissionsStack.Navigator>
);
