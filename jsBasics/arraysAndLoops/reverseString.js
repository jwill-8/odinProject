function reverseString(string) {
  let reversed = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }

  return reversed;
}

console.log(reverseString("Hello There!"))

// Better solution: 
// split sends the str to an array, which can
// then be reversed, which can then be brought back together
// const reverseString = function (string) {
//     return string.split("").reverse().join("");
//   };



