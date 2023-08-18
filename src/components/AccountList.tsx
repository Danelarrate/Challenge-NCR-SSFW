import { IAccount } from '@/types/accountTypes';
import { useState } from 'react';

interface Props {
  accounts: IAccount[][];
  setActive: (account: IAccount) => void;
}
enum Direction {
  PREV = 'prev',
  NEXT = 'next',
}
export const AccountList = ({ accounts, setActive }: Props) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (direction: Direction) => {
    if (direction === Direction.PREV) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className='w-full h-full text-white grid gap-6 gap-x-7 grid-cols-3 grid-rows-2 '>
      {currentPage > 0 && (
        <button
          className='p-4 bg-ncrgreen rounded-md '
          onClick={() => handlePageChange(Direction.PREV)}
        >
          {'<< Opciones anteriores'}
        </button>
      )}
      {accounts.length > 0 &&
        accounts[currentPage].map((cuenta) => (
          <button
            key={cuenta.n + cuenta.moneda}
            className='p-4 bg-ncrgreen rounded-md '
            onClick={() => setActive(cuenta)}
          >
            {cuenta.tipo_letras === 'CC'
              ? 'Cuenta Corriente'
              : 'Caja de Ahorro'}
            <br />
            Nro:{cuenta.n}
          </button>
        ))}
      {currentPage + 1 < accounts.length && (
        <button
          className='p-4 bg-ncrgreen rounded-md '
          onClick={() => handlePageChange(Direction.NEXT)}
        >
          {'Más opciones >>'}
        </button>
      )}
    </div>
  );
};
