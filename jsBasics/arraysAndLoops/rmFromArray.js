function rmFromArray(myArray, ...rest) {
  // if a given value of myArray is NOT present
  // in the values to remove then the eval is true, ergo it is kept
  return myArray.filter((i) => !rest.includes(i));
}

/// OR

function rmFromArray2(myArray, ...rest) {
  // Define array to return
  let toReturn = [];
  // Loop through my array

  myArray.myArray.forEach((i) => {
    // if i is NOT in rest, add it to the end of the array
    if (!rest.includes(i)) {
      toReturn.push(i);
    }
  });

  return toReturn;
}
