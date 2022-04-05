var reverseBetween = function(head, left, right) {
    let nNode = new ListNode(-1)
    nNode.next = head
    let pre = nNode
    for(let i = 0; i<left-1; i++) {
        pre = pre.next
    }
    let first = pre.next
    let last = first
    for(let i = 0; i<right-left;i++) {
        last = last.next
    }
    let after = last.next//null
    pre.next = null
    last.next = null
    const reverse = (head) => {
        let pre = null
        let cur = head
        while(cur) {
            const next = cur.next
            cur.next = pre
            pre = cur
            cur = next
        }
        return pre
    }
    pre.next = reverse(first)
    for(let i = 0; i<right-left+1; i++) {
        pre = pre.next
    }
    pre.next = after
    return nNode.next
};

function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
}
let head = new ListNode(3)
head.next = new ListNode(5)
// head.next.next = new ListNode(3)
// head.next.next.next = new ListNode(4)
// head.next.next.next.next = new ListNode(5)
console.log(reverseBetween(head,1,2))
