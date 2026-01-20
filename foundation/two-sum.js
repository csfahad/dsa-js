// Problem-link: https://leetcode.com/problems/two-sum/

function twoSum(nums, target) {
    // Approach 1: Bruteforce Approach

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];

    // Approach 2: Two-Pointer Approach

    const numsWithIndex = nums.map((nums, index) => [nums, index]);
    numsWithIndex.sort((a, b) => a[0] - b[0]);
    let start = 0;
    end = nums.length - 1;
    while (start < end) {
        const sum = numsWithIndex[start][0] + numsWithIndex[end][0];
        if (sum === target) {
            return [numsWithIndex[start][1], numsWithIndex[end][1]];
        } else if (sum < target) {
            start++;
        } else {
            end--;
        }
    }
    return [];
}
