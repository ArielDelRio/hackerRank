import pangrams from "./Pangrams";

test("Panagrams tests", () => {
  expect(
    pangrams("We promptly judged antique ivory buckles for the next prize")
  ).toBe("pangram");

  expect(
    pangrams("We promptly judged antique ivory buckles for the prize")
  ).toBe("not pangram");
});
