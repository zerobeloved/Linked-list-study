let arr = [1,2,3,4,5]
let target = 8
let res = []
const search = (arr,target) => {
    if(arr.includes(target)) return arr.indexOf(target)
    for(let i = 0; i<arr.length;i++) {
        let index = search(arr, target-nums[i])
    }
}
