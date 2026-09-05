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