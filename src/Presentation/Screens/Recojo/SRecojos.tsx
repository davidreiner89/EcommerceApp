/* eslint-disable react/react-in-jsx-scope */
import {Layout} from '@ui-kitten/components';
import {useState} from 'react';

import {Buscador, Filtrado, Instancia, Lista} from '../../components';
import {StylesLayout} from '../../Themes/StylesLayout';
import {LayoutAplication} from '../../layouts/LayoutAplication';
import {dataEnvio} from '../../../Data';
import {Envio} from '../../../infrastructure/interfaces/Envio';
import {MainLayout} from '../../layouts/MainLayout';
import {DrawerActions, useNavigation} from '@react-navigation/native';

export const SRecojos = () => {
  const drawer = useNavigation();

  // Tipo de Envios
  const tipoEnvios: string[] = ['Todos', 'Pendientes', 'Recogidos'];

  // Estado del tipo de envio activo
  const [activeTipoEnvio, setActiveTipoEnvio] = useState<string>('Todos');

  // Estado de la data filtrada
  const [filteredData, setFilteredData] = useState<Envio[]>(dataEnvio);

  // Funcion para ejecutar el filtro
  const handleEnvioTypeChange = (tipo: string) => {
    setActiveTipoEnvio(tipo);
    if (tipo === 'Todos') {
      setFilteredData(dataEnvio);
    } else {
      const filtered = dataEnvio.filter(item => item.estado === tipo);
      setFilteredData(filtered);
    }
  };

  return (
    <MainLayout
      title="Byma-ve Ecommerce"
      subTitle="Envios"
      showBackButton={false}
      rightActionIcon="menu-outline"
      rightAction={() => drawer.dispatch(DrawerActions.openDrawer())}>
      <LayoutAplication>
        {/* Contenedor para empujar el contenido */}
        <Layout style={StylesLayout.emptyContainer} />

        {/* Contenedor principal */}
        <Layout style={StylesLayout.mainContainer}>
          <Layout style={StylesLayout.instanciaContainer}>
            {/* Instancia que estara por completar */}
            <Instancia />
          </Layout>

          <Layout style={StylesLayout.dataContainer}>
            {/* Buscador */}
            <Buscador placeholder="Buscar Guía Tracking" />

            {/* Filtrado de Data */}
            <Filtrado
              enviosType={tipoEnvios}
              activeEnvioType={activeTipoEnvio}
              handleEnvioTypeChange={handleEnvioTypeChange}
            />

            {/* Listado de las instancias */}
            <Lista envios={filteredData} redirect="SDetRecojo" />
          </Layout>
        </Layout>
      </LayoutAplication>
    </MainLayout>
  );
};
