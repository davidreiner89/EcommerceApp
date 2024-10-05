/* eslint-disable react/react-in-jsx-scope */
import {Button, Icon} from '@ui-kitten/components';
import {FlatList, Image, Modal, Pressable, View} from 'react-native';
import {useState} from 'react';
import RNFS from 'react-native-fs';
import {StylesModalImg} from '../../../Themes/StylesModalImg';

// Como viene la imagen
interface Imagen {
  url: string;
}

// Props del componente
interface ModalImgProps {
  openModal: boolean;
  handleCloseModal: () => void;
  imagenesModal: Imagen[];
}

export const ModalImagenes = ({
  openModal,
  handleCloseModal,
  imagenesModal,
}: ModalImgProps) => {
  // Almacenar imagenes
  const [selectedImages, setSelectedImages] = useState<number[]>([]);

  // Seleccion de imagenes
  const handleImageSelection = (index: number) => {
    // Verificamos si la imagen ya esta seleccionada
    if (selectedImages.includes(index)) {
      // Eliminamos la imagen de la seleccion
      setSelectedImages(prevSelectedImages =>
        prevSelectedImages.filter(selectedIndex => selectedIndex !== index),
      );
    } else {
      // Agregamos la imagen a la seleccion
      setSelectedImages(prevSelectedImages => [...prevSelectedImages, index]);
    }
  };

  // Descarga de imagenes
  const downloadImage = async (imageUrl: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64data = reader.result as string;
        const downloadDir = RNFS.ExternalStorageDirectoryPath + '/DCIM/Camera/';
        const filePath = downloadDir + imageUrl.split('/').pop();
        await RNFS.writeFile(filePath, base64data.split(',')[1], 'base64');
      };
      reader.readAsDataURL(blob);
    } catch (error) {
      console.error('No se pudieron descargar las imagenes:', error);
    }
  };

  // Descargar todas las imagenes
  const handleDownloadAll = async () => {
    for (const image of imagenesModal) {
      await downloadImage(image.url);
    }
  };

  // Descargar imagenes seleccionadas
  const handleDownloadSelected = async () => {
    for (const index of selectedImages) {
      await downloadImage(imagenesModal[index].url);
    }
  };

  return (
    <Modal animationType="fade" transparent={true} visible={openModal}>
      <View style={StylesModalImg.centeredView}>
        <View style={StylesModalImg.opacidad} />
        <View style={StylesModalImg.modalView}>
          {/* Header Modal */}
          <View style={StylesModalImg.headerModal}>
            <Pressable
              onPress={handleCloseModal}
              style={StylesModalImg.containerClose}>
              <Icon
                name="close-outline"
                fill="#454545"
                style={StylesModalImg.close}
              />
            </Pressable>
          </View>

          {/* Body Modal */}
          <View style={StylesModalImg.bodyModal}>
            <FlatList
              data={imagenesModal}
              numColumns={2}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => (
                <Pressable
                  onPress={() => handleImageSelection(index)}
                  style={[
                    StylesModalImg.containerImagenModal,
                    {
                      borderWidth: 1,
                      borderColor: selectedImages.includes(index)
                        ? '#0d6db3'
                        : '#3d3d3d',
                    },
                  ]}>
                  <Image
                    source={{uri: item.url}}
                    style={StylesModalImg.imagenModal}
                  />
                </Pressable>
              )}
            />
          </View>

          {/* Boton */}
          <View style={StylesModalImg.footerModal}>
            {/* El boton estara deshabilitado si no se ha seleccionado ninguna imagen */}
            <Button
              size="small"
              disabled={selectedImages.length === 0}
              onPress={handleDownloadSelected}
              style={StylesModalImg.descargarButton}>
              Descargar Seleccion
            </Button>
            <Button
              size="small"
              onPress={handleDownloadAll}
              style={StylesModalImg.descargarButton}>
              Descargar Todo
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

// Molde de colores
// 0d6db3
