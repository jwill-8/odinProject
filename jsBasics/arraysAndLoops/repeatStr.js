function repeatStr(string, times) {
  //
  if (times < 0) return "times must be > 0"
  let repeatedStr = "";

  for (i = 1; i <= times; i++) {
    repeatStr = repeatStr + string;
  }

  return repeatStr;
}

console.log(repeatStr("foo", 10));
