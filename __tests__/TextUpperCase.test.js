// Import function (require = CommonJS style instead of editing package.json file to import { TextUpperCase } = ES6-module style)
const TextUpperCase = require('../TextUpperCase.js')

//Test Suite - Description
describe("Test for converting strings toUpperCase letters", () => {

    //Test case 1
    test("Test case 1, one word", () => {

        const input = "hello";
        const expectedOutput = "HELLO";

        expect(TextUpperCase(input)).toBe(expectedOutput);

    });
    //Test case 2
    test("Test case 2, a sentence ", () => {

        const input = "testing a sentence";
        const expectedOutput = "TESTING A SENTENCE";

        expect(TextUpperCase(input)).toBe(expectedOutput);

    });
    //Test case 3
    test("Test case 3, a sentence with numbers also", () => {

        const input = "the clock is 12pm";
        const expectedOutput = "THE CLOCK IS 12PM";

        expect(TextUpperCase(input)).toBe(expectedOutput);

    });

});