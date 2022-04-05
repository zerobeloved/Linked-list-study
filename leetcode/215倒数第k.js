const findKthLargest = function(nums, k) {

    const sort = (nums) => {
        if(nums.length <= 1) return nums
        let mid = Math.floor(nums.length/2)
        let left = nums.slice(0,mid)
        let right = nums.slice(mid)
        return merge(sort(left),sort(right))
    }
    const merge = (left,right) => {
        let res = []
        while(left.length && right.length) {
            if(left[0] < right[0]) {
                res.push(left.shift())
            } else {
                res.push(right.shift())
            }
        }
        while(left.length) {
            res.push(left.shift())
        }
        while(right.length) {
            res.push(right.shift())
        }
        return res
    }
    nums = sort(nums)
    console.log(nums[-k])
    console.log(nums)

};

let arr = [3,2,1,5,6,4]
let k = 2
findKthLargest(arr)
