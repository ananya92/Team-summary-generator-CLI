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
        name: "name",
        validate: function( value ) {
            var pass = value.match(/^[a-z ,.'-]+$/i);
            if (pass) {
              return true;
            } else {
              return "Please enter valid name.";
            }
          }
    },
    {
        type: "input",
        message: "Enter employee ID:",
        name: "id",
        validate: function( value ) {
            var pass = value.match(/^\d{6}$/i);
            if (pass) {
              return true;
            } else {
              return "Please enter a 6-digit numeric id.";
            }
          }
    },
    {
        type: "input",
        message: "Enter email ID:",
        name: "email",
        validate: function( value ) {
            var pass = value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
            if (pass) {
              return true;
            } else {
              return "Please enter valid email id.";
            }
          }
    }
];

const managerQuestions = [
    {
        type: "input",
        message: "Enter phone number:",
        name: "number",
        validate: function( value ) {
            var pass = value.match(/\d{10}$/i);
            if (pass) {
              return true;
            } else {
              return "Please enter a valid 10-digit phone number";
            }
          }
    }
];

const engineerQuestions = [
    {
        type: "input",
        message: "Enter github username:",
        name: "github",
        default: "NA"
    }
];

const internQuestions = [
    {
        type: "input",
        message: "Enter college name:",
        name: "school",
        default: "NA"
    }
];

console.log("Enter Manager's details:");

inquirer.prompt(
    employeeQuestions.concat(managerQuestions)

).then(function(data) {
    managerDiv = managerStr.getManagerStr(data);
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
