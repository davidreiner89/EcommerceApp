/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from '@ui-kitten/components';
import {globalColors} from '../Themes/GlobalColors';

export const CajasTexto = ({formData}) => {
  const [backgroundCage, setBackgroundCage] = useState('#0c5b98');
  const [textBelowBoxes, setTextBelowBoxes] = useState('Sin Proceso');

  useEffect(() => {
    // Actualizar el estado y texto según el formData
    if (formData) {
      // Puedes ajustar esto según tu lógica específica
      if (formData.procesoElegido === 'MOT') {
        setBackgroundCage(globalColors.red);
        setTextBelowBoxes('Motivado');
      } else if (
        formData.procesoElegido === 'ENT' ||
        formData.procesoElegido === 'EE'
      ) {
        setBackgroundCage(globalColors.green);
        setTextBelowBoxes('Entregado');
      } else {
        setBackgroundCage('#0c5b98');
        setTextBelowBoxes('Sin Proceso');
      }
    }
  }, [formData]);
  return (
    <View style={{flexDirection: 'column'}}>
      <View style={{width: '100%'}}>
        <View
          style={{
            borderRadius: 999,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={styles.icon}>
            <Icon
              name="cube-outline"
              fill={backgroundCage}
              style={{width: 24, height: 24}}
            />
          </View>
        </View>
      </View>
      <Text style={styles.text}>{textBelowBoxes}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    paddingVertical: 10,
  },
  text: {
    fontSize: 12,
    marginTop: 5,
  },
});
