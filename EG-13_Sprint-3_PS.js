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