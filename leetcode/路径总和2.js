var pathSum = function(root, targetSum) {
    let ans =[]
    let temp = []
    const dfs = (root,targetSum) => {
        if(!root) return
        temp.push(root.val)
        if(!root.left && !root.right && root.val === targetSum) {
            ans.push(temp.slice())
        }
        dfs(root.left, targetSum-root.val)
        dfs(root.right,targetSum-root.val)
        temp.pop()
    }
    dfs(root, targetSum)
    return ans
};

let root = {
    val: 5,
    left:{
        val:4,
        left:{
            val: 11,
            left: {
                val: 7
            },
            right: {
                val:    2
            }
        }
    },
    right: {
        val: 8,
        left: {
            val: 13
        },
        right: {
            val: 4,
            left: {
                val: 5
            },
            right: {
                val: 1
            }
        }
    }
}
let targetSum = 22
console.log(pathSum(root, targetSum))
