//3.1Write a program that takes a list of numbers as input and returns the second smallest number in the list.

function findSecondLargest(numbers) {
    numbers.sort((a, b) => a - b); 

    return numbers.length > 1 ? numbers[1] : null;
}
//Output: VD: [70, 11, 20, 4, 100] 👉 11

//3.2 Write a program that takes a list of integers as input and returns the maximum difference between any two elements in the list.
function maxDifference(arr) {
    if (arr.length < 2) return 0;
    return Math.max(...arr) - Math.min(...arr);
}

console.log(maxDifference([7, 1, 5, 3, 6, 4]))

//3.5.Write a program that takes a list of numbers as input and returns the smallest positive integer that cannot be represented as the sum of any subset of the list.
function SPT(arr) {
    arr.sort((a, b) => a - b); 
    let res = 1; 

    for (let num of arr) {
        if (num > res) return res; 
        res += num; 
    }

    return res;
}

console.log(SPT([1, 2, 3, 10])); // Output: 7

//3.6 Write a program that takes two lists of integers as input and returns the median of the combined list.
function findMedian(arr1, arr2) {
    let merged = arr1.concat(arr2).sort((a, b) => a - b); 
    let n = merged.length;
    
    if (n % 2 === 1) {
        return merged[Math.floor(n / 2)]; 
    } else {
        let mid1 = merged[n / 2 - 1];
        let mid2 = merged[n / 2];
        return (mid1 + mid2) / 2; 
    }
}

console.log(findMedian([1, 3], [2]));          // Output: 2


//3.10 Write a program that takes a list of strings as input and returns the list sorted by the number 
// of distinct characters in each string, with the shortest strings appearing first.

function sortByLengthThenDistinctChars(strings) {
    return strings.sort((a, b) => {
        let lenA = a.length, lenB = b.length;
        let uniqueA = new Set(a).size, uniqueB = new Set(b).size;  
        return lenA - lenB || uniqueA - uniqueB;
    });
}

// Test case
console.log(sortByLengthThenDistinctChars(["apple", "banana", "orange", "kiwi", "strawberry"]));

