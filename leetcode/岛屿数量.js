var numIslands = function(grid) {
    const bfs = (x,y) => {
        if(grid[x][y] !== "1" || visited[x][y] === true) return 0
        visited[x][y] = true
        let queue = [[x,y]]
        cnt++
        const dir = [[-1,0],[1,0],[0,1],[0,-1]]
        while(queue.length) {
            let temp = queue.shift()
            for(let i = 0; i<dir.length;i++) {
                let xx = temp[0] + dir[i][0]
                let yy = temp[1] + dir[i][1]
                if(xx<0 || yy<0 || xx>=m || yy>=n) continue
                if(grid[xx][yy] === "1" && visited[xx][yy] != true) {
                    visited[xx][yy] = true
                    grid[xx][yy] = "0"
                    queue.push([xx,yy])
                }
            }
        }
    }

    let cnt = 0
    let m = grid.length
    let n = grid[0].length
    let visited = Array(m).fill(0).map(() => Array(n).fill(false))
    for(let i = 0; i<m;i++) {
        for(let j = 0; j<n;j++) {
            bfs(i,j)
        }
    }
    return cnt
};

let grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
]

console.log(numIslands(grid))
