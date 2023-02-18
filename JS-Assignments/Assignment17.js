// Write a JavaScript program to replace all the numbers with a specified number of a given 
// array of integers.
function array_element_replace(arr, old_value, new_value) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === old_value) {
            arr[i] = new_value;
        }
    }
    return arr;
}
array = [4,5,6,7,8,9,1,2,3,4];
console.log("Original Array: " + array);
console.log(array_element_replace(array, 7,3));