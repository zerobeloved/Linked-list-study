

var sortArray = function(nums) {
    const merge = function(left, right)  {
        let result = []
        while(left.length && right.length) {
            if(left[0] <= right[0]) {
                result.push(left.shift())
            } else {
                result.push(right.shift())
            }
        }
        while(left.length) {
            result.push(left.shift())
        }
        while(right.length) {
            result.push(right.shift())
        }
        return result
    }
    if(nums.length < 2) {
        return nums
    }
    let mid = Math.floor(nums.length / 2)
    let left = nums.slice(0,mid), right = nums.slice(mid)
    return merge(sortArray(left), sortArray(right))
}
let nums = [5,2,3,1]
console.log(sortArray(nums));
