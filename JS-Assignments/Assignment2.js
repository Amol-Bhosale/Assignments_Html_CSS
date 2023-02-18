// Write a JavaScript program to replace every character in a given string with the character following it in the alphabet. 
function transform(text) {
    var s = text.split("");
    for (var i = 0; i < s.length; i++) {
  
      switch (s[i]) {
        case " ":
          break;
        case "z":
          s[i] = "a";
          break;
        case "Z":
          s[i] = "A";
          break;
        default:
          s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
      }
    }
    return s.join("");
  }
  console.log(transform("A1cdEf"));