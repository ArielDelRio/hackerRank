function birthday(s: number[], d: number, m: number): number {
  let start = 0;
  let count = 0;
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    sum += s[i];
    if (i - start + 1 === m) {
      if (sum === d) {
        count++;
      }

      sum -= s[start];
      start++;
    }
  }

  return count;
}

export default birthday;
