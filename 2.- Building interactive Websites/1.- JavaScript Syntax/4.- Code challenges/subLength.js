// Write function below
const subLength = (str, char) => {
    const regex = new RegExp(char, 'g');
    const matches = str.match(regex);
    if (matches.length === 2) {
      const arr = str.split(char);
      return arr[1].length + 2;
    } else {
      return 0
    }
  }
  console.log(subLength('Saturday', 'a')); // returns 6
  console.log(subLength('summer', 'm')); // returns 2
  console.log(subLength('digitize', 'i')); // returns 0
  console.log(subLength('cheesecake', 'k')); // returns 0