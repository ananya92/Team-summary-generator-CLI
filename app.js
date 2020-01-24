const inquirer = require(`inquirer`);
const fs = require(`fs`);
const mainStr = require("./templates/main");
const managerStr = require("./templates/manager");
const engineerStr = require("./templates/engineer");
const internStr = require("./templates/intern");
var managerDiv = "";
var engineersDiv = "";
var internsDiv = "";

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
    managerDiv = managerStr.getManagerStr(data);
    console.log(managerDiv);
    isAddEngineer();
});

function addEngineer() {
    inquirer.prompt(
        employeeQuestions.concat(engineerQuestions)
    ).then(function(data) {
        engineersDiv += engineerStr.getEngineerStr(data);
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
        internsDiv += internStr.getInternStr(data);
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
        else {
            writeToFile(mainStr.getMainStr(managerDiv, engineersDiv, internsDiv));
        }
    });
}

function writeToFile(data) {
        
    fs.writeFile("./output/team_summary.html", data, function(err) {
        if (err) {
            return console.log(err);
        }
    });
}