const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");

function createManager(data) {
  return new Manager(data.managerId, data.managerName, data.managerEmail, data.managerOfficeNumber);
}

function createEmployee(employee) {
  if (employee.role === "Intern") {
    return new Intern(employee.id, employee.name, employee.email, employee.school);
  }

  if (employee.role === "Engineer") {
    return new Engineer(employee.id, employee.name, employee.email, employee.github)
  }
}

function generateEmployeeEntries(employees) {
  var tableEntry = '';
  for (var employee of employees) {
    tableEntry += `<tr>${generateEmployeeRow(employee)}</tr>`
  }
  return tableEntry;
}

function generatePhone(employee){
  if(employee.role!=="Manager"){
    return "N/A";
  }
  return `<a href="tel:${employee.getOfficeNumber()}">${employee.getOfficeNumber()}</a>`;
}

function generateEmployeeRow(employee) {
  return `
<td>${employee.getId()}</td>
<td>${employee.getName()}</td>
<td>${employee.getRole()}</td>
<td><a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></td>
<td>${generatePhone(employee)}</td>
<td>${employee.getRole()==="Engineer"?employee.getGithub():"N/A"}</td>
<td>${employee.getRole()==="Intern"?employee.getSchool():"N/A"}</td>
`
}

// TODO: Create a function to generate markdown for README
function generateHTML(data) {
  var manager = createManager(data);
  var employees = [manager];
  for (var employee of data.employees) {
    employees.push(createEmployee(employee));
  }
  console.log(JSON.stringify(employees));
  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./style.css" />
  <title>Document</title>
</head>

<body>


<main>    
  <table style='border:1px solid black'>
    <tr>
      <th>Employee Id</td>
      <th>Employee Name</td>
      <th>Employee Role</td>
      <th>Employee Email</td>
      <th>Manager Office Number</td>
      <th>Engineer Github</td>
      <th>Intern School</td>
    </tr>
    ${generateEmployeeEntries(employees)}
  </table>
</main>
</body>
</html>`;
}

function generateStyle(){
  return `table, th, td{
  border: 1px solid black;
  border-collapse: collapse;
}`
}

module.exports = { generateHTML, generateStyle };
