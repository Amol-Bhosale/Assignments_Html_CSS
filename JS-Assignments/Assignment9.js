// Write a JavaScript program to divide two positive numbers and return a string with properly formatted commas.
n1 = 19;
n2 = 2;

var division = Math.round(n1 / n2).toString();
result_arr = division.split("");

if (division >= 1000) {
  for (var i = division.length - 3; i > 0; i -= 3) {
    result_arr.splice(i, 0, ",");
  }
  result_arr;
}
console.log(result_arr);