const Intern = require("../lib/Intern");

describe("Intern Tests",()=>{
  test("Create Intern",()=>{
    const intern = new Intern("999","Coffee Mule","getscoffee@bootcamp.com","Harvard");
    expect(intern.getId()).toEqual("999");
    expect(intern.getName()).toEqual("Coffee Mule");
    expect(intern.getEmail()).toEqual("getscoffee@bootcamp.com");
    expect(intern.getRole()).toEqual("Intern");
    expect(intern.getSchool()).toEqual("Harvard");
  });
});