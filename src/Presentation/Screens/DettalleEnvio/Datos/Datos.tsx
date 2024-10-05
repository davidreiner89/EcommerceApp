/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {Icon, Layout, Text} from '@ui-kitten/components';
import {StylesDetEnvio} from '../../../Themes/StylesDetEnvio';
import {Linking, Pressable} from 'react-native';
import {Envio} from '../../../../infrastructure/interfaces/Envio';

interface DatosEnvioProps {
  envio: Envio;
  handleVerRuta: () => void;
}

export const Datos = ({envio, handleVerRuta}: DatosEnvioProps) => {
  // Llamar
  const handleCall = () => {
    Linking.openURL(`tel:+51${envio.telefono}`);
  };

  return (
    <>
      {/* Primera Seccion */}
      <Layout>
        <Text style={StylesDetEnvio.textDetEnvio}>{envio.numeroEnvio}</Text>
        <Text style={StylesDetEnvio.pointTitle}>
          {envio.direccion} - {envio.destinoLlegada}
        </Text>
      </Layout>

      {/* Segunda Seccion */}
      <Layout style={StylesDetEnvio.columnsContainer}>
        {/* Fila Uno */}
        <Layout style={StylesDetEnvio.filaUno}>
          <Pressable style={StylesDetEnvio.phone} onPress={handleCall}>
            <Icon
              name="phone-outline"
              fill="#0c5b98"
              style={{width: 24, height: 24}}
            />
          </Pressable>
        </Layout>

        {/* Fila Dos */}
        <Layout style={StylesDetEnvio.filaDos}>
          <Text style={StylesDetEnvio.textDetEnvio}>{envio.nombre}</Text>
          <Text style={StylesDetEnvio.pointTitle}>
            Teléfono: {envio.telefono}
          </Text>
          <Text style={StylesDetEnvio.pointTitle}>
            Contenido: {envio.contenido}
          </Text>
          <Text style={StylesDetEnvio.pointTitle}>
            Cantidad: {envio.cantidad}
          </Text>
          <Layout>
            <Pressable
              style={StylesDetEnvio.buttonRutas}
              onPress={handleVerRuta}>
              <Text style={StylesDetEnvio.textRutas}>Ver Ruta</Text>
            </Pressable>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};
