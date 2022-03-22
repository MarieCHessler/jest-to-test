/**
 * @jest-environment jsdom
 */

 const buttonClick = require("../button");

 /* Code in lesson
 beforeEach(() => { // Jest directive. Runs before each test cycle
     document.body.innerHTML = "<p id='par'></p>";
 }); */

 // Source code to lesson
 beforeAll(() => { // Jest directive. Runs before all test cycles
     document.body.innerHTML = "<p id='par'></p>";
 });
 
 // Code snippet to test is the paragraph with the ID par
 describe("DOM tests", () => { // Put all tests insice the describe block so more tests can be added to the suite later
     test("Expects content to change", () => { // Text in lesson: expects p content to change
         buttonClick();
         expect(document.getElementById("par")
             .innerHTML).toEqual("You Clicked");
     });
 });