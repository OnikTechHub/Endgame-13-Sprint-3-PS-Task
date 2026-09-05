// 01. Contains Duplicate

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const uniqueElements = new Set(nums);
    return uniqueElements.size !== nums.length;
};

console.log(containsDuplicate([1, 2, 3, 1])); 



// 02. Move Zeroes

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let insertPos = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[insertPos] = nums[i];
            insertPos++;
        }
    }
    
    for (let i = insertPos; i < nums.length; i++) {
        nums[i] = 0;
    }
};

let numsArr = [0, 1, 0, 3, 12];
moveZeroes(numsArr);
console.log(numsArr); 




// 03. Valid Anagram

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    const sortString = (str) => str.split('').sort().join('');
    return sortString(s) === sortString(t);
};

console.log(isAnagram("anagram", "nagaram")); 




// 04. Ransom Note

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const charCount = {};
    
    for (let char of magazine) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    for (let char of ransomNote) {
        if (!charCount[char]) return false;
        charCount[char]--;
    }
    
    return true;
};

console.log(canConstruct("aa", "aab"));  


// 05. Majority Element

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let candidate = null;
    
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    
    return candidate;
};


console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); 






// 06. 3Sum

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
};


console.log(threeSum([-1, 0, 1, 2, -1, -4])); 




// 07. Subarray Sum Equals K

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0;
    let sum = 0;
    const map = new Map();
    map.set(0, 1);
    
    for (let num of nums) {
        sum += num;
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    
    return count;
};

console.log(subarraySum([1, 1, 1], 2)); 




// 08. Top K Frequent Elements

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freqMap = {};
    for (let num of nums) {
        freqMap[num] = (freqMap[num] || 0) + 1;
    }
    
    return Object.keys(freqMap)
        .sort((a, b) => freqMap[b] - freqMap[a])
        .slice(0, k)
        .map(Number);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); 



// 09. Longest Consecutive Sequence

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const numSet = new Set(nums);
    let longestStreak = 0;
    
    for (let num of numSet) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;
            
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }
            
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
    
    return longestStreak;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); 




// 10. Sort Colors

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;
    
    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
};

let colorsArr = [2, 0, 2, 1, 1, 0];
sortColors(colorsArr);
console.log(colorsArr); 