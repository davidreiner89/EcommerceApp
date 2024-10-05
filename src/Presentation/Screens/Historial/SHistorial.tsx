/* eslint-disable react/react-in-jsx-scope */
import {Layout} from '@ui-kitten/components';
import {StylesHistorial} from '../../Themes/StylesHistorial';
import {FlatList} from 'react-native';
import {dataEnvioHistorial} from './Data/HistorialEnvios';
import {CardHistorial} from './Components/CardHistorial';
import {MainLayout} from '../../layouts/MainLayout';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useAuthStore} from '../../store/auth/useAuthStore';

export const SHistorial = () => {
  const {user} = useAuthStore();
  const drawer = useNavigation();

  return (
    <MainLayout
      title={user ? user.fullName : 'Undefined'}
      subTitle="Mi Historial"
      showBackButton={false}
      rightActionIcon="menu-outline"
      rightAction={() => drawer.dispatch(DrawerActions.openDrawer())}>
      <Layout style={StylesHistorial.container}>
        {/* Historial */}
        <Layout style={StylesHistorial.historialContainer}>
          <FlatList
            data={dataEnvioHistorial}
            numColumns={1}
            keyExtractor={(item: any) => item.id}
            renderItem={({item}: {item: any}) => <CardHistorial envio={item} />}
          />
        </Layout>
      </Layout>
    </MainLayout>
  );
};
