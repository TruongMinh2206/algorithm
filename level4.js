// 4.1 Write a program that takes a list of integers as input and returns the minimum number of moves required
// to sort the list in ascending order using bubble sort.

function arrSort(arrNum) {
    if (arrNum.length <= 0) {
      console.log("Is empty array");
    }
    let count = 0;
  
    for (let i = 0; i < arrNum.length; i++) {
      for (let j = 0; j < arrNum.length - i - 1; j++) {
        if (arrNum[j] > arrNum[j + 1]) {
          let temp = arrNum[j];
          arrNum[j] = arrNum[j + 1];
          arrNum[j + 1] = temp;
          count++;
        }
      }
    }
    console.log(count);
  }

  //4.3 Write a program that takes a list of strings as input and returns 
  // the length of the longest substring that appears in every string in the list.
//["abcdefg", "abcde", "abcdef", "ab", "abc"] => 2
//["programming", "programmer", "program"] => 7

function longestCommonSubstring(strings) {
    if (strings.length === 0) return 0;
    
    let shortest = strings.reduce((a, b) => a.length <= b.length ? a : b);
    let maxLength = 0;
    
    for (let len = shortest.length; len > 0; len--) {
        for (let start = 0; start <= shortest.length - len; start++) {
            let substring = shortest.substring(start, start + len);
            if (strings.every(str => str.includes(substring))) {
                return len;
            }
        }
    }
    return 0;
}

// Test cases
console.log(longestCommonSubstring(["abcdefg", "abcde", "abcdef", "ab", "abc"])); // Output: 2
console.log(longestCommonSubstring(["programming", "programmer", "program"])); // Output: 7


//4.6 Write a program that takes a list of integers 
// as input and returns the maximum product of any three distinct elements in the list.

function maxProductOfThree(nums) {
    nums.sort((a, b) => a - b);
    let n = nums.length; 
    return Math.max(
        nums[n - 1] * nums[n - 2] * nums[n - 3],
        nums[0] * nums[1] * nums[n - 1]
    );
}

// Example usage:
console.log(maxProductOfThree([1, 10, 2, 6, 5, 3])); // Output: 300
console.log(maxProductOfThree([-10, -10, 5, 2]));    // Output: 500

//4.7 Write a program that takes a list of strings as input and returns the list sorted by the number of distinct words in each string, with the longest strings appearing first.
//(Khuyến khích dùng forEach với javascript )

function sortByDistinctWords(strings) {
    let wordData = []; 
    strings.forEach(str => {
        let words = str.split(/\s+/).filter(Boolean);
        let uniqueWords = new Set(words).size; 
        wordData.push({ str, uniqueWords, length: str.length });
    });
    
    wordData.sort((a, b) => {
        if (b.uniqueWords !== a.uniqueWords) {
            return b.uniqueWords - a.uniqueWords;
        }
        return b.length - a.length;
    });
    
    return wordData.map(item => item.str);
}

let inputStrings = [
    "hello world world",
    "this is a test",
    "JavaScript is great",
    "hello hello",
    "unique words only"
];

console.log(sortByDistinctWords(inputStrings));

//4.9 Viết một chương trình lấy một danh sách các số nguyên làm đầu vào và trả về độ dài của dãy số con tăng dài nhất, 
// với ràng buộc bổ sung là
//  không có hai phần tử liền kề nào trong dãy số con có thể khác nhau quá 1. ( Khuyến khích dùng reduce )

function longestConstrainedSubsequence(nums) {
    if (nums.length === 0) return 0;

    return nums.reduce(
        ([maxLen, currentLen, prev], curr) => {
            if (Math.abs(curr - prev) <= 1 && curr >= prev) {
                currentLen++;
                maxLen = Math.max(maxLen, currentLen);
            } else {
                currentLen = 1;
            }
            return [maxLen, currentLen, curr];
        },
        [1, 1, nums[0]] // Giá trị khởi tạo: maxLen = 1, currentLen = 1, phần tử đầu tiên
    )[0]; // Trả về maxLen
}

// Test cases
console.log(longestConstrainedSubsequence([10, 11, 12, 10, 11, 10, 9, 10])); // Output: 4
console.log(longestConstrainedSubsequence([5, 6, 7, 3, 4, 5, 6, 7, 8, 6])); // Output: 6


//4.10 Write a program that takes a list of strings as input and returns the two strings with the largest overlap of substrings,
//  where the substrings must be at least k characters long (where k is a parameter to the function).

function findLargestOverlap(strings, k) {
    if (strings.length < 2) return null;
    
    function getSubstrings(str, k) {
        let substrings = new Set();
        for (let i = 0; i <= str.length - k; i++) {
            substrings.add(str.substring(i, i + k));
        }
        return substrings;
    } 
    
    let maxOverlap = 0;
    let bestPair = null;
    
    for (let i = 0; i < strings.length; i++) {
        for (let j = i + 1; j < strings.length; j++) {
            let substrings1 = getSubstrings(strings[i], k);
            let substrings2 = getSubstrings(strings[j], k);
            
            let overlap = [...substrings1].filter(sub => substrings2.has(sub)).length;
            
            if (overlap > maxOverlap) {
                maxOverlap = overlap;
                bestPair = [strings[i], strings[j]];
            }
        }
    }
    
    return bestPair;
}

console.log(findLargestOverlap(["abcdef", "cdefgh", "xyzabc", "defzzz"], 3)); // Output: ["abcdef", "cdefgh"]



