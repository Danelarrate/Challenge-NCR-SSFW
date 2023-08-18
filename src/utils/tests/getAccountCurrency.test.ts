// Generated by CodiumAI

import { formatAccountType } from "../getAccountCurrency";

describe('formatAccountType', () => {


  it('should return "Cuenta Corriente en Dolares" when letterType is "CC" and currency is "u$s"', () => {
    const result = formatAccountType('CC', 'u$s');
    expect(result).toBe('Cuenta Corriente en Dolares');
  });


  it('should return "Caja de Ahorro en Pesos" when letterType is "CA" and currency is "$"', () => {
    const result = formatAccountType('CA', '$');
    expect(result).toBe('Caja de Ahorro en Pesos');
  });


  it('should return "Cuenta desconocida en moneda desconocida" when letterType is "unknown" and currency is "unknown"', () => {
    const result = formatAccountType('unknown', 'unknown');
    expect(result).toBe('Cuenta desconocida en moneda desconocida');
  });


  it('should return "Cuenta Corriente en moneda desconocida" when letterType is "CC" and currency is "unknown"', () => {
    const result = formatAccountType('CC', 'unknown');
    expect(result).toBe('Cuenta Corriente en moneda desconocida');
  });


  it('should return "Cuenta desconocida en Pesos" when letterType is "unknown" and currency is "$"', () => {
    const result = formatAccountType('unknown', '$');
    expect(result).toBe('Cuenta desconocida en Pesos');
  });


  it('should return "Caja de Ahorro en Dolares" when letterType is "CA" and currency is "u$s"', () => {
    const result = formatAccountType('CA', 'u$s');
    expect(result).toBe('Caja de Ahorro en Dolares');
  });

  it('should return "Caja de Ahorro en Dolares" when letterType is "Ca" and currency is "u$s"', () => {
    const result = formatAccountType('Ca', 'u$s');
    expect(result).toBe('Cuenta desconocida en Dolares');
  });
});
