/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeStackNavigator} from './Home/HomeStackNavigator';
import {CustomDrawerContent} from '../../Presentation/components/Drawer/CustomDrawer';
import {EnviosStackNavigation} from './Envios/EnviosStackNavigation';
import {RecojosStackNavigation} from './Recojos/RecojosStackNavigation';
import {SHistorial} from '../../Presentation/Screens/Historial/SHistorial';

// Creo el navegador
const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => (
  <Drawer.Navigator
    drawerContent={props => <CustomDrawerContent {...props} />}
    screenOptions={{headerShown: false}}>
    <Drawer.Screen name="Productos" component={HomeStackNavigator} />
    <Drawer.Screen name="EnviosScreen" component={EnviosStackNavigation} />
    <Drawer.Screen name="RecojosScreen" component={RecojosStackNavigation} />
    <Drawer.Screen name="SHistorial" component={SHistorial} />
  </Drawer.Navigator>
);
