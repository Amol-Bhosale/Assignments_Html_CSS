// Write a JavaScript program to create a new string of specified copies (positive number) of a given string.
function string_copies(str, n) {
    if (n < 0) return false;
    else return str.repeat(n);
  }
  console.log(string_copies("java", 2));
  console.log(string_copies("react", 3));
  console.log(string_copies("abc", -2));