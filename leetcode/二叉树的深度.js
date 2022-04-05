var maxDepth = function(root) {
    if(!root) return
    let queue = []
    queue.push(root)
    let cnt = 1
    while(queue.length) {
        let temp = queue.shift()
        if(temp.left) queue.push(temp.left)
        if(temp.right) queue.push(temp.right)
        cnt++
    }
    return cnt
};
function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}
let root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)
console.log(maxDepth(root))
