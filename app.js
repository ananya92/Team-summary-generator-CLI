const inquirer = require(`inquirer`);

var manager = {};
var engineers = [];
var interns = [];

const employeeQuestions = [
    {
        type: "input",
        message: "Enter name:",
        name: "name"
    },
    {
        type: "input",
        message: "Enter employee ID:",
        name: "id"
    },
    {
        type: "input",
        message: "Enter email ID:",
        name: "email"
    }
];

const managerQuestions = [
    {
        type: "input",
        message: "Enter phone number:",
        name: "number"
    }
];

const engineerQuestions = [
    {
        type: "input",
        message: "Enter github URL:",
        name: "github"
    }
];

const internQuestions = [
    {
        type: "input",
        message: "Enter school name:",
        name: "school"
    }
];

console.log("Enter Manager's details:");

inquirer.prompt(
    employeeQuestions.concat(managerQuestions)

).then(function(data) {
    manager.name = data.name;
    manager.id = data.id;
    manager.email = data.email;
    manager.number = data.number;
    isAddEngineer();
});

function addEngineer() {
    inquirer.prompt(
        employeeQuestions.concat(engineerQuestions)
    ).then(function(data) {
        var engineer = {
            name : data.name,
            id : data.id,
            email : data.email,
            github : data.github
        }
        engineers.push(engineer);
        isAddEngineer();
    });
}

function isAddEngineer() {
    inquirer.prompt([
        {
            type: "confirm",
            message: `Want to enter engineer details?`,
            name: "isEng"
        }   
    ]).then(function(data) {
        if(data.isEng) {
            addEngineer();
        }
        else {
            isAddIntern();
        }
    });
}

function addIntern() {
    inquirer.prompt(
        employeeQuestions.concat(internQuestions)
    ).then(function(data) {
        var intern = {
            name : data.name,
            id : data.id,
            email : data.email,
            school : data.school
        }
        interns.push(intern);
        isAddIntern();
    });
}

function isAddIntern() {
    inquirer.prompt([
        {
            type: "confirm",
            message: `Want to enter intern details?`,
            name: "isIntern"
        }   
    ]).then(function(data) {
        if(data.isIntern) {
            addIntern();
        }
    });
}