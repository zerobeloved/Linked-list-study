var maxSlidingWindow = function(nums, k) {
    if(k == 0) return []
    let left = 0,right = k-1

    let dp = []
    for(let i = 0;i+k-1<nums.length;i++) {
        let max = -Number.MAX_VALUE
        for(let j = i; j < i+k;j++) {

            max = Math.max(max, nums[j])
        }
        dp.push(max)
    }
    return dp
};
let nums = [1,3,-1,-3,5,3,6,7], k = 3
// console.log(maxSlidingWindow(nums,k))
let nums2 = [1,-1], k2 = 1
console.log(maxSlidingWindow(nums2,k2))
