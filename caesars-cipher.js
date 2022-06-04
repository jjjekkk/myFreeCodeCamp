function rot13(str) {
 let strNew = '';
     for( let i=0; i<str.length; i++){
       if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
         strNew += String.fromCharCode((str.charCodeAt(i)+13-65)%26+65)
       } else{
         strNew += String.fromCharCode(str.charCodeAt(i))
       }
     }
     return strNew
}

console.log(rot13("SERR PBQR PNZC"))