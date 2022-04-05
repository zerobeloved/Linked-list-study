const permute = (nums)=> {
    let res = []
    let visited = []
    const dfs = (path) => {
        if( path.length=== nums.length) {
            res.push(path.slice())
            return
        }
        for(const num of nums) {
            if(visited[num]) continue
            path.push(num)
            visited[num] = true
            dfs(path)
            path.pop()
            visited[num] = false
        }
    }
    dfs([])
    return res
}


let nums = [1,2,3]
console.log(permute(nums))
