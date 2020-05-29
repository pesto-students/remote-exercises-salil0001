import { map, filter, invert, merge, all, some } from "./objectUtils";

describe("Map function with descripters", () => {
  it("Return the area of an square", () => {
    let dimension1 = {
      side1: 3,
      side2: 4,
      side3: 5,
    };
    Object.defineProperty(dimension1, "side4", {
      value: 22,
    });
    expect(map(dimension1)).toEqual([9, 16, 25]);

    let dimension2 = {
      side1: 3,
      side2: 4,
      side3: 5,
    };
    Object.defineProperty(dimension2, "side4", {
      value: 12,
      enumerable: true,
    });
    expect(map(dimension2)).toEqual([9, 16, 25, 144]);
  });
});
// describe("Filter functions with descripters.", () => {
//   it("Number divisible by value.", () => {
//     let ages = { raman: 23, rounak: 25, naveen: 30 };
//     Object.defineProperty(ages, "rounak", {
//       value: 35,
//       enumerable: false,
//     });
//     expect(filter(ages)).toEqual( [30, 23] );
//   });
// });

describe("Merge two objects with descripters.", () => {
  it("Number divisible by value.", () => {
    let person = {
      name: "salil",
      age: 26,
    };
    Object.freeze(person);
    //person.name = "sameer";
    let companyProfile = {
      companyName: "Harivara",
    };
    expect(merge(person, companyProfile)).toEqual({
      name: "salil",
      age: 26,
      companyName: "Harivara",
    });
  });
});
describe("Some function use with descripters.", () => {
  it("User account is prime ", () => {
      let user={
          name:"Salil",
          account:"normal"
      }
      Object.preventExtensions(user);
      user.account="prime";
    expect(some(user,"prime")).toEqual(true);
  });
});
