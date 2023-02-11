import { splitString, sanitizeString } from "."

describe("Utils", () => {
  describe("split string", () => {
    const str = "https://pokeapi.co/api/v2/pokemon/2/";
    const splitResult = ['https:', '', 'pokeapi.co', 'api', 'v2', 'pokemon', '2', ''];

    test("returns an array of strings", () => {
      expect(splitString(str, '/')).toStrictEqual(splitResult);
    });
  });

  describe("sanitizeString", () => {
    const invalidString = "string{With}/Special-Characters!";
    const validString = "stringWithSpecialCharacters";

    test("removes special character from strings", () => {
      expect(sanitizeString(invalidString)).toEqual(validString);
    });
  });
});
