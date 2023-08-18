'use client';
import { IAccount } from '@/types/accountTypes';
import { ordenarPaginas } from '@/utils/getPagination';
import { normalizedData } from '@/utils/utils';
import { useEffect, useState } from 'react';
import { AccountDetails } from './AccountDetails';
import { AccountList } from './AccountList';

interface Props {
  active: IAccount | null;
  setActive: (value: IAccount) => void;
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

  return (
    <div className='py-11 w-full h-full '>
      {active ? (
        <AccountDetails active={active} />
      ) : (
        <AccountList accounts={accounts} setActive={setActive} />
      )}
    </div>
  );
};
