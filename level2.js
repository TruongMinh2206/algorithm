//2.1 Write a program that takes a list of numbers as input and returns the second largest number in the list.
function findSecondLargest(numbers) {
    numbers.sort((a, b) => b - a); 

    return numbers.length > 1 ? numbers[1] : null;
}
//Output: VD: [70, 11, 20, 4, 100] 👉 70

//2.2 Write a program that takes a list of strings as input and returns the longest word in the list.
function findLongestString(strings) {
    if (strings.length === 0) return null;
    return strings.reduce((longest, current) => 
        current.length > longest.length ? current : longest
    );
}

console.log(findLongestString(["trminh", "minh", "quy", "ku", "a"]));  
// Output: "trminh"

//2.3 Write a program that takes two strings as input and returns the longest common subsequence of the two strings.

function longestCommonSubstring(str1, str2) {
    const m = str1.length, n = str2.length;
    let dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));
    let maxLength = 0, endIndex = 0; 

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (dp[i][j] > maxLength) {
                    maxLength = dp[i][j];
                    endIndex = i;
                }
            }
        }
    }

    return str1.substring(endIndex - maxLength, endIndex);
}

console.log(longestCommonSubstring("abcdef", "abczyzcdef"));  // Output: "cdef"

//2.4 Write a program that takes a list of numbers as input and returns the sum of the numbers that are divisible by both 3 and 5.

function sumDivisibleBy3And5(numbers) {
    return numbers
        .filter(num => num % 3 === 0 && num % 5 === 0) 
        .reduce((sum, num) => sum + num, 0); 
}

console.log(sumDivisibleBy3And5([15, 30, 10, 9, 45, 60, 7])); //op: 150( 15 30 45 60)

//2.5 Write a program that takes a list of integers as input and returns the maximum sum of any contiguous subarray within the list.
function maxSubarraySum(arr) { 
    let maxSum = arr[0]; 
    let currentSum = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum); 
    }
    return maxSum;
}
console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6 (4 + -1 + 2 + 1)
console.log(maxSubarraySum([-2, -3, 4, -1, -2, 1, 5, -3])); // Output: 7 (4 + -1 + -2 + 1 + 5)

