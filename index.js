
//required packages to run the application
const fs = require('fs');
const inquirer = require('inquirer');
const html = require('./src/generateHTML');

// TODO: Create an array of questions for user input
const managerQuestions = [
  {
    type: 'input',
    name: 'managerName',
    message: "What is the name of your manager?",
  },
  {
    type: 'input',
    name: 'managerId',
    message: "What is the id of your manager?",
  },
  {
    type: 'input',
    name: 'managerEmail',
    message: "What is the email of your manager?",
  },
  {
    type: 'input',
    name: 'managerOfficeNumber',
    message: "What is the office number of your manager?",
  }
];
const employeeTypeQuestion = [
  {
    type: 'list',
    name: 'employeeRole',
    message: "What is the role of the employee you want to enter?",
    choices: ["Engineer", "Intern", new inquirer.Separator(), "Done"],
  }
];

function createBaseEmployeeQuestions(role) {
  return [
    {
      type: 'input',
      name: 'name',
      message: `What is the name of this ${role}?`,
    },
    {
      type: 'input',
      name: 'id',
      message: `What is the id of this ${role}?`,
    },
    {
      type: 'input',
      name: 'email',
      message: `What is the email of this ${role}?`,
    },
  ]
}

function createInternQuestions() {
  var baseQuestions = createBaseEmployeeQuestions("Intern");
  baseQuestions.push({
    type: 'input',
    name: 'school',
    message: `What is the school of this Intern?`,
  });
  return baseQuestions;
}

function createEngineerQuestions() {
  var baseQuestions = createBaseEmployeeQuestions("Engineer");
  baseQuestions.push({
    type: 'input',
    name: 'github',
    message: `What is the github of this Engineer?`,
  });
  return baseQuestions;
}


function makeDirectory() { // this will create a directory file in the users' file structure to house the new README (only if it doesn't already exist)
  if (!fs.existsSync("./dist")) {
    fs.mkdir("./dist", function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Success! A new directory has been created.");
      }
    });
  } else {
    console.log("Directory file 'dist' already exists.");
  }

}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    err ? console.error(err) : console.log('Success! Your HTML file has been created. Check your "dist" folder to view the document.')
  });
}

function testData() {
  return {
    "managerName": "Joe",
    "managerId": "123",
    "managerEmail": "joe@owner.com",
    "managerOfficeNumber": "612-454-0177",
    "employees": [
      {
        "name": "James",
        "role": "Engineer",
        "id":"567",
        "github":"j567",
        "email":"j@company.com"
      },
      {
        "name": "Sarah",
        "role": "Intern",
        "id":"abc",
        "school":"Harvard",
        "email":"s@company.com"
      },
    ]
  };
}

var fullData = {};

function askEmployee(){
  inquirer.prompt(employeeTypeQuestion).then(employeeTypeAnswer=>{
    if(employeeTypeAnswer.employeeRole==="Intern"){
      inquirer.prompt(createInternQuestions()).then(answers=>{
        answers.role = "Intern";
        fullData.employees.push(answers);
        askEmployee();
      });
    } else if(employeeTypeAnswer.employeeRole==="Engineer"){
      inquirer.prompt(createEngineerQuestions()).then(answers=>{
        answers.role = "Engineer";
        fullData.employees.push(answers);
        askEmployee();
      });
    }
    else{
      makeDirectory();
      writeToFile("./dist/index.html", html.generateHTML(fullData));
      writeToFile("./dist/style.css", html.generateStyle());
    }
  });
}

// TODO: Create a function to initialize app
function init() {

  // inquirer.prompt(managerQuestions).then(managerAnswers => {
  //   fullData = managerAnswers;
  //   fullData.employees = [];
  //   askEmployee();
  // });
  writeToFile("./dist/index.html", html.generateHTML(testData()));
  //writeToFile("./dist/style.css", html.generateStyle());
}

// Function call to initialize app
init();

