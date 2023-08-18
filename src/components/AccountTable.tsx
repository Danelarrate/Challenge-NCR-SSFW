'use client';
import { getAccountType } from '@/utils/getAccountCurrency';
import { ordenarPaginas } from '@/utils/getPagination';
import { useEffect, useState } from 'react';
interface IAccount {
  e: string;
  n: string;
  t: string;
  saldo: string;
  moneda: string;
  tipo_letras: string;
}
// • Consumir del api o Json los datos de la cuenta y mostrarlos según las imágenes que se encuentran al final del
// documento.

// • Se deben mostrar dentro de los botones el tipo de cuenta en letras y el numero de la misma.
// • Se deben mostrar máximo 6 botones por pantalla, si se tienen más de 6 cuentas en la primera pantalla se
// deben mostrar 5 más un botón de siguiente, en el caso de hacer click en siguiente paginación se debe mostrar
// un botón anterior que permita volver a la anterior información de cuentas, si hay más cuentas debe mostrar el
// botón siguiente como se muestra en las imágenes de ejemplo al final de documento.
const validCurrency = ['u$s', '$'];
const validTipoLetra = ['CA', 'CC'];
const isNumber = (value: string) => {
  return /^\d+(\.\d+)?$/.test(value);
};
const normalizedData = (accounts: IAccount[]) => {
  const normalizedAccounts: IAccount[] = [];
  accounts.forEach((account) => {
    if (!validCurrency.includes(account.moneda)) return;
    if (!validTipoLetra.includes(account.tipo_letras)) return;
    if (
      account.n.trim() === '' ||
      account.n === undefined ||
      account.n === null
    )
      return;
    if (!isNumber(account.saldo)) return;
    normalizedAccounts.push(account);
  });
  return normalizedAccounts;
};
interface Props {
  active: any | null;
  setActive: any;
}
export const AccountTable = ({ active, setActive }: Props) => {
  const [accounts, setAccounts] = useState<IAccount[][]>([]);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.npoint.io/97d89162575a9d816661',
          { signal: abortController.signal },
        );
        const data = await response.json();
        const validAccounts = normalizedData(data.cuentas);
        console.log(validAccounts);
        setAccounts(ordenarPaginas(validAccounts));
      } catch (error) {
        if (!abortController.signal.aborted) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, []);
  const cuentas = [
    { tipo_letras: 'CC', id: 1, n: 'Cuenta 1' },
    { tipo_letras: 'CA', id: 2, n: 'Cuenta 2' },
    { tipo_letras: 'CC', id: 3, n: 'Cuenta 3' },
    { tipo_letras: 'CC', id: 4, n: 'Cuenta 4' },
    { tipo_letras: 'CC', id: 5, n: 'Cuenta 5' },
    { tipo_letras: 'CC', id: 6, n: 'Cuenta 6' },
    { tipo_letras: 'CC', id: 7, n: 'Cuenta 7' },
    { tipo_letras: 'CC', id: 8, n: 'Cuenta 8' },
    { tipo_letras: 'CC', id: 9, n: 'Cuenta 9' },
    { tipo_letras: 'CC', id: 10, n: 'Cuenta 10' },
    { tipo_letras: 'CC', id: 11, n: 'Cuenta 11' },
    { tipo_letras: 'CC', id: 12, n: 'Cuenta 12' },
    { tipo_letras: 'CC', id: 13, n: 'Cuenta 13' },
    { tipo_letras: 'CC', id: 14, n: 'Cuenta 14' },
    { tipo_letras: 'CC', id: 15, n: 'Cuenta 15' },
    { tipo_letras: 'CC', id: 16, n: 'Cuenta 16' },
    { tipo_letras: 'CC', id: 17, n: 'Cuenta 17' },
    { tipo_letras: 'CC', id: 18, n: 'Cuenta 18' },
    { tipo_letras: 'CC', id: 19, n: 'Cuenta 19' },
    { tipo_letras: 'CC', id: 20, n: 'Cuenta 20' },
  ];

  const [paginaActual, setPaginaActual] = useState(0);

  const handlePaginaAnterior = () => {
    if (paginaActual > 0) {
      setPaginaActual(paginaActual - 1);
    }
  };

  const handlePaginaSiguiente = () => {
    setPaginaActual(paginaActual + 1);
  };

  return (
    <div className='py-11 w-full h-full '>
      {active ? (
        <div className='w-full h-full flex justify-center items-center text-slate-700 text-base'>
          <ul>
            <li className='mb-4'>Saldo de la cuenta: {active.saldo}</li>
            <li className='mb-4'>
              Tipo de cuenta:{getAccountType(active.tipo_letras, active.moneda)}
            </li>
            <li className='mb-4'>Número de cuenta: {active.n}</li>
          </ul>
        </div>
      ) : (
        <div className='w-full h-full text-white grid gap-6 gap-x-7 grid-cols-3 grid-rows-2 '>
          {paginaActual > 0 && (
            <button
              className='p-4  bg-green-500  rounded-md '
              onClick={handlePaginaAnterior}
            >
              {'<< Opciones anteriores'}
            </button>
          )}
          {accounts.length > 0 &&
            accounts[paginaActual].map((cuenta) => (
              <button
                key={cuenta.n + cuenta.moneda}
                className='p-4  bg-green-500 rounded-md '
                onClick={() => setActive(cuenta)}
              >
                {cuenta.tipo_letras === 'CC'
                  ? 'Cuenta Corriente'
                  : 'Caja de Ahorro'}
                <br />
                Nro:{cuenta.n}
              </button>
            ))}

          {paginaActual + 1 < accounts.length && (
            <button
              className='p-4  bg-green-500  rounded-md '
              onClick={handlePaginaSiguiente}
            >
              {'Más opciones >>'}
            </button>
          )}
        </div>
      )}
    </div>
  );
};
