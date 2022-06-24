function lonelyinteger(a: number[]): number {
  const numbers: any = {};

  a.forEach((num) => {
    if (numbers[num] > 0) delete numbers[num];
    else numbers[num] = 1;
  });

  return +Object.keys(numbers)[0];
}

export default lonelyinteger;
