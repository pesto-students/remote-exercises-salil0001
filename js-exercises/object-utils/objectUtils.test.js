import { map, 
    //filter, invert, merge, all, some 

} from "./objectUtils";

describe("object utils excercise", () => {
  describe("map", () => {
    test("transform properties", () => {
      const obj = { a: 10,b:70 };
      const expected = { A: 100 };
      const result = map(obj, ([key, val]) => [key.toUpperCase(), val ** 2]);
      expect(result).toEqual(expected);
    });
  });
});
