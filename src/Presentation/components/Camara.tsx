/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useState, useEffect} from 'react';
import {Pressable} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {StylesDetEnvio} from '../Themes/StylesDetEnvio';
import {Icon} from '@ui-kitten/components';

interface CamaraProps {
  image: string | null;
  setImage: (uri: string | null) => void;
}

export const Camara: React.FC<CamaraProps> = ({image, setImage}) => {
  // Estado para indicar el color del botón según si hay una foto o no
  const [buttonColor, setButtonColor] = useState('#a9a9a9');

  const pickImage = async () => {
    let result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
      selectionLimit: 1,
    });

    // Cambiamos el color del boton y guardamos la imagen en nuestro estado.
    if (result.assets && result.assets.length > 0 && result.assets[0].uri) {
      setImage(result.assets[0].uri);
      setButtonColor('#2f7d23');
    }
  };

  // UseEffect para cambiar el color del botón cuando la imagen cambia
  useEffect(() => {
    if (!image) {
      // Si no hay imagen, establecer el color inicial
      setButtonColor('#a9a9a9');
    }
  }, [image]);

  return (
    <Pressable
      onPress={pickImage}
      style={[StylesDetEnvio.buttonCamara, {backgroundColor: buttonColor}]}>
      <Icon
        name="camera-outline"
        fill="white"
        style={{width: 18, height: 18}}
      />
    </Pressable>
  );
};
