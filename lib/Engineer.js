const Employee = require("./Employee");

class Engineer extends Employee{
  constructor(id, name, email, github) {
    super(id,name,email);
    this.role = "Engineer";
    this.github = github;
  }

  getGithub(){
    return this.github;
  }
}

module.exports = Engineer;