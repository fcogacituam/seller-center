import Logo, { LogoVariant } from '@/components/logo';
import React from 'react';

const Products = () => {
  return (
    <div>
      <div className="mt-5">
        <h2 className="flex">Shadow</h2>
        <div className="flex gap-6">
          <div className="border p-2  shadow-sm">shadow-sm</div>
          <div className="border p-2 shadow-md">shadow-md</div>
          <div className="border p-2 shadow-lg">shadow-lg</div>
          <div className="border p-2 shadow-xl">shadow-xl</div>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="flex">Radius</h2>
        <div className="flex gap-6">
          <div className="border rounded-xs p-1 ">rounded-xs</div>
          <div className="border rounded-sm p-1 ">rounded-sm</div>
          <div className="border  rounded-md  p-1 ">rounded-md</div>
          <div className="border  rounded-lg p-1 ">rounded-lg</div>
          <div className="border  rounded-xl p-1">rounded-xl</div>
          <div className="border  rounded-2xl p-1 ">rounded-2xl</div>
          <div className="border  rounded-3xl p-1 ">rounded-3xl</div>
          <div className="border  rounded-full p-1 ">rounded-full</div>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="flex">Border</h2>
        <div className="flex gap-6">
          <div className="border border-tertiary rounded-xs p-1 ">border</div>
          <div className="border-2 rounded-sm p-1 border-red-400">border-2</div>
          <div className="border-[3px]  rounded-md border-blue-300 p-1 ">border-[3px] </div>
          <div className="border-[4px]  rounded-lg p-1 border-orange-400">border-[4px]</div>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="flex">Logo</h2>
        <div className="flex gap-6">
          <Logo variant={LogoVariant.COLOR} width={130} />
          <Logo variant={LogoVariant.ISO} width={50} />
          <Logo variant={LogoVariant.NEUTRAL} width={130} />
          <Logo variant={LogoVariant.TRANSPARENT} width={130} />
          <Logo variant={LogoVariant.WHITE} width={130} />
        </div>
      </div>

      <div className="mt-5">
        <h2 className="flex">Logo</h2>
        <div className="flex gap-6">
          <Logo variant={LogoVariant.COLOR} width={130} />
          <Logo variant={LogoVariant.ISO} width={50} />
          <Logo variant={LogoVariant.NEUTRAL} width={130} />
          <Logo variant={LogoVariant.TRANSPARENT} width={130} />
          <Logo variant={LogoVariant.WHITE} width={130} />
        </div>
      </div>
    </div>
  );
};

export default Products;
