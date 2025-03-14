import React from 'react';

type Time = {
  dateTime: string;
};
async function getTime(): Promise<Time> {
  try {
    const res = await fetch(
      'https://timeapi.io/api/time/current/zone?timeZone=America%2FSantiago',
      {
        next: { revalidate: 10 },
        // cache: 'no-store',
      },
    );
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = res.json();
    return data;
  } catch (error) {
    console.error('Error fetching time:', error);
    return { dateTime: 'Unavailable' };
  }
}
const Finance = async () => {
  const [time] = await Promise.all([getTime()]);

  return (
    <div>
      <p className="text-xl text-bold">Server Data fetching</p>
      <p className="text-base text-neutral-800 pt-2">
        Use when static, or semi-static data is required
      </p>
      <p className="text-xs text-neutral-600 pt-2">
        <code className="bg-neutral-900 text-neutral-200"> revalidate</code> is used to refresh the
        data every X seconds. use for data that changes not often. <br />
        <code className="bg-neutral-900 text-neutral-200"> cache: no-store</code> is used to prevent
        caching. use for data that changes frequently.
      </p>

      <p className="p-6 text-2xl text-primary"> {time.dateTime}</p>
    </div>
  );
};

export default Finance;
