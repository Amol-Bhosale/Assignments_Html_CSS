// Write a JavaScript program to create a new string of 4 copies of the last 3 characters of a 
// given original string. The length of the given string must be 3 and above


function newstring(str) {
    if (str.length >= 3) {
      result_str = str.substring(str.length - 3);
      return result_str + result_str + result_str + result_str;
    }
    else
      return false;
  }
  console.log(newstring("ab"));
  console.log(newstring("Programming"));