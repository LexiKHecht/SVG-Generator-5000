// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const setShape = require('./lib/setShape.js')
const fileName = "./svg";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "text",
    message: "What would you like your svg to say? (up to 3 characters)",
  },
  {
    type: "input",
    name: "textColor",
    message: "What color would you like your text to be?",
  },
  {
    type: "list",
    name: "shape",
    message: "What shape would you like your svg?",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "What color would you like the shape to be?",
  },
];

function userPrompt() {
  return inquirer.prompt(questions);
  
}


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//   fs.writeFile(fileName, shapes(data), function (error) {
//     console.log(fileName + " generated");

//      if (error) {
//       throw error;
//     }
//   });
// }
function createLogo(response) {
  const svg = setShape(response);
  fs.writeFile(fileName, svg, ()=> console.log('Generated logo.svg'));
}

// TODO: Create a function to initialize app
function init() {
  userPrompt()
  .then((response) => {
    createLogo(response);
    })
.catch(err => {
        console.log(err)
    });
}
    // .then(function (data) {
    //    if (questions.text.length > 3) {
    //   console.log("Must enter a value of no more than 3 characters");
    //   userPrompt();
    // } else
//       writeToFile("SVG", data);
//     })
//     .then(function () {
//       console.log("Done!");
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//  }
// Function call to initialize app
init();
