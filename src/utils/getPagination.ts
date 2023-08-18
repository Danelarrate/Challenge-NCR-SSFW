export const ordenarPaginas = (array: any[]) => {
  const originalArray = [...array];
  let total = array.length | 0;
  const result = [];
  while (originalArray.length > 0) {
    console.log('calculando', total);
    if (total === 6 && result.length === 0) {
      const part = originalArray.splice(0, 6);
      result.push(part);
      total -= 6;
      continue;
    }
    if (total >= 5) {
      if (result.length === 0) {
        const part = originalArray.splice(0, 5);
        result.push(part);
        total -= 5;
        continue;
      }
      if (total === 5) {
        const part = originalArray.splice(0, 5);
        result.push(part);
        total -= 5;
        continue;
      }
    }
    const part = originalArray.splice(0, 4);
    result.push(part);
    total -= 4;
    continue;
  }
  console.log(result);
  return result;
};
