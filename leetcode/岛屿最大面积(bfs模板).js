var maxAreaOfIsland = function(grid) {
    let ans=0
    let m = grid.length
    let n = grid[0].length
    let visited = Array(m).fill(0).map(() => Array(n).fill(false))
    for(let i=0;i<m;i++)
    {
        for(let j=0;j<n;j++) {
            ans = Math.max(ans, bfs(i, j))
        }
    }
    return ans

    function bfs (x,y) {
        if(grid[x][y] !== 1 || visited[x][y] === true) return 0
        // if(x===3 && y===8)//调试方法
        // {
        //     let xxxx=0
        // }
        visited[x][y]=true
        let q = [[x,y]]
        let cnt=1
        const dir = [[-1,0],[1,0],[0,1],[0,-1]]
        while(q.length) {
            let temp = q.shift()
            for(let i = 0; i < dir.length;i++) {
                let xx=temp[0]+dir[i][0]
                let yy=temp[1]+dir[i][1]
                if (xx<0||yy<0||xx>=m||yy>=n)  continue
                if( grid[xx][yy]===1&&visited[xx][yy]!=true )
                {
                    cnt+=1
                    visited[xx][yy]=true
                    q.push([xx,yy])
                }
            }
        }
        return cnt
    }
};
let grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]

console.log(maxAreaOfIsland(grid))
