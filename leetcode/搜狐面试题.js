let arr = [1,2,3,2,4,5,6,7]
let target = 8

const search = (arr,target) => {
    let temp = []
    let ans = []
    let i = 0

    const dfs = (arr, target) => {
        if (i >= arr.length || arr[i]>target) return
        temp.push(arr[i])
        i++
        if (temp[temp.length - 1] === target) {
            ans.push(temp.slice())
            return
        }
        dfs(arr, target - arr[i - 1])
        temp.pop()
        dfs()
    }
    dfs(arr,target)
    return ans
}
console.log(search(arr,target))
//应该是回溯
