// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
let shuffledCats, currentCat;

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE_2.0", "GPL_3.0", "BSD_3", "None"],
  },
  {
    type: "input",
    name: "dependencies",
    message: "What command is required to install your dependencies?",
  },
  {
    type: "input",
    name: "tests",
    message: "What command is required to run your tests?",
  },
  {
    type: "input",
    name: "repo",
    message: "What does the user need to know about using this project?",
  },
  {
    type: "input",
    name: "contributions",
    message:
      "What does the user need to know about contributing to the repository?",
  },
  {
    type: "list",
    name: "catGif",
    message: "Do you want a cute cat pic at the bottom of your README?",
    choices: ["Yes", "No (I'm lame)"],
  },
];

function userPrompt() {
  return inquirer.prompt(questions);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data, currentCat), function (error) {
    console.log(fileName + " generated");

    if (error) {
      throw error;
    }
  });
}



function giveCat() {
  shuffledCats = cats.sort(() => Math.random() - 0.5);
  currentCat = shuffledCats[0];
}

const cats = [
  { cat: <img width="200" src="./cat01.png" alt="cat picture"></img>},
  { cat: <img width="200" src="./cat02.png" alt="cat picture"></img> },
  { cat: <img width="200" src="./cat03.png" alt="cat picture"></img> },
  { cat: <img width="200" src="./cat04.png" alt="cat picture"></img> }
];
// TODO: Create a function to initialize app
function init() {
  giveCat();
  userPrompt()
    .then(function (data) {
      writeToFile("README.md", data);
    })
    .then(function () {
      console.log("Done!");
    })
    .catch(function (error) {
      console.log(error);
    });
}
// Function call to initialize app
init();
