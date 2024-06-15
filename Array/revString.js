// Create a function to reverse a string

// SOLUTION -1

// function revString(str) {
//   let reversed = "";
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

// SOLUTION -2

// function revString(str) {
//   return str.split("").reverse().join("");
// }

// SOLUTION-3

function revString(str) {
  return str.split("").reduce((rev, char) => {
    return char + rev;
  }, "");
}
