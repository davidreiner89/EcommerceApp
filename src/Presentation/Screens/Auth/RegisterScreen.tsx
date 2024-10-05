/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable curly */
import {Alert, useWindowDimensions} from 'react-native';
import {useAuthStore} from '../../store/auth/useAuthStore';
import {useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../../Navigation/Public/AuthStack';
import {Button, Input, Layout, Text} from '@ui-kitten/components';
import {ScrollView} from 'react-native-gesture-handler';
import {MyIcon} from '../../components/ui/MyIcon';

interface Props extends StackScreenProps<RootStackParams, 'RegisterScreen'> {}

export const RegisterScreen = ({navigation}: Props) => {
  const {height} = useWindowDimensions();

  // Extraigo el metodo de mi hook
  const {register} = useAuthStore();

  // Estado del formulario
  const [form, setForm] = useState({
    email: '',
    password: '',
    fullName: '',
  });

  // Estado del posting
  const [posting, setPosting] = useState(false);

  const onRegister = async () => {
    // Campos vacios
    if (
      form.email.length === 0 &&
      form.password.length === 0 &&
      form.fullName.length === 0
    ) {
      return;
    }

    // Iniciamos el register
    // Loading en tru
    setPosting(true);

    // Le pasamos los campos a la funcion
    const wasSuccessful = await register(
      form.email,
      form.password,
      form.fullName,
    );

    // Loading en false
    setPosting(false);

    // Si es un login correcto
    if (wasSuccessful) return;

    // Alerta
    Alert.alert('Error', 'Error al registrarse');
  };

  return (
    <Layout style={{flex: 1}}>
      <ScrollView style={{marginHorizontal: 40}}>
        <Layout style={{paddingTop: height * 0.3}}>
          <Text category="h1">Crear cuenta</Text>
          <Text category="p2">Por favor, crea una cuenta para continuar</Text>
        </Layout>

        {/* Inputs */}
        <Layout style={{marginTop: 20}}>
          <Input
            placeholder="Nombre completo"
            value={form.fullName}
            onChangeText={text => setForm({...form, fullName: text})}
            accessoryLeft={<MyIcon name="person-outline" />}
            style={{marginBottom: 10}}
          />
          <Input
            placeholder="Correo electrónico"
            keyboardType="email-address"
            value={form.email}
            onChangeText={text => setForm({...form, email: text})}
            autoCapitalize="none"
            accessoryLeft={<MyIcon name="email-outline" />}
            style={{marginBottom: 10}}
          />

          <Input
            placeholder="Contraseña"
            autoCapitalize="none"
            secureTextEntry
            value={form.password}
            onChangeText={text => setForm({...form, password: text})}
            accessoryLeft={<MyIcon name="lock-outline" />}
            style={{marginBottom: 10}}
          />
        </Layout>

        {/* Space */}
        <Layout style={{height: 10}} />

        {/* Button */}
        <Layout>
          <Button
            accessoryRight={<MyIcon name="arrow-forward-outline" white />}
            onPress={onRegister}
            disabled={posting}>
            Crear
          </Button>
        </Layout>

        {/* Información para crear cuenta */}
        <Layout style={{height: 50}} />

        <Layout
          style={{
            alignItems: 'flex-end',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text>¿Ya tienes cuenta?</Text>
          <Text
            disabled={posting}
            status="primary"
            category="s1"
            onPress={() => navigation.goBack()}>
            Ingresar
          </Text>
        </Layout>
      </ScrollView>
    </Layout>
  );
};
