/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {View} from 'react-native';
import {Input} from '@ui-kitten/components';
import {MyIcon} from './ui/MyIcon';
import {StylesBuscador} from '../Themes/StylesBuscador';

interface BuscadorProps {
  placeholder: string;
}

export const Buscador = ({placeholder}: BuscadorProps) => {
  return (
    <View style={StylesBuscador.container}>
      <Input
        style={{backgroundColor: 'transparent', borderRadius: 15}}
        accessoryLeft={<MyIcon name="search-outline" />}
        placeholder={placeholder}
      />
    </View>
  );
};
