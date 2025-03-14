'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLogin } from '@/hooks/useLogin';
import { cn } from '@/lib/utils';
import { SessionInterface } from '@/interfaces/session';
import { redirect } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { createSession } from '@/lib/session';

// Define validation schema with Yup
const schema = yup
  .object({
    email: yup
      .string()
      .required('El correo electrónico es obligatorio')
      .email('Ingresa un correo electrónico válido'),
    password: yup
      .string()
      .required('La contraseña es obligatoria')
      .min(6, 'La contraseña debe tener al menos 6 caracteres'),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { mutate: login, isPending, isSuccess, data } = useLogin();
  const t = useTranslations('login');
  const locale = useLocale();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (data: FormData) => {
    login(data);
  };
  useEffect(() => {
    const onLogin = async () => {
      if (isSuccess && data && (data as SessionInterface).accessToken) {
        await createSession(data as SessionInterface);
        redirect(`/${locale}/home`);
      }
    };

    onLogin();
  }, [isSuccess, data, locale]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="font-bold text-lg text-primary">{t('title')}</CardTitle>
          <CardDescription className="text-xs text-neutral-500">{t('subtitle')}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs">
                {t('email')}
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@ejemplo.com"
                {...register('email')}
                className={cn('text-xs', errors.email ? 'border-destructive' : '')}
              />
              {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">{t('password')}</Label>
                <Link href="/recuperar-contrasena" className="text-xs text-primary hover:underline">
                  {t('forgotPassword')}
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  {...register('password')}
                  className={errors.password ? 'border-destructive' : ''}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 h-8 w-8 -translate-y-1/2"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  <span className="sr-only">
                    {showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                  </span>
                </Button>
              </div>
              {errors.password && (
                <p className="text-sm text-destructive">{errors.password.message}</p>
              )}
            </div>
            <Button type="submit" className="w-full mt-4" disabled={isPending}>
              {isPending && <Loader2 className="animate-spin" />}
              {t('login')}
            </Button>
          </form>
          <div className="mt-4 text-center text-xs">
            {t('dontHaveAccount')}
            <Link href="/crear-cuenta" className="text-primary hover:underline">
              {t('createAccount')}
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
