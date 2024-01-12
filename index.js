
const fs = require("fs");
const inquirer = require("inquirer");
const setShape = require("./lib/setShape.js");
const fileName = "./logo.svg";

// ...the questions
const questions = [
  {
    type: "input",
    name: "text",
    message: "What would you like your svg to say? (up to 3 characters)",
    validate: (answer) => {
      if (answer.length > 3) {
        return console.log(
          "\n Text must be three characters or less! Please try again"
        );
      }
      return true;
    },
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
// function that initiates prompt questions
function userPrompt() {
  return inquirer.prompt(questions);
}

// function to create svg and write it to svg file
function createLogo(response) {
  const svg = setShape(response);
  fs.writeFile(fileName, svg, () => console.log("Generated logo.svg"));
}


function init() {
  // call prompt function to get user data
  userPrompt()
    .then((response) => {
      // input user data
      createLogo(response);
    })
    .catch((err) => {
      console.log(err);
    });
}
// Function call to initialize app
init();
