export const formatAccountType = (letterType: string, currency: string) => {
  const letter = letterType === 'CC' ? 'Cuenta Corriente' : letterType === 'CA' ? 'Caja de Ahorro' : 'Cuenta desconocida';
  
  const currencyString = currency === 'u$s' ? 'Dolares' : currency === '$' ? 'Pesos' : 'moneda desconocida';
  
  return `${letter} en ${currencyString}`;
};