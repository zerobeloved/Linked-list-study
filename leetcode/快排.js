const sortArray = (nums, left = 0, right = nums.length - 1) => {
    if (left >= right) return nums
    let i = left
    let j = right - 1
    while (i <= j) {
        if (nums[i] > nums[right]) {
            ;[nums[i], nums[j]] = [nums[j], nums[i]]
            j--
        } else {
            i++
        }
    }
    j++
    ;[nums[j], nums[right]] = [nums[right], nums[j]]
    sortArray(nums, left, j - 1)
    sortArray(nums, j + 1, right)
    return nums
}


let nums = [454656,55,2,3,4514,47]
console.log(sortArray(nums));
