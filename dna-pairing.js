function pairElement(str) {
  let pairArr = [];
let searchPair = function (char){
  switch (char){
case 'A':
pairArr.push(["A","T"]);
break;
case 'T':
pairArr.push(["T","A"]);
break;
case 'G':
pairArr.push(["G","C"]);
break;
case 'C':
pairArr.push(["C","G"]);
break;
}
}
for (let i = 0; i<str.length; i++) {
   searchPair(str[i])
}
return pairArr
}

console.log(pairElement("ATCG"))
