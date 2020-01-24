const inquirer = require(`inquirer`);
const fs = require(`fs`);
//Importing the HTML template strings
const mainStr = require("./templates/main");
const managerStr = require("./templates/manager");
const engineerStr = require("./templates/engineer");
const internStr = require("./templates/intern");
//Variables storing the final generated HTML strings for the manager, engineers and interns 
var managerDiv = "";
var engineersDiv = "";
var internsDiv = "";

//Variable storing array of the common questions for every employee
const employeeQuestions = [
    {
        type: "input",
        message: "Enter name:",
        name: "name",
        validate: function( value ) {
            //Validating with regex to allow only alphabets and [,.'-] characters in the entered name
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
            //Validating with regex to allow the entered ID to contain exactly 6 digits
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
            //Validating with regex to check that the entered email id has a valid structure
            var pass = value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
            if (pass) {
              return true;
            } else {
              return "Please enter valid email id.";
            }
          }
    }
];

//Array storing the manager specific questions
const managerQuestions = [
    {
        type: "input",
        message: "Enter phone number:",
        name: "number",
        validate: function( value ) {
            //Validating with regex to allow only 10 digit phone numbers
            var pass = value.match(/\d{10}$/i);
            if (pass) {
              return true;
            } else {
              return "Please enter a valid 10-digit phone number";
            }
          }
    }
];

//Array storing the engineer specific questions
const engineerQuestions = [
    {
        type: "input",
        message: "Enter github username:",
        name: "github",
        default: "NA"
    }
];

//Array storing the intern specific questions
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
    //Concatanating the manager specific questions with the general employee questions and passing to inquirer
    employeeQuestions.concat(managerQuestions)

).then(function(data) {
    //Passing the manager's details from the inquirer response object - data into the template function which returns the HTML string with the embedded manager details
    managerDiv = managerStr.getManagerStr(data);
    isAddEngineer();
});

//Function to add an engineer
function addEngineer() {
    inquirer.prompt(
        //Concatenating the engineer specific questions with the general employee questions and passing to inquirer
        employeeQuestions.concat(engineerQuestions)
    ).then(function(data) {
            //Passing the engineer's details from the inquirer response object - data into the template function which returns the HTML string with the embedded engineer details
            //Concatenating all engineers in a single string each time an engineer is added
        engineersDiv += engineerStr.getEngineerStr(data);
        //Check if user wants to add another engineer
        isAddEngineer();
    });
}

//Function to check if user wants to add another engineer
function isAddEngineer() {
    inquirer.prompt([
        {
            type: "confirm",
            message: `Want to enter engineer details?`,
            name: "isEng"
        }   
    ]).then(function(data) {
        //Add another engineer if value is true
        if(data.isEng) {
            addEngineer();
        }
        //If value is false, means user doesn't want to add any more engineers; proceed with adding interns
        else {
            //Check if user wants to add an intern
            isAddIntern();
        }
    });
}

//Function to add an intern
function addIntern() {
    inquirer.prompt(
        //Concatanating the intern specific questions with the general employee questions and passing to inquirer
        employeeQuestions.concat(internQuestions)
    ).then(function(data) {
        //Passing the intern's details from the inquirer response object - data into the template function which returns the HTML string with the embedded intern data
        //Concatenating all interns in a single string each time an intern is added
        internsDiv += internStr.getInternStr(data);
        //check if user wants to add another intern
        isAddIntern();
    });
}
//Function to check if user wants to add an intern
function isAddIntern() {
    inquirer.prompt([
        {
            type: "confirm",
            message: `Want to enter intern details?`,
            name: "isIntern"
        }   
    ]).then(function(data) {
        //Add another intern if value is true
        if(data.isIntern) {
            addIntern();
        }
        //If value is false, means user doesn't want to add any more interns. Proceed with generating the final HTML string by passing the generated manager HTML, engineers HTML and interns HTML into the main template function
        else {
            //pass the final generated HTML string into writeToFile()
            writeToFile(mainStr.getMainStr(managerDiv, engineersDiv, internsDiv));
        }
    });
}

//Function to write the generated team summary into output/team_summary.html file
function writeToFile(data) {
        
    fs.writeFile("./output/team_summary.html", data, function(err) {
        if (err) {
            return console.log(err);
        }
    });
}
