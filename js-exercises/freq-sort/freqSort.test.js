import { freqSort } from "./freqSort";

describe("Template Test for strings", () => {
  test("Template Test", () => {
    expect(freqSort(["Ā", "Ā", "Ā", "Ā", "b", "b", "z"])).toEqual(["Ā", "b", "z"]);
    expect(freqSort(["1", "1", "1", "z", "b", "b", "z"])).toEqual(["1", "z", "b"]);
    expect(freqSort(["1", "1", "1", "z", "b", "b", "z"])).toEqual(["1", "z", "b"]);
  });
});

describe("Template Test for numbers", () => {
  test("Template Test", () => {
    expect(freqSort([1, 1, 1, 1, 2, 3, 3])).toEqual(["1","3","2"]);
    expect(freqSort([3, 3, 3, 3, 3, 3, 3])).toEqual(["3"]);
  });
});
