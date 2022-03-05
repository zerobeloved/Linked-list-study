const maxSubArray = function(nums) {
    let pre = 0, maxAns = nums[0]
    nums.forEach((x) => {
        pre = Math.max(pre + x, x)
        maxAns = Math.max(maxAns, pre)
    })
    return maxAns
};
let arr = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(arr))
