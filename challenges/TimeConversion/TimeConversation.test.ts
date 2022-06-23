import timeConversion from "./TimeConversion";

test("Convert time to militar time", () => {
  expect(timeConversion("07:05:45PM")).toBe("19:05:45");
  expect(timeConversion("12:01:00PM")).toBe("12:01:00");
  expect(timeConversion("12:01:00AM")).toBe("00:01:00");
  expect(timeConversion("06:40:03AM")).toBe("06:40:03");
});
