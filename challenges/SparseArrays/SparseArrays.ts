// input example ["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"]
// output example [2, 1, 0]

function matchingStrings(strings: string[], queries: string[]): number[] {
  const map: any = {};
  const all = queries.concat(strings);
  all.forEach((value) => {
    if (queries.includes(value)) {
      map[value] = map[value] + 1 || 0;
    }
  });

  return Object.values(map);
}

export default matchingStrings;
