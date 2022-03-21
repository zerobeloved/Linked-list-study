const sortArray = function (nums) {
    if(nums.length < 1) return nums
    let midIndex = Math.floor(nums.length/2)
    let midVal = nums.splice(midIndex,1)[0]
    let left = []
    let right = []
    for(let i = 0;i<nums.length;i++) {
        if(nums[i] < midVal) {
            left.push(nums[i])
        } else {
            right.push(nums[i])
        }
    }
    return sortArray(left).concat([midVal], sortArray(right))

}

let arr = [45,11,49,98]
console.log(sortArray(arr));
