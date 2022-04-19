function mutation(arr) {
let firstElem = arr[0].toLowerCase();
let secondElem = arr[1].toLowerCase();
for (let i = 0; i < secondElem.length; i++) {
 if (firstElem.indexOf(secondElem[i])<0)
 return false
}

  return true;
}

console.log(mutation(["hello", "heL"]))