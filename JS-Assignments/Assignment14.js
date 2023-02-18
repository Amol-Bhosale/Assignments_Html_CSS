/* Write a JavaScript program to find the maximal difference between any two adjacent elements of a given array
of integers.*/
function max_difference(arr) {
    var max = -1;
    var temp;
    for (var i = 0; i < arr.length - 1; i++) {
      temp = Math.abs(arr[i] - arr[i + 1]);
      max = Math.max(max, temp);
    }
    return max;
  }
  console.log(max_difference([5,2,7,4,11]));