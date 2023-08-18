import { IAccount } from '@/types/accountTypes';
import { formatAccountType } from '@/utils/getAccountCurrency';

interface Props {
  active: IAccount;
}
export const AccountDetails = ({ active }: Props) => {
  return (
    <div className='w-full h-full flex justify-center items-center text-slate-700 text-base'>
      <ul>
        <li className='mb-4'>Saldo de la cuenta: {active.saldo}</li>
        <li className='mb-4'>
          Tipo de cuenta: {formatAccountType(active.tipo_letras, active.moneda)}
        </li>
        <li className='mb-4'>Número de cuenta: {active.n}</li>
      </ul>
    </div>
  );
};
