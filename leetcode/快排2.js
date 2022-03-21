const sortArray = function (nums) {
    if(nums <= 1) return nums
    let mid = Math.floor(nums.length / 2)
    let midVal = nums.splice(mid,1)[0]
    let left = []
    let right = []
    for(let i=0; i<nums.length;i++) {
        if(nums[i] < midVal) {
            left.push(nums[i])
        } else {
            right.push(nums[i])
        }
    }
    return sortArray(left).concat([midVal], sortArray(right))
}


let nums = [5,1,1,2,0,0]
console.log(sortArray(nums));
