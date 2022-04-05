/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
let root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)
// console.log(root)


const root2 = {
    val: 3,
    left: {
        val: 9

    },
    right: {
        val: 20,
        left:{
            val: 15
        },
        right: {
            val: 7
        }

    }
};
// console.log(root2)
var levelOrder = function(root) {
    let queue = []
    let res = []
    let num = []
    queue.push(root)
    let level = queue.length
    let l = 0
    while(queue.length) {
        res.push([])
        const num = queue.length
        for(let i =0; i<num; i++) {
            res[l].push(queue[0].val)
            if(queue[0].left) {
                queue.push(queue[0].left)
            }
            if(queue[0].right) {
                queue.push(queue[0].right)
            }
            queue.shift()
        }
        l++
    }

    return res
};
console.log(levelOrder(root))
