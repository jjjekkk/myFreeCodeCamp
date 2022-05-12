function myReplace(str, before, after) {
  if (before.charAt(0)===before.charAt(0).toUpperCase()){
  return str.replace(before, after.charAt(0).toUpperCase() + after.slice(1));
}   return str.replace(before, after.toLowerCase());
}


console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped"))