/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    var arr = []
    for(var i = 0; i < nums.length; i++) {
        if(arr[nums[i]] === true) return true
        arr[nums[i]] = true;
    }
    return false
};