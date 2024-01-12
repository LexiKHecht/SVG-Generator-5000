const { Triangle, Square, Circle } = require("./shapes.js");
// test for triangle
describe("Triangle test", () => {
  test("test for a triangle with a violet background and aqua TST text", () => {
    const shape = new Triangle("violet", "TST", "aqua");

    expect(shape.render()).toEqual(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="100, 15 200, 200 0, 200" fill="violet"/> <text x="100" y="185" font-size="70" text-anchor="middle" fill="aqua">TST</text> </svg>`
    );
  });
});
// test for circle
describe("Circle test", () => {
  test("test for a circle with a yellow background and pink TST text", () => {
    const shape = new Circle("yellow", "TST", "pink");

    expect(shape.render()).toEqual(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="100" fill="yellow"/> <text x="150" y="125" font-size="70" text-anchor="middle" fill="pink">TST</text> </svg>`
    );
  });
});
// test for square
describe("Square test", () => {
  test("test for a square with a green background and black TST text", () => {
    const shape = new Square("green", "TST", "black");

    expect(shape.render()).toEqual(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <rect width="200" height="200" fill="green"/> <text x="100" y="125" font-size="70" text-anchor="middle" fill="black">TST</text> </svg>`
    );
  });
});
