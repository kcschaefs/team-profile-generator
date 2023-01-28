const Manager = require("../lib/Manager");

describe("Manager Tests",()=>{
  test("Create Manager",()=>{
    const manager = new Manager("123","Sarah","sarah@bootcamp.com","456");
    expect(manager.getId()).toEqual("123");
    expect(manager.getName()).toEqual("Sarah");
    expect(manager.getEmail()).toEqual("sarah@bootcamp.com");
    expect(manager.getRole()).toEqual("Manager");
    expect(manager.getOfficeNumber()).toEqual("456");
  });
});