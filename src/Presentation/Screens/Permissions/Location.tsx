/* eslint-disable react/react-in-jsx-scope */
import {Pressable, Text, View} from 'react-native';
import {usePermissions} from '../../store/Permissions/usePermissionsStore';
import {Icon} from '@ui-kitten/components';
import {StylesPermissions} from '../../Themes/StylesPermissions';

export const SLocation = () => {
  // Hago uso de mi Hook
  const {requestLocationPermissionStore} = usePermissions();

  return (
    <View style={StylesPermissions.container}>
      <Icon name="pin-outline" fill="#454545" style={StylesPermissions.icon} />
      <Text style={StylesPermissions.title}>Acceso a la Localización</Text>
      <Text style={StylesPermissions.text}>
        Al continuar, se le pedirá que permita que la aplicación acceda a la
        localización del dispositivo
      </Text>
      <Pressable
        style={StylesPermissions.btnPermisos}
        onPress={requestLocationPermissionStore}>
        <Icon
          name="arrow-forward-outline"
          fill="#f6f6f6"
          style={StylesPermissions.btnIcon}
        />
      </Pressable>
    </View>
  );
};
