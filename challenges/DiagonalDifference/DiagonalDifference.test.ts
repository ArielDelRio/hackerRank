import diagonalDifference from "./DiagonalDifference";

test("Diagonal difference tests", () => {
  expect(
    diagonalDifference([
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12],
    ])
  ).toBe(15);
});
