// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, cuteCat) {
  return `
  # ${data.title}
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg)

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Test](#tests)
  * [Questions](#questions)

  ## Installation

  To install required dependencies, run the following command:
  > ${data.dependencies}

  ## Usage

  ${data.repo}

  ## License

  This application is covered under the [${data.license}](LICENSE) license.

  ## Contributing

  ${data.contributions}

  ## Tests

  To run tests, run the following command:
  > ${data.tests}

  ## Questions

  If you have any questions or issues, please contact me at ${data.email}. You can also find more of my work at https://github.com/${data.github}.

${data.catGif === "Yes" ? '<img width= 200px src="./cat01.png" alt="cat picture"></img>' : ""}

  `
;
}

module.exports = generateMarkdown;
