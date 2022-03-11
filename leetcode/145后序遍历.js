var postorderTraversal = function(root) {
    const res = []
    const stk = []
    let prev = null
    while(stk.length || root) {
        while(root) {
            stk.push(root)
            root = root.left
        }
        root = stk.pop()
        if(root.right === null || root.right === prev) {
            res.push(root.val)
            prev = root
            root = null
        } else {
            stk.push(root)
            root = root.right
        }
    }
    return res
};

var DiguipostorderTraversal = function(root) {
    let res = []
    const lastorder = (root) => {
        if(!root) {
            return
        }
        lastorder(root.left)
        lastorder(root.right)
        res.push(root.val)
    }
    lastorder(root)
    return res
}

let root = {val: 1}
root.left = {val: null}
root.right = {val: 2}
root.right.left = {val: 3}
// console.log(root)
console.log(postorderTraversal(root));
