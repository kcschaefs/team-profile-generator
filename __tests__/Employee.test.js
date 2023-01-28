const Employee = require("../lib/Employee");

describe("Employee Tests",()=>{
  test("Create Employee",()=>{
    const employee = new Employee("123","Sarah","sarah@bootcamp.com");
    expect(employee.getId()).toEqual("123");
    expect(employee.getName()).toEqual("Sarah");
    expect(employee.getEmail()).toEqual("sarah@bootcamp.com");
    expect(employee.getRole()).toEqual("Employee");
  });
});