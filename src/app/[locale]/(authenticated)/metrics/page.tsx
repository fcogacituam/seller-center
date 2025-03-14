'use client';
import { useGetRole } from '@/hooks/useGetRole';
import React from 'react';

const Metrics = () => {
  const { isAdmin } = useGetRole();
  return (
    <div>
      <div>Métricas</div>
      {isAdmin && <div> Mensaje secreto para admin</div>}
    </div>
  );
};

export default Metrics;
