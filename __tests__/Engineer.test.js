const Engineer = require("../lib/Engineer");

describe("Engineer Tests",()=>{
  test("Create Engineer",()=>{
    const engineer = new Engineer("123","Sarah","sarah@bootcamp.com","sarah");
    expect(engineer.getId()).toEqual("123");
    expect(engineer.getName()).toEqual("Sarah");
    expect(engineer.getEmail()).toEqual("sarah@bootcamp.com");
    expect(engineer.getRole()).toEqual("Engineer");
    expect(engineer.getGithub()).toEqual("sarah");
  });
});