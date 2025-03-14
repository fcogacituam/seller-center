import { OrderInterface } from '@/interfaces/orders';
import axiosInterceptor from './axiosInterceptor';

export const getOrders = async (): Promise<OrderInterface[]> => {
  try {
    const data = await axiosInterceptor.get('/v1/orders?limit=15&offset=0');
    return data.data.data;
  } catch {
    return [];
  }
};
