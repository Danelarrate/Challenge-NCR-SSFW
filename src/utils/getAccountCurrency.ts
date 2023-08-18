 export const getAccountType = (letterType: string, currency: string) => {
    const letter = letterType === 'CC' ? 'Cuenta Corriente' : 'Caja de Ahorro';
    const currencyString = currency === 'u$s' ? 'Dolares' : 'Pesos';
    return letter + ' en ' + currencyString;
  };