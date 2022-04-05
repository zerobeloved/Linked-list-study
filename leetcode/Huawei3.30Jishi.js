let k = 5
let n = 6
let l = 0
let now = 0

let line = "A B A B A A".split(" ")
let chip = new Array(k).fill(0)
for(let i = 0;i<line.length;i++) {
    if(line[i] === "A") {
        if(chip[now]<10) {
            chip[now] += 2.5
        } else {
            l++
            now = l
            chip[now] += 2.5
        }
    }
    if(line[i] === "B") {
        l++
        chip[l] = 10
    }
}
if(line[line.length-1] === "A") {
    console.log(now+1)
    console.log(chip[now]/2.5)
}

