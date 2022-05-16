function uniteUnique(arr) {
  let uniqueArr = [];
for (let i = 0; i<arguments.length; i++) {
const arrArguments = arguments[i];
for (let j = 0; j<arrArguments.length; j++){
  const value = arrArguments[j];
  if (uniqueArr.indexOf(value)<0){
    uniqueArr.push(value)
  }
}

}
  return uniqueArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))