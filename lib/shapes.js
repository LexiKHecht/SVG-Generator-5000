// parent class for shape options
class Shape {
  constructor(shapeColor, text, textColor) {
      this.shapeColor = shapeColor;
      this.text = text;
      this.textColor = textColor;
  }
};

class Circle extends Shape { 
  constructor(shapeColor, text, textColor) {
      super(shapeColor, text, textColor);
  };
  render() {
      return  `
      <svg version="1.1"
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
          <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>
      `
  };
};

class Square extends Shape {
  constructor(shapeColor, text, textColor) {
      super(shapeColor, text, textColor);
  };
  render() {
      return `
      <svg version="1.1"
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="200" fill="${this.shapeColor}"/>
          <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>
      `
  };
};

class Triangle extends Shape {
  constructor(shapeColor, text, textColor) {
      super(shapeColor, text, textColor);  
  };
  render() {
      return `
      <svg version="1.1" 
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">
          <polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColor}"/>
          <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>
      `
  };
};



// function generateSVG(data) {


  
//   return `
//   # ${data.title}
//   ![License](https://img.shields.io/badge/License-${data.license}-blue.svg)

//   ## Description

//   ${data.description}

//   ## Table of Contents

//   * [Installation](#installation)
//   * [Usage](#usage)
//   * [License](#license)
//   * [Test](#tests)
//   * [Questions](#questions)

//   ## Installation

//   To install required dependencies, run the following command:
//   > ${data.dependencies}

//   ## Usage

//   ${data.repo}

//   ## License

//   This application is covered under the [${data.license}](LICENSE) license.

//   ## Contributing

//   ${data.contributions}

//   ## Tests

//   To run tests, run the following command:
//   > ${data.tests}

//   ## Questions

//   If you have any questions or issues, please contact me at ${data.email}. You can also find more of my work at https://github.com/${data.github}.

// ${data.catGif === "Yes" ? '<img width= 200px src="./cat01.png" alt="cat picture"></img>' : ""}

//   `
// ;
// }


module.exports = Shape;
module.exports = Circle;
module.exports = Square;
module.exports = Triangle;