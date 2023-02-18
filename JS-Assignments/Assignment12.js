function first_half(str) {
    if (str.length % 2 == 0) {
      return str.slice(0, str.length / 2);
    }
    return str;
  }
  console.log(first_half("amol"));
  console.log(first_half("JavaScript"));
  console.log(first_half("reactJS"));