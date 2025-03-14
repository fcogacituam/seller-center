import { verifySession } from '@/lib/dal';
import axios from 'axios';

const axiosInterceptor = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACK_URL,
});

axiosInterceptor.interceptors.request.use(
  async (config) => {
    const { accessToken } = await verifySession();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInterceptor;
