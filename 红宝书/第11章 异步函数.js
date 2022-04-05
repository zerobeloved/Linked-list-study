// double = (value)=> {
//     setTimeout(() =>setTimeout(console.log, 0, value*2), 1000)
// }
// double(3)

// function double(value, callback) {
//     setTimeout(() => callback(value * 2), 1000)
// }
// double(3, (x) => console.log(`I was given: ${x}`))
//
// let p = new Promise(() => {} )
// setTimeout(console.log, 0, p)
//
// let p1 = new Promise((resolve,reject) => resolve())
// setTimeout(console.log, 0, p1)
//
// let p2 = new Promise((resolve,reject) => reject())
// setTimeout(console.log, 0, p2)
//
// new Promise(() => setTimeout(console.log, 0, 'executor'))
// setTimeout(console.log, 0, 'promise initialized')

//
// let p = new Promise((resolve, reject) => setTimeout(resolve, 1000))
// setTimeout(console.log, 0, p)
//
// let p = new Promise((resolve, reject) => {
//     setTimeout(reject, 1000)
// })
// setTimeout(console.log, 0, p)
// // setTimeout(console.log, 10000, p)
//
// let p1 = new Promise((resolve, reject) => resolve())
// let p2 = Promise.resolve()
// setTimeout(console.log, 0, Promise.resolve(3,4,5))


const sortArray = (nums) => {
    if(nums.length <= 1) return nums
    let mid = Math.floor(nums.length/2)
    let midVal = nums.splice(mid,1)[0]
    let left = []
    let right = []
    for(let i = 0; i<nums.length;i++) {
        if(nums[i] < midVal) {
            left.push(nums[i])
        } else {
            right.push(nums[i])
        }
    }
    return sortArray(left).concat([midVal], sortArray(right))
}
let arr = [1,4,2,3,6]
console.log(sortArray(arr))
