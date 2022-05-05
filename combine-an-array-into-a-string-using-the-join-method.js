function sentensify(str) {
  // Only change code below this line
const realString = str.split(/\W/).join(" ")
return realString;

  // Only change code above this line
}

console.log(sentensify("May-the-force-be-with-you"));