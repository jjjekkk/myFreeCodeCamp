function palindrome(str) {
  const re = /[A-Za-z0-9]/ig;
  let newStr = str.match(re).join('').toLowerCase();
  let arr = Array.from(newStr);
  if (newStr===arr.reverse().join('')){
    return true
  } else {
   return false
  }
}

console.log(palindrome("My age is 0, 0 si ega ym."))