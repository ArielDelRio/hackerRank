function diagonalDifference(arr: number[][]): number {
  let cursor = 0;
  let d1 = 0;
  let d2 = 0;
  for (let i = 0; i < arr.length; i++) {
    d1 += arr[i][cursor];
    d2 += arr[i][arr.length - 1 - cursor];
    cursor++;
  }

  return Math.abs(d1 - d2);
}

export default diagonalDifference;
