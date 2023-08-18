import { IAccount } from "@/types/accountTypes";

export const ordenarPaginas = (array: IAccount[]): IAccount[][] => {
  const originalArray = [...array];
  let total = array.length;
  const result: IAccount[][] = [];

  while (originalArray.length > 0) {
    if (total === 6 && result.length === 0) {
      const part = originalArray.splice(0, 6);
      result.push(part);
      total -= 6;
    } else if (total >= 5 && (result.length === 0 || total === 5)) {
      const part = originalArray.splice(0, 5);
      result.push(part);
      total -= 5;
    } else {
      const part = originalArray.splice(0, 4);
      result.push(part);
      total -= 4;
    }
  }
  
  return result;
};
