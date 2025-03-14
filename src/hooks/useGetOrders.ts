import { getOrders } from '@/api/orders';
import { useQuery } from '@tanstack/react-query';

export interface Pokemon {
  name: string;
  url: string;
}
export const useGetOrders = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['orders'],
    queryFn: getOrders,
  });

  return { data, isLoading, error };
};
