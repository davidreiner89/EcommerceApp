import {tesloApi} from '../../config/api/tesloApi';
import {User} from '../../domain/entities/user';
import type {AuthResponse} from '../../infrastructure/interfaces/auth.responses';

const returnUserToken = (data: AuthResponse) => {
  const user: User = {
    id: data.id,
    email: data.email,
    fullName: data.fullName,
    isActive: data.isActive,
    roles: data.roles,
  };

  return {
    user: user,
    token: data.token,
  };
};

export const authLogin = async (email: string, password: string) => {
  email = email.toLowerCase();

  try {
    const {data} = await tesloApi.post<AuthResponse>('/auth/login', {
      email,
      password,
    });

    console.log(`Respuesta de authLogin: ${data}`);
    return returnUserToken(data);
  } catch (error) {
    console.log(`Error en la peticion authLogin: ${error}`);
    return null;
  }
};

// Register
export const authRegister = async (
  email: string,
  password: string,
  fullName: string,
) => {
  // Parseamos el email
  email = email.toLowerCase();

  // Capturamos los campos necesarios
  const user = {
    email,
    password,
    fullName,
  };

  try {
    // Recibimos la data de la peticion register
    const {data} = await tesloApi.post<AuthResponse>('/auth/register', user);

    // Convertimos la data
    console.log(`Respuesta de authRegister: ${data}`);
    return returnUserToken(data);
  } catch (error) {
    // Mostramos el error en consola
    console.log(`Error en la peticion authRegister: ${error}`);
    return null;
  }
};

export const authCheckStatus = async () => {
  try {
    const {data} = await tesloApi.get<AuthResponse>('/auth/check-status');
    console.log(`Respuesta de authCheckStatus: ${data}`);
    return returnUserToken(data);
  } catch (error) {
    console.log(`Respuesta de authCheckStatus: ${{error}}`);
    return null;
  }
};
