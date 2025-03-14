'use client';
import { roles } from '@/interfaces/session';
import { verifySession } from '@/lib/dal';
import { useEffect, useState } from 'react';

export const useGetRole = () => {
  const [role, setRole] = useState<string>('');
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    async function fetchSession() {
      try {
        const { role } = await verifySession(); // Llama a la función del servidor
        if (role) {
          setRole(role);
          setIsAdmin(role === roles.ADMIN);
        }
      } catch {}
    }

    fetchSession();
  }, []);

  return { role, isAdmin };
};
