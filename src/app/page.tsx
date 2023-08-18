'use client';
import { AccountTable } from '@/components/AccountTable';
import { IAccount } from '@/types/accountTypes';
import { useState } from 'react';

export default function Home() {
  const [active, setActive] = useState<IAccount | null>(null);
  return (
    <main className='h-full'>
      <section className='flex h-4/5 flex-col justify-center p-4 items-center gap-4 '>
        <h1 className='text-lg text-slate-700'>Consulta de saldo</h1>
        <h2 className='text-3xl font-semibold text-slate-700'>
          {active === null
            ? 'Selecciona la Cuenta a Consultar'
            : 'Este es tu saldo actual'}
        </h2>
        <AccountTable active={active} setActive={setActive} />
      </section>

      <footer className='h-1/5 w-full p-6 flex items-end border-t border-gray-300'>
        <button
          className='p-4 px-6 bg-ncrgreen rounded-md text-white'
          onClick={() => setActive(null)}
        >
          Salir
        </button>
      </footer>
    </main>
  );
}
