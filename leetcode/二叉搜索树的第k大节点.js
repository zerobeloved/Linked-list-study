var kthLargest = function(root, k) {
    let stk = [0]
    const dfs = function(root) {
        if(!root) return
        if(root.val > stk[stk.length-1]) {
            stk.push(root.val)
        }
        dfs(root.left)
        dfs(root.right)
    }
    dfs(root)
    return stk[stk.length-k]
};
const root = {
    val: 5,
    left: {
        val: 3,
        left: {
            val:2,
            left: {
                val:1
            }
        },
        right: {
            val: 4
        }
    },
    right: {
        val: 6,
        right: {
            val: 1
        }
    }
};
console.log(kthLargest(root,3))
