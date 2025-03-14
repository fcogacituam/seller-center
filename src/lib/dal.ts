'use server';

import { cookies } from 'next/headers';
import { decrypt } from '@/lib/session';
import { cache } from 'react';
import { redirect } from 'next/navigation';

export const verifySession = cache(async () => {
  const cookie = (await cookies()).get('session')?.value;
  const session = await decrypt(cookie);

  if (!session?.accessToken) {
    redirect('/login');
  }

  return { isAuth: true, accessToken: session!.accessToken, role: session!.jwtPayload.role };
});
