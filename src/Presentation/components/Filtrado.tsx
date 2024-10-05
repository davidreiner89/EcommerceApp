/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {FlatList, Pressable, Text, View} from 'react-native';
import {tabStyles} from '../Themes/StylesFiltrado';

interface TabsProps {
  enviosType: string[];
  activeEnvioType: string;
  handleEnvioTypeChange: (tipo: string) => void;
}

export const Filtrado: React.FC<TabsProps> = ({
  enviosType,
  activeEnvioType,
  handleEnvioTypeChange,
}) => {
  return (
    <View style={{marginBottom: 15}}>
      <FlatList
        data={enviosType}
        renderItem={({item}) => (
          <Pressable
            style={tabStyles.tab(activeEnvioType, item)}
            onPress={() => handleEnvioTypeChange(item)}>
            <Text style={tabStyles.tabText(activeEnvioType, item)}>{item}</Text>
          </Pressable>
        )}
        keyExtractor={item => item}
        contentContainerStyle={{columnGap: 12}}
        horizontal
      />
    </View>
  );
};
