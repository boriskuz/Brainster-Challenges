class Cube {
  constructor(side) {
    this.cubeSideLength = side;
  }
  areaCalc() {
    console.log("Cube's area is:", 6 * Math.pow(this.cubeSideLength, 2), 'cm2');
  }
  perimeterCalc() {
    console.log("Cube's perimeter is:", 12 * this.cubeSideLength, 'cm');
  }
}

const sideLength = +prompt("Enter cube's side length:");

const cube = new Cube(sideLength);
cube.areaCalc();
cube.perimeterCalc();
