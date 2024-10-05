/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useAuthStore} from '../../store/auth/useAuthStore';
import {Divider, Layout, Text} from '@ui-kitten/components';
import {Image} from 'react-native';

export const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  // Estraigo el user y el logout de mi hook
  const {user, logout} = useAuthStore();

  return (
    <Layout style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{flex: 1, backgroundColor: 'white'}}>
        {/* Información del usuario */}
        <Layout style={{padding: 20, alignItems: 'center'}}>
          {user && (
            <>
              <Image
                source={require('../../../assets/user-33638_640.webp')}
                style={{width: 90, height: 90, borderRadius: 40}}
              />
              <Text style={{fontWeight: 'bold', marginTop: 10}}>
                {user.fullName}
              </Text>
              <Text>{user.email}</Text>
            </>
          )}
        </Layout>

        {/* Separador */}
        <Divider />

        {/* Rutas de mi aplicacion */}
        <DrawerItemList {...props} />

        {/* Empujamos el boton de cerrar sesion */}
        <Layout style={{flex: 1, justifyContent: 'flex-end'}} />

        {/* Separador */}
        <Divider />

        {/* Boton de LogOut */}
        <DrawerItem label="Cerrar sesión" onPress={logout} />
      </DrawerContentScrollView>
    </Layout>
  );
};
