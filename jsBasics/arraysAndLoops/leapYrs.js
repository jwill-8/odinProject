function leapYr(yr) {
    // a leap year is one that is divisible by 4, and not 100, or divisible by 400
  if (yr % 4 === 0 && yr % 100 !== 0 || 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(leapYr(34992))
