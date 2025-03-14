import React from 'react';

const Sales = () => {
  return (
    <div>
      <div className="mt-5 flex">
        <h2 className="text-xl text-primary">Aligns</h2>
        <div className=" gap-6 w-[200px] border text-right">text-right</div>
        <div className=" gap-6 w-[200px] border text-center">text-center</div>
        <div className="flex gap-6 w-[200px] border text-left">text-left</div>
        <div className="flex gap-6 w-[200px] border text-justify">text-justify </div>
      </div>
      <div className="mt-5">
        <h2 className="text-xl text-primary">weight</h2>
        <div>
          <p className="font-normal">font-normal</p>
          <p className=" font-medium">font-medium</p>
          <p className=" font-bold">font-bold</p>
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-xl text-primary">Paragraphs</h2>
        <div className="flex gap-8">
          <div>
            <p className="text-xs">text-xs</p>
            <p className="text-sm">text-sm</p>
            <p className="text-base">text-base</p>
            <p className="text-lg">text-lg</p>
          </div>
          <div>
            <p className="text-xs font-medium">text-xs</p>
            <p className="text-sm font-medium">text-sm</p>
            <p className="text-base font-medium">text-base</p>
            <p className="text-lg font-medium">text-lg</p>
          </div>
          <div>
            <p className="text-xs font-bold">text-xs</p>
            <p className="text-sm font-bold">text-sm</p>
            <p className="text-base font-bold">text-base</p>
            <p className="text-lg font-bold">text-lg</p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-xl text-primary">headings</h2>
        <div className="flex gap-8">
          <div>
            <p className="text-xl">text-xl</p>
            <p className="text-2xl">text-2xl</p>
            <p className="text-3xl">text-3xl</p>
            <p className="text-4xl">text-4xl</p>
            <p className="text-5xl">text-5xl</p>
          </div>
          <div>
            <p className="text-xl font-medium">text-xl</p>
            <p className="text-2xl font-medium">text-2xl</p>
            <p className="text-3xl font-medium">text-3xl</p>
            <p className="text-4xl font-medium">text-4xl</p>
            <p className="text-5xl font-medium">text-5xl</p>
          </div>
          <div>
            <p className="text-xl font-bold">text-xl</p>
            <p className="text-2xl font-bold">text-2xl</p>
            <p className="text-3xl font-bold">text-3xl</p>
            <p className="text-4xl font-bold">text-4xl</p>
            <p className="text-5xl font-bold">text-5xl</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
