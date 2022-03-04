var search = function(nums, target) {
    let low = 0, high = nums.length-1
    let mid = 0
    while(high >= low) {
        mid = Math.floor((high - low) /2) + low
        if(nums[mid] === target) {
            return mid
        }else if(nums[mid] > high) {
            high = mid-1
        } else {
            low = mid + 1
        }
    }
    return -1
};
let arr = [2,5]
let target = 5
console.log(search(arr,target));
