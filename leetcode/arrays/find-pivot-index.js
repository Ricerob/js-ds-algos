/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    var sumArray = []
    sumArray.push(0) // Needed to compare when left sum of 0 = right sum of 0
    
    // Get prefix sum
    for(let i = 1; i <= nums.length; i++) {
        sumArray.push(nums[i-1] + sumArray[i-1])
    }
    
    // Used to compare against
    let largestPrefixSumVal = sumArray[sumArray.length - 1]
    
    // If largest val - current val = sum value before, we have a match
    for(let i = 1; i < sumArray.length; i++) {
        if(largestPrefixSumVal - sumArray[i] === sumArray[i-1]) {
            return i - 1;
        }
    }
    
    return -1
};