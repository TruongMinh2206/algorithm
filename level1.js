
// 1.1 Write a program that takes two numbers as inputs and displays their sum
function run(a, b) {
    let sum = a + b;
    return sum;
}
console.log(run(5, 6));
// 1.2 Write a program that takes a string as input and displays the length of the string.


function getStringLength(str) {
    let length = str.length;
    console.log(`The length is: ${length}`);
    return length;
}

//1.3 Write a program that takes a number as input and displays its square. 
function squareNumber(num) {
    return num * num;
}
console.log(squareNumber(5));

//1.4 Write a program that takes a list of numbers as input and displays the largest number in the list.

function findMax(num) {
    console.log(Math.max(...num));
}
findMax([3, 7, 2, 9.5, 1]);

//1.5 Write a program that takes a list of strings as input and displays the shortest string in the list.
function findShortestString(strings) {
    if (strings.length === 0) return null; 
    return strings.reduce((shortest, current) => 
        current.length < shortest.length ? current : shortest
    );
}
console.log(findShortestString(["trminh", "minh", "quy", "ku", "a"])); //kq: a

//1.6 Write a program that takes a list of numbers as input and sorts the list in ascending order.
function sortAscending(numbers) {
    return numbers.sort((a, b) => a - b);
}
console.log(sortAscending([3, 7, 2, 9, 1])); 

//1.7 Write a program that takes a list of strings as input and sorts the list in alphabetical order.

function sortAlphabetically(strings) {
    return strings.sort();
}
console.log(sortAlphabetically(["ba", "a", "e", "c", "f"])); 

//1.8 Write a program that takes a list of numbers as input and returns the median of the numbers

function median(numbers) {

    if(numbers.length === 0) return null;

    numbers.sort((a, b) => a -b);

    const mid = Math.floor(numbers.length / 2);

    if (numbers.length % 2 !== 0) {
        return numbers[mid];
    }
    return (numbers[mid - 1] + numbers[mid]) / 2;
}
console.log(median([3, 7, 2, 9, 1]));  //kq: 3
console.log(median([3, 7, 2, 9, 1, 4])); //kq: 3.5


//1.9 Write a program that takes a string as input and returns the number of words in the string

function countWords(str) {
    if (!str.trim()) return 0; 
    return str.trim().split(/\s+/).length;
}

console.log(countWords("Hello world!"));  // Output: 2

//1.10 Write a program that takes a list of strings as input and returns the number of strings that contain the letter 'a'.
function countStringsWithA(strings) {
   return strings.filter(str => str.includes('a')).length; 
}
console.log(countStringsWithA(["apple", "banana", "kiwi"]));  
// Output: 3 ("apple", "banana")





