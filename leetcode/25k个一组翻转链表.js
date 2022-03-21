function listNode(val) {
    this.val = val
    this.next = null
}

const head = new listNode(1)
head.next = new listNode(2)
head.next.next = new listNode(3)
let tail = head.next.next




const myReverse = (head, tail) => {
    let prev = null
    let curr = head
    while (prev !== tail) {
        const next = curr.next;
        curr.next = prev
        prev = curr
        curr = next
    }
    return [tail, head];
}

console.log(myReverse(head, tail))
