function spinalCase(str) {
  return str
  .replace(/([A-Z])/g, ' $1')
  .replace(/_/g, ' ')
  .trim()
  .toLowerCase()
  .split(/ +/gi)
  .join('-');
  
}

console.log(spinalCase('The_Andy_Griffith_Show'))