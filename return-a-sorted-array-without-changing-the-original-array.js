const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
let localArray = arr.slice(globalArray);
return localArray.sort( (a,b) => {
  return a-b
})

  // Only change code above this line
}

console.log(nonMutatingSort(globalArray));