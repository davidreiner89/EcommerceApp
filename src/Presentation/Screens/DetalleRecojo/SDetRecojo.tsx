/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {StackScreenProps} from '@react-navigation/stack';
import {Icon, Layout, Text} from '@ui-kitten/components';
import {Alert, TextInput, Pressable} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import {useState} from 'react';

import {StylesDetEnvio} from '../../Themes/StylesDetEnvio';
import {Datos} from './Datos/Datos';
import {CajasTexto} from '../../components/CajasTexto';
import {Calendario} from '../../components/Calendario';
import {Camara} from '../../components/Camara';
import {elegidoTipoProceso, tipoProceso} from '../../../Data';
import {StylesCajas} from '../../Themes/StylesCajas';
import {LayoutAplication} from '../../layouts/LayoutAplication';
import {RecojosStackParams} from '../../../Navigation/Protected/Recojos/RecojosStackNavigation';

interface Props extends StackScreenProps<RecojosStackParams, 'SDetRecojo'> {}

export const SDetRecojo = ({route, navigation}: Props) => {
  // Capturamos el envio que nos llega por la ruta
  const {envio} = route.params;

  // Obtenemos el dia
  const today = new Date();
  const currentDay = today.toISOString().split('T')[0];

  // Estado para mostrar/ocultar el modal del calendario
  const [openModal, setOpenModal] = useState(false);

  // Estado para almacenar los formularios enviados
  const [formHistory, setFormHistory] = useState([]);

  // Estado para almacenar los datos
  const [formData, setFormData] = useState({
    procesoElegido: '',
    estadoMercancia: '',
    fechaProceso: '',
    comentarios: '',
    primeraCamara: null,
    segundaCamara: null,
    terceraCamara: null,
    cuartaCamara: null,
    quintaCamara: null,
    sextaCamara: null,
  });

  // Funcion para retroceder
  const handleGoBack = () => {
    navigation.goBack();
  };

  // Funcion para abrir/cerrar el modal del calendario
  const handleModal = () => {
    setOpenModal(!openModal);
  };

  // Funcion para ver la ruta del envio
  const handleVerRuta = () => {
    navigation.navigate('SRuta');
  };

  // Funcion para seleccionar el dia del calendario
  const handleDateSelection = (day: {dateString: string}) => {
    const selectedDay = new Date(day.dateString);
    setFormData({
      ...formData,
      fechaProceso: selectedDay.toISOString().split('T')[0],
    });
    handleModal();
  };

  // Funcion para guardar el proceso
  const handleSaveProcess = () => {
    // Guardar el estado actual en el historial
    setFormHistory([...formHistory, formData]);

    setFormData({
      procesoElegido: '',
      estadoMercancia: '',
      fechaProceso: '',
      comentarios: '',
      primeraCamara: null,
      segundaCamara: null,
      terceraCamara: null,
      cuartaCamara: null,
      quintaCamara: null,
      sextaCamara: null,
    });

    Alert.alert(
      '¡Caja llenada correctamente!',
      'Se llenaron todas las cajas correctamente.',
      [
        {
          text: 'OK',
          onPress: () => navigation.goBack(),
        },
      ],
    );
  };

  return (
    <LayoutAplication>
      {/* Contenedor para empujar el contenido */}
      <Layout style={StylesDetEnvio.emptyContainer}>
        <Pressable onPress={handleGoBack} style={StylesDetEnvio.iconContainer}>
          <Icon
            fill="#000000"
            name="arrow-back-outline"
            style={{width: 20, height: 20}}
          />
        </Pressable>
      </Layout>

      {/* Contenedor de Datos */}
      <Layout style={StylesDetEnvio.container}>
        {/* Datos */}
        <Layout style={StylesDetEnvio.dataContainer}>
          <Datos envio={envio} handleVerRuta={handleVerRuta} />

          {/* Cajas */}
          <Layout style={StylesCajas.container}>
            <CajasTexto
              formData={
                formHistory.length > 0
                  ? formHistory[formHistory.length - 1]
                  : null
              }
            />
          </Layout>

          <Layout style={StylesDetEnvio.line} />

          <SelectList
            setSelected={(value: string) =>
              setFormData({...formData, procesoElegido: value})
            }
            data={tipoProceso}
            placeholder={'Proceso'}
            search={false}
            boxStyles={StylesDetEnvio.selectBox}
            dropdownStyles={{
              borderWidth: 0,
              backgroundColor: 'rgb(241 245 249)',
            }}
          />

          <Layout style={StylesDetEnvio.line} />

          <SelectList
            setSelected={(value: string) =>
              setFormData({...formData, estadoMercancia: value})
            }
            data={elegidoTipoProceso[formData.procesoElegido] || []}
            placeholder={'Estado de Mercancía'}
            search={false}
            boxStyles={StylesDetEnvio.selectBox}
            dropdownStyles={{
              borderWidth: 0,
              backgroundColor: 'rgb(241 245 249)',
            }}
          />

          <Layout style={StylesDetEnvio.line} />

          <Pressable onPress={handleModal}>
            <Text style={StylesDetEnvio.textStatus}>Fecha del Proceso</Text>
          </Pressable>

          {/* Modal del Calendario */}
          <Calendario
            currentDay={currentDay}
            handleDateSelection={handleDateSelection}
            handleModal={handleModal}
            openModal={openModal}
          />

          <Layout style={StylesDetEnvio.line} />

          <TextInput
            style={StylesDetEnvio.textInput}
            placeholderTextColor={'#000'}
            multiline={true}
            placeholder="Comentario ..."
            value={formData.comentarios}
            onChangeText={value =>
              setFormData({...formData, comentarios: value})
            }
          />

          <Layout style={StylesDetEnvio.line} />

          {/* Imagenes */}
          <Text style={StylesDetEnvio.textStatus}>Imágenes</Text>
          <Layout style={{flexDirection: 'row', marginVertical: 15}}>
            <Camara
              image={formData.primeraCamara}
              setImage={uri => setFormData({...formData, primeraCamara: uri})}
            />
            <Camara
              image={formData.segundaCamara}
              setImage={uri => setFormData({...formData, segundaCamara: uri})}
            />
            <Camara
              image={formData.terceraCamara}
              setImage={uri => setFormData({...formData, terceraCamara: uri})}
            />
            <Camara
              image={formData.cuartaCamara}
              setImage={uri => setFormData({...formData, cuartaCamara: uri})}
            />
            <Camara
              image={formData.quintaCamara}
              setImage={uri => setFormData({...formData, quintaCamara: uri})}
            />
            <Camara
              image={formData.sextaCamara}
              setImage={uri => setFormData({...formData, sextaCamara: uri})}
            />
          </Layout>
        </Layout>

        {/* Enviar */}
        <Pressable
          onPress={handleSaveProcess}
          style={StylesDetEnvio.enviarInstancia}>
          <Text style={StylesDetEnvio.textButton}>Finalizar</Text>
          <Icon
            name="checkmark-circle-2-outline"
            fill="#ffffff"
            style={StylesDetEnvio.iconButton}
          />
        </Pressable>
      </Layout>
    </LayoutAplication>
  );
};
