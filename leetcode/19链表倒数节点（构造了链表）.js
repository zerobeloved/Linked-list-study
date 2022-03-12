let list = {value : 1}
list.next = {value: 2}
list.next.next = {value: 3}
list.next.next.next = {value: 4}
// list.next.next.next.next = {value: 5}
var removeNthFromEnd = function(head, n) {
    let temp = head, cnt = 0
    while(temp) {
        temp = temp.next
        cnt++
    }
    temp = head
    for(let i = 0; i<cnt-n;i++) {
        temp = temp.next
    }
    temp.next = temp.next.next
    return head
};
console.log(removeNthFromEnd(list, 1));
