const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(width, height, percentage) {
    this.field = this.generateField(width, height, percentage);
    this.ded = false;
    this.won = false;
    this.currentPosition = [0, 0]; // y,x
  }

  print() {
    this.field.forEach((row) => {
      console.log(row.join(""));
    });
  }

  main() {
    while (true) {
      this.print();
      let answer = prompt("Where do you want to move? ");
      let validation = this.validateMove(answer);
      if (validation[0]) {
        if (validation[1]) console.log(validation[1]);
        continue;
      } else {
        console.log(`Game Over: ${validation[1]}`);
        break;
      }
    }
  }

  validateMove(move) {
    const nextPosition = this.currentPosition;
    if (move == "w") {
      nextPosition[0] -= 1;
    } else if (move == "a") {
      nextPosition[1] -= 1;
    } else if (move == "s") {
      nextPosition[0] += 1;
    } else if (move == "d") {
      nextPosition[1] += 1;
    } else {
      console.log("invalid input");
    }
    const limits = [this.field[0].length, this.field.length];
    if (
      nextPosition[0] < 0 ||
      nextPosition[1] < 0 ||
      nextPosition[0] > limits[0] ||
      nextPosition[1] > limits[1]
    ) {
      return [false, "Out of bounds"];
    } else if (this.field[nextPosition[0]][nextPosition[1]] == hole) {
      return [false, "You fell into a hole"];
    } else if (this.field[nextPosition[0]][nextPosition[1]] == hat) {
      return [false, "You found your hat"];
    } else if (this.field[nextPosition[0]][nextPosition[1]] == pathCharacter) {
      return [true, "You can't go back!"];
    } else {
      this.field[nextPosition[0]][nextPosition[1]] = pathCharacter;
      this.currentPosition = nextPosition;
      return [true, null];
    }
  }

  generateField(width, height, percentage) {
    const field = []; //new Array(height)
    for (let i = 0; i < height; i++) {
      field.push(new Array(width).fill(fieldCharacter));
    }
    let numHoles = Math.floor((width * height) / (percentage / 10));
    console.log(numHoles);
    for (let i = 0; i <= numHoles; i++) {
      const x = Math.floor(Math.random() * height);
      const y = Math.floor(Math.random() * width);
      console.log(x, y);
      if (x == 0 && y == 0) continue;
      field[x][y] = hole;
    }
    while (true) {
      const x = Math.floor(Math.random() * height);
      const y = Math.floor(Math.random() * width);
      console.log(x, y);
      if (x == 0 && y == 0) continue;
      field[x][y] = hat;
      break
    }
    field[0][0] = pathCharacter;
    return field
  }
}



const myField = new Field(10, 10, 40);
myField.main()
