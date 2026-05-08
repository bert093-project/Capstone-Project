'use client'
import Clock from 'react-live-clock'

export default function RealtimeClock() {
  return (
    <main>
      <div className='flex space-x-2 text-lg'>
        <p>NTB Indonesia</p>
        <Clock
          format='HH:mm'
          interval={1000}
          ticking={true}
          className='pt-0.4'
          timezone='Asia/Makassar'
        />
      </div>
    </main>
  );
}
