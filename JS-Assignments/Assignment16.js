// Write a JavaScript program to find the number which appears most in a given array of integers.
function array_element(arr) {
    var counter = [],
      ans = 0;
  
    for (var i = 0; i < 10; i++) {
      counter.push(0);
    }
    for (var i = 0; i < arr.length; i++) {
      counter[arr[i] - 1]++;
      if (counter[arr[i] - 1] > counter[ans]) {
        ans = arr[i] - 1;
      }
    }
    return ans + 1;
  }
  console.log(array_element([5,3,7,4,2,8,3,5,3]));