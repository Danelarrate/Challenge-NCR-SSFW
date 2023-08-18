import { IAccount } from "@/types/accountTypes";

const validCurrency = ['u$s', '$'];
const validTipoLetra = ['CA', 'CC'];

export const normalizedData = (accounts: any): IAccount[] => {
  if (!Array.isArray(accounts)) {
    return [];
  }
  const normalizedAccounts: IAccount[] = accounts.filter((account) => {
    if (!isValidAccountNumber(account?.n)) return false;
    if (!isValidCurrency(account?.moneda)) return false;
    if (!isValidTipoLetra(account?.tipo_letras)) return false;
    if (!isValidSaldo(account?.saldo)) return false;
    return true;
  });
  return normalizedAccounts;
};

const isValidAccountNumber = (n: string): boolean => {
  return (n?.trim() !== ''&& n!==null&& n!==undefined);
};

const isValidCurrency = (moneda: string): boolean => {
  return validCurrency.includes(moneda);
};

const isValidTipoLetra = (tipo_letras: string): boolean => {
  return validTipoLetra.includes(tipo_letras);
};

const isValidSaldo = (saldo: string): boolean => {
  return !isNaN(Number(saldo));
};
