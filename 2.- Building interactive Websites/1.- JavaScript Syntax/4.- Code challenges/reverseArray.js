// Write your code here:
const reverseArray = (array) => {
  let reversedArray = [];
  // OPTION A
  // for (let i = 0; i < array.length; i++) {
  //   reversedArray.unshift(array[i]);
  // }

  // OPTION B
  // let items = array.length;
  // for (let i = 0; i < items; i++) {
  //   reversedArray.push(array.pop());
  // }

  // OPTION C
  for (const item in array) {
    reversedArray.unshift(array[item]);
  }
  return reversedArray;
}

// When you're ready to test your code, uncomment the below and run:

const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)) 
// Should print ['This', 'will', 'all', 'make', 'sense.'];



