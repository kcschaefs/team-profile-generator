class Employee {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = "Employee";
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getName() {
    return this.name;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Employee;