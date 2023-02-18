// Write a JavaScript program to convert a given number to hours and minutes. 
function time_convert(number) {
    var hours = Math.floor(number / 60);
    var minutes = number % 60;
    return hours + ":" + minutes;
  }
  console.log(time_convert(90));