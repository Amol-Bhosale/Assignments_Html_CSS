// Write a JavaScript program to find the maximal difference among all possible pairs of a given array of integers.
function array_max_diff(arr) {
    var max_result = 0;
  
    for (var i = 0; i < arr.length; i++) {
      for (var k = 0; k != i && k < arr.length; k++) {
        var diff = Math.abs(arr[i] - arr[k]);
        max_result = Math.max(max_result, diff);
      }
    }
    return max_result;
  }
  console.log(array_max_diff([5,3,7,2,9,11]));