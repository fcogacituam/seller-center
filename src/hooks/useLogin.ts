import { login } from '@/api/login';
import { LoginInterface } from '@/interfaces/login';
import { useMutation } from '@tanstack/react-query';

export const useLogin = () => {
  const { mutate, isPending, isSuccess, data, isError } = useMutation({
    mutationFn: (credentials: LoginInterface) => login(credentials),
  });

  return { mutate, isPending, isSuccess, data, isError };
};
