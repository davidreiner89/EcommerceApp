/* eslint-disable react/react-in-jsx-scope */
import {Icon, Layout, Text} from '@ui-kitten/components';
import {StylesHistorial} from '../../../Themes/StylesHistorial';
import {EnvioHistorial} from '../../../../Infrastructure/Interfaces/EnvioHistorial';
import {Pressable} from 'react-native';
import {useState} from 'react';
import {ModalImagenes} from './ModalImagenes';

interface CardHistorialProps {
  envio: EnvioHistorial;
}

export const CardHistorial: React.FC<CardHistorialProps> = ({envio}) => {
  // Abertura/cierre del modal
  const [openModal, setOpenModal] = useState(false);
  // Estado de las imagenes
  const [imagenesModal, setImagenesModal] = useState(envio.imagenesComentarios);

  // Funcion abrir modal
  const abrirModal = () => {
    setOpenModal(true);
  };

  // Funcion cerrar modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Layout style={StylesHistorial.card}>
        {/* Hora de inicio de instancia de donde empezo la partida */}
        <Layout style={StylesHistorial.headerCard}>
          <Text style={StylesHistorial.dateCard}>06 Mayo 2024, 19:40</Text>
          <Pressable onPress={abrirModal}>
            <Icon
              name="image-outline"
              fill="#454545"
              style={StylesHistorial.iconImages}
            />
          </Pressable>
        </Layout>
        <Layout style={StylesHistorial.profileCard}>
          <Layout style={StylesHistorial.fotoCard}>
            <Icon
              name="person-outline"
              fill="#454545"
              style={StylesHistorial.cardIcon}
            />
          </Layout>
          <Layout>
            <Text style={StylesHistorial.clientCard}>{envio.nombre}</Text>
            <Text style={StylesHistorial.textCard}>
              Producto: {envio.contenido}
            </Text>
            <Text style={StylesHistorial.textCard}>
              Cantidad: {envio.cantidad}
            </Text>
          </Layout>
        </Layout>
        <Layout>
          <Layout style={StylesHistorial.puntosContainer}>
            <Layout style={StylesHistorial.puntos}>
              <Layout style={StylesHistorial.puntoInicio}>
                <Layout style={StylesHistorial.puntoInicioRelleno} />
              </Layout>
            </Layout>
            <Layout style={StylesHistorial.puntosText}>
              <Text style={StylesHistorial.puntosCard}>Punto de Partida:</Text>
              <Text style={StylesHistorial.textPuntosCard}>
                Av Industrial 512
              </Text>
            </Layout>
            <Layout style={StylesHistorial.rayaDivisoraPuntos} />
          </Layout>
          {envio.intentoUno && (
            <Layout style={StylesHistorial.puntosContainer}>
              <Pressable
                onPress={() => setImagenesModal(envio.imagenesIntentoUno)}
                style={StylesHistorial.puntos}>
                <Layout style={StylesHistorial.intentos} />
              </Pressable>
              <Layout style={StylesHistorial.puntosText}>
                <Text style={StylesHistorial.puntosCard}>
                  Zona Inaccesible:
                </Text>
                <Text style={StylesHistorial.textPuntosCard}>
                  {envio.intentoUno}
                </Text>
                <Text style={StylesHistorial.textPuntosCard}>
                  {envio.fecha}
                </Text>
              </Layout>
              <Layout style={StylesHistorial.rayaDivisoraPuntos} />
            </Layout>
          )}
          {envio.intentoDos && (
            <Layout style={StylesHistorial.puntosContainer}>
              <Pressable
                onPress={() => setImagenesModal(envio.imagenesIntentoDos)}
                style={StylesHistorial.puntos}>
                <Layout style={StylesHistorial.intentos} />
              </Pressable>
              <Layout style={StylesHistorial.puntosText}>
                <Text style={StylesHistorial.puntosCard}>
                  Telefono Apagado:
                </Text>
                <Text style={StylesHistorial.textPuntosCard}>
                  {envio.intentoDos}
                </Text>
                <Text style={StylesHistorial.textPuntosCard}>
                  {envio.fecha}
                </Text>
              </Layout>
              <Layout style={StylesHistorial.rayaDivisoraPuntos} />
            </Layout>
          )}
          <Layout style={StylesHistorial.puntosContainer}>
            <Pressable
              onPress={() => setImagenesModal(envio.imagenesComentarios)}
              style={StylesHistorial.puntos}>
              <Layout style={StylesHistorial.puntoFinal}>
                <Layout style={StylesHistorial.puntoFinalRelleno} />
              </Layout>
            </Pressable>
            <Layout style={StylesHistorial.puntosText}>
              <Text style={StylesHistorial.puntosCard}>Entrega Exitosa:</Text>
              <Text style={StylesHistorial.textPuntosCard}>
                {envio.comentarios}
              </Text>
              <Text style={StylesHistorial.textPuntosCard}>{envio.fecha}</Text>
            </Layout>
          </Layout>
        </Layout>
        <Layout style={StylesHistorial.containerEstado}>
          <Text style={StylesHistorial.textHoras}>{envio.totalHoras}</Text>
          <Text style={StylesHistorial.estadoCard}>{envio.estado}</Text>
        </Layout>
      </Layout>

      {/* Modal de Imagenes */}
      <ModalImagenes
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        imagenesModal={imagenesModal}
      />
    </>
  );
};

// Fecha despacho, hora despaho (backend)
// 4 puntos
// Primer punto (punto de partida, los demas son intentos
// Se va a mostrar el proceso
// Comentario (parte baja)
// Fecha que se entrego
// En el boton es el ultimo intento
// Boton de imagenes
// Fotos de la ultima instancia
