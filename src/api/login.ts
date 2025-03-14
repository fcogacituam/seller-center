import { LoginInterface } from '@/interfaces/login';
import { SessionInterface } from '@/interfaces/session';
import axios from 'axios';

export const login = async ({
  email,
  password,
}: LoginInterface): Promise<SessionInterface | boolean> => {
  try {
    const data = await axios.post(`${process.env.NEXT_PUBLIC_BACK_URL}/auth/login`, {
      email,
      password,
    });
    return data.data;
  } catch {
    return false;
  }
};
