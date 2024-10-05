/* eslint-disable react/react-in-jsx-scope */
import {Pressable, Text, View} from 'react-native';
import {usePermissions} from '../../store/Permissions/usePermissionsStore';
import {Icon} from '@ui-kitten/components';
import {StylesPermissions} from '../../Themes/StylesPermissions';

export const SStorage = () => {
  // Hago uso de mi Hook
  const {requestStoragePermissionStore} = usePermissions();

  return (
    <View style={StylesPermissions.container}>
      <Icon name="list-outline" fill="#454545" style={StylesPermissions.icon} />
      <Text style={StylesPermissions.title}>Acceso a la Galería</Text>
      <Text style={StylesPermissions.text}>
        Al continuar, se le pedirá que permita que la aplicación acceda a la
        galería del dispositivo
      </Text>
      <Pressable
        style={StylesPermissions.btnPermisos}
        onPress={requestStoragePermissionStore}>
        <Icon
          name="arrow-forward-outline"
          fill="#f6f6f6"
          style={StylesPermissions.btnIcon}
        />
      </Pressable>
    </View>
  );
};
