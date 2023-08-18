import { IAccount } from "@/types/accountTypes";
import { normalizedData } from "../utils";

describe('normalizedData', () => {


  it('should return an array of IAccount objects when passed a valid array of IAccount objects', () => {

    const accounts: IAccount[] = [
      { e: "example1", n: "123", t: "type1", saldo: "100", moneda: "u$s", tipo_letras: "CC" },
      { e: "example2", n: "456", t: "type2", saldo: "200", moneda: "$", tipo_letras: "CA" },
      { e: "example3", n: "789", t: "type3", saldo: "300", moneda: "u$s", tipo_letras: "CC" },
    ];

    const result = normalizedData(accounts);

    expect(result).toEqual(accounts);
  });

  it('should return an empty array when passed an empty array', () => {

    const accounts: IAccount[] = [];

    const result = normalizedData(accounts);

    expect(result).toEqual([]);
  });

  it('should return an empty array when passed an array with invalid account numbers', () => {

    const accounts = [
      { e: "example1", n: "", t: "type1", saldo: "100", moneda: "u$s", tipo_letras: "CC" },
      { e: "example2", n: null, t: "type2", saldo: "200", moneda: "u$s", tipo_letras: "CC" },
      { e: "example3", n: " ", t: "type3", saldo: "300", moneda: "u$s", tipo_letras: "CC" },
      { e: "example4", n: undefined, t: "type3", saldo: "300", moneda: "u$s", tipo_letras: "CA" },
    ];

    const result = normalizedData(accounts);

    expect(result).toEqual([]);
  });

  it('should return an empty array when passed an array with invalid currencies', () => {

    const accounts: IAccount[] = [
      { e: "example1", n: "123", t: "type1", saldo: "100", moneda: "USD", tipo_letras: "CC" },
      { e: "example2", n: "456", t: "type2", saldo: "200", moneda: "INVALID", tipo_letras: "CA" },
      { e: "example3", n: "789", t: "type3", saldo: "300", moneda: "Eur", tipo_letras: "CC" },
    ];

    const result = normalizedData(accounts);

    expect(result).toEqual([]);
  });

  it('should return an empty array when passed an array with invalid tipo letras', () => {

    const accounts: IAccount[] = [
      { e: "example1", n: "123", t: "type1", saldo: "100", moneda: "u$s", tipo_letras: "typeA" },
      { e: "example2", n: "456", t: "type2", saldo: "200", moneda: "u$s", tipo_letras: "INVALID" },
      { e: "example3", n: "789", t: "type3", saldo: "300", moneda: "u$s", tipo_letras: "typeC" },
    ];

    const result = normalizedData(accounts);

    expect(result).toEqual([]);
  });
});
