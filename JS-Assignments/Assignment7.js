// Write a JavaScript program to count the number of vowels in a given string.
function getCount(str) {
    var vowelsCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str) {
        if (vowels.includes(char)) {
            vowelsCount++;
        }
    }
    return vowelsCount;
}
console.log(getCount("yash technology"));