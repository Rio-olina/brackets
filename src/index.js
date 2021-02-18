module.exports = function check(str, bracketsConfig) {
  let brackets = "[]{}()";
 if  (!String && !str.length === 0)
 { return false}
//let arr = str.split('');
let stack = [];
let bracketsIndex = brackets.indexOf(str)
if(bracketsIndex % 2 == 0) {
   return true
  } else {
    if(stack.pop() !== bracketsIndex) {
        return false;
      }
    }
}

