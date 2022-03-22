/**
 * @jest-environment jsdom
 */
const { TestWatcher } = require("jest");
const addition = require("../calc");

describe("Calculator", () => { // Top level parent describe function
    describe("Addition function", () => { // Second level describe function
        test("Should return 42 for 20 + 22", () => { // First test
            expect(addition(20, 22)).toBe(42);
        });
        test("Should return 73 for 42 + 31", () => { // Second test
            expect(addition(42, 31)).toBe(73);
        });
    });
    describe("Subtraction function", () => { // Second level describe function

    });
    describe("Multiplication function", () => { // Second level describe function

    });
    describe("Division function", () => { // Second level describe function

    });
});