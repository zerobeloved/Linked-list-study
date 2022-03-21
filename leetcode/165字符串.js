
let version1 = "1.01", version2 = "1.001"

const foo = (version1,version2) => {
    let v1 = version1.split(".")
    let v2 = version2.split(".")
    for(let i = 0;i<v1.length || i<v2.length;i++) {
        let x = 0, y = 0
        if(i<v1.length) {
            x = parseInt(v1[i])
        }
        if(i<v2.length) {
            y = parseInt(v2[i])
        }
        if(x>y) {
            return 1
        }
        if(x<y) {
            return -1
        }

    }
    return -1

}
