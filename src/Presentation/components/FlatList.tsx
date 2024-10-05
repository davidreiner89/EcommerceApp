/* eslint-disable react/react-in-jsx-scope */
import {FlatList, View} from 'react-native';
import {Card} from './Card';
import {Envio} from '../../Infrastructure/Interfaces/Envio';
import {StylesFlatList} from '../Themes/StylesFlatList';

interface FlatListProps {
  envios: Envio[];
  redirect: string;
}

export const Lista: React.FC<FlatListProps> = ({envios, redirect}) => {
  return (
    <View style={StylesFlatList.container}>
      <View style={StylesFlatList.cardsContainer}>
        <FlatList
          data={envios}
          numColumns={1}
          keyExtractor={(item: any) => item.id}
          renderItem={({item}: {item: any}) => (
            <Card envio={item as Envio} redirect={redirect} />
          )}
        />
      </View>
    </View>
  );
};
