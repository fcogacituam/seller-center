'use client';
import { redirect } from 'next/navigation';
import React from 'react';

const RootPage = () => {
  redirect('/login');
  return <></>;
};

export default RootPage;
