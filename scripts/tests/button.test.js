/**
 * @jest-environment jsdom
 */

 const buttonClick = require("../button");

// Source code to DOM Mock lesson
beforeAll(() => {
    let fs = require("fs"); // Node fs module (part of standard library) - Allows to open, read and write files
    let fileContents = fs.readFileSync("index.html", "utf-8");

    // Attach to the DOM - recommended way (= boilerplate)
    document.open();
    document.write(fileContents);
    document.close();
});

/*
// Code in DOM Mock lesson
beforeEach(() => {
    let fs = require("fs"); // Node fs module (part of standard library) - Allows to open, read and write files
    let fileContents = fs.readFileSync("index.html", "utf-8");

    // Attach to the DOM - recommended way (= boilerplate)
    document.open();
    document.write(fileContents);
    document.close();
});
/*
 // Code in Mock lesson
 beforeEach(() => { // Jest directive. Runs before each test cycle
    document.body.innerHTML = "<p id='par'></p>";
 });

 // Source code to Mock lesson
 beforeAll(() => { // Jest directive. Runs before all test cycles
    document.body.innerHTML = "<p id='par'></p>";
 });
 */
 
 // Code snippet to test is the paragraph with the ID par
 describe("DOM tests", () => { // Put all tests insice the describe block so more tests can be added to the suite later
    test("Expects content to change", () => { // Text in Mock lesson: expects p content to change
        buttonClick();
        expect(document.getElementById("par")
            .innerHTML).toEqual("You Clicked");
    });
    test("h1 should exist", () => { // Test in DOM Mock lesson
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
 });