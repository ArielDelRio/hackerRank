function twoArrays(k: number, A: number[], B: number[]): string {
  A.sort((a, b) => b - a);
  B.sort((a, b) => a - b);

  for (let i = 0; i < A.length; i++) {
    if (A[i] + B[i] < k) return "NO";
  }

  return "YES";
}

export default twoArrays;
