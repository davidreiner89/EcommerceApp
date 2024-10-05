import {create} from 'zustand';
import {User} from '../../../domain/entities/user';
import {AuthStatus} from '../../../infrastructure/interfaces/auth.status';
import {
  authCheckStatus,
  authLogin,
  authRegister,
} from '../../../actions/auth/auth';
import {StorageAdapter} from '../../../config/adapters/storage-adapter';

export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;

  register: (
    email: string,
    password: string,
    fullName: string,
  ) => Promise<boolean>;
  login: (email: string, password: string) => Promise<boolean>;
  checkStatus: () => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()((set, _get) => ({
  status: 'checking',
  token: undefined,
  user: undefined,

  // Login
  login: async (email: string, password: string) => {
    const resp = await authLogin(email, password);
    if (!resp) {
      set({status: 'unauthenticated', token: undefined, user: undefined});
      return false;
    }
    await StorageAdapter.setItem('token', resp.token);
    set({status: 'authenticated', token: resp.token, user: resp.user});

    return true;
  },

  // Register
  register: async (email: string, password: string, fullName: string) => {
    const resp = await authRegister(email, password, fullName);
    console.log(resp);

    // No autenticado
    if (!resp) {
      set({status: 'unauthenticated', token: undefined, user: undefined});
      return false;
    }

    // Guardamos el token, usuario autenticado
    await StorageAdapter.setItem('token', resp.token);
    set({status: 'authenticated', token: resp.token, user: resp.user});
    return true;
  },

  // Ver Stado del Login
  checkStatus: async () => {
    const resp = await authCheckStatus();
    if (!resp) {
      set({status: 'unauthenticated', token: undefined, user: undefined});
      return;
    }
    await StorageAdapter.setItem('token', resp.token);
    set({status: 'authenticated', token: resp.token, user: resp.user});
  },

  // Cerrar Sesion
  logout: async () => {
    await StorageAdapter.removeItem('token');
    set({status: 'unauthenticated', token: undefined, user: undefined});
  },
}));
