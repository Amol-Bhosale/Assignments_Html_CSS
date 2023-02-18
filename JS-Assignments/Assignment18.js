// Write a JavaScript program to compute the sum of absolute differences of consecutive numbers of a given array
// of integers.
function sum_adjacent_difference(arr) {
    var result = 0;
    for (var i = 1; i < arr.length; i++) {
        result += Math.abs(arr[i] - arr[i - 1]);
    }
    return result;
}
console.log(sum_adjacent_difference([2,3,4,6]));