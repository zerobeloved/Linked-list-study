let nums = [-1,0,1,2,-1,-4]
nums.sort((a,b) => a-b)
let res = []
for(let i = 0; i< nums.length-2;i++) {
    if(i>0 && nums[i] === nums[i-1]) continue
    let right = nums.length-1
    let target = -nums[i]
    for(let left = i+1;left < nums.length-1;left++) {
        if(left>i+1 && nums[left] === nums[left-1]) continue
        while(right>left && nums[i]+nums[left]+nums[right] > 0) {
            right--
        }
        if(right === left) break
        if(nums[i]+nums[left]+nums[right] === 0) {
            res.push([nums[i], nums[left],nums[right]])
        }

    }

}
console.log(res)
