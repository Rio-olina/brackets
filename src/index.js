module.exports = function check(str, bracketsConfig) {
  let brackets = "[]{}()";

let stack = [];
let bracketsIndex = brackets.indexOf(str)
    if(bracketsIndex % 2 === 0) {
      stack.push(bracketsIndex + 1); 
       return true;
    } else {
     
        return false;
      }
    }


