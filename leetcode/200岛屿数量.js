var numIslands = function(grid) {
    let count = 0
    for(let i = 0;i<grid.length;i++) {
        for(let j = 0;j<grid[0].length;j++) {
            if(grid[i][j] === "1") {
                count++
                gridZero(i,j,grid)
            }
        }
    }
    return count
}
const gridZero = (i,j,grid) => {
    if(i<0 || j<0 ||  i>=grid.length || j >= grid[0].length || grid[i][j] === "0") return
    grid[i][j] = "0"
    gridZero(i,j+1,grid)
    gridZero(i,j-1,grid)
    gridZero(i+1,j,grid)
    gridZero(i-1,j,grid)
}
let grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]
console.log(numIslands(grid));
