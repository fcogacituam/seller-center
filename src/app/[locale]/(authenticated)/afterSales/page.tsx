'use client';
import { useGetOrders } from '@/hooks/useGetOrders';
import { OrderInterface } from '@/interfaces/orders';
import React from 'react';

const AfterSales = () => {
  const { data, isLoading } = useGetOrders();
  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      <p className="text-xl text-bold">Client Data fetching</p>
      <p className="text-base text-neutral-800 pt-2">Use when real-time data is needed</p>
      <p className="text-xs text-neutral-600 pt-2">
        First, create the API call on <code className="bg-neutral-900 text-neutral-200"> /api</code>
        . Then, create the hook using tanstack-query. Finally, call the hook in the component.
      </p>
      {data && data?.map((order: OrderInterface, index) => <div key={index}>{order.id}</div>)}
    </div>
  );
};

export default AfterSales;
