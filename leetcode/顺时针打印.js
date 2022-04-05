let matrix = [[1,2,3],[4,5,6],[7,8,9]]
const search = (matrix) => {
    if(matrix === null) {
        return []
    }
    let l = 0
    let r = matrix[0].length-1
    let t = 0
    let b = matrix.length-1
    let res = []
    while(true) {
        for(let i = l; i<r+1;i++) {
            res.push(matrix[t][i])
        }
        t++
        if(t>b) break
        for(let i = t; i<b+1;i++) {
            res.push(matrix[i][r])
        }
        r--
        if(l>r) break
        for(let i = r; i>l-1;i--) {
            res.push(matrix[b][i])
        }
        b--
        if(t>b) break
        for(let i = b; i>t-1;i--) {
            res.push(matrix[i][l])
        }
        l++
        if(l>r) break
    }
    return res
}
console.log(search(matrix))
