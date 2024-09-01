function arrayManipulation(arr) {
  return arr.map((num) => (num % 2 === 0 ? num * 2 : num));
}

const inputArray = [1, 2, 3, 4];
const outputArray = arrayManipulation(inputArray);

console.log(outputArray);
