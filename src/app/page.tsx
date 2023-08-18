'use client';
import { AccountTable } from '@/components/AccountTable';
import { useState } from 'react';

export default function Home() {
  const [open, setOpen] = useState<any>(null);
  return (
    <main className='h-full'>
      <section className='flex h-4/5 flex-col justify-center p-4 items-center gap-4 '>
        <h1 className=' text-lg text-slate-700'>Consulta de saldo</h1>
        <h2 className='  text-3xl font-semibold text-slate-700'>
          {open === null
            ? 'Selecciona la Cuenta a Consultar'
            : 'Este es tu saldo actual'}
        </h2>
        <AccountTable active={open} setActive={setOpen} />
      </section>

      <footer className='h-1/5 w-full p-6 flex items-end border-t border-gray-300'>
        <button
          className='p-4 px-6  bg-green-500  rounded-md  text-white'
          onClick={() => setOpen(null)}
        >
          Salir
        </button>
      </footer>
    </main>
  );
}
