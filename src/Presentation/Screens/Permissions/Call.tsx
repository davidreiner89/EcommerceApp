/* eslint-disable react/react-in-jsx-scope */
import {Icon} from '@ui-kitten/components';
import {Pressable, Text, View} from 'react-native';
import {usePermissions} from '../../store/Permissions/usePermissionsStore';
import {StylesPermissions} from '../../Themes/StylesPermissions';

export const SCall = () => {
  // Hago uso de mi Hook
  const {requestCallPermissionStore} = usePermissions();

  return (
    <View style={StylesPermissions.container}>
      <Icon
        name="phone-call-outline"
        fill="#454545"
        style={StylesPermissions.icon}
      />
      <Text style={StylesPermissions.title}>Acceso a Llamadas</Text>
      <Text style={StylesPermissions.text}>
        Al continuar, se le pedirá que permita que la aplicación pueda realizar
        llamadas en el dispositivo
      </Text>
      <Pressable
        style={StylesPermissions.btnPermisos}
        onPress={requestCallPermissionStore}>
        <Icon
          name="arrow-forward-outline"
          fill="#f6f6f6"
          style={StylesPermissions.btnIcon}
        />
      </Pressable>
    </View>
  );
};
