function translatePigLatin(str) {
let regexp = /^[^euioa]+/gi;
 let matchesArray = str.match(regexp);
 return matchesArray!==null
 ? str
 .replace(regexp, '')
 .concat(matchesArray)
 .concat('ay')
 :str.concat('way')
}

console.log(translatePigLatin("consonant"))
console.log(translatePigLatin("algorithm"))
console.log(translatePigLatin("schwartz"))