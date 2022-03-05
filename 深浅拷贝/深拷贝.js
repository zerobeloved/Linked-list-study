function clone(target) {
    if (typeof target === 'object') {
        let cloneTarget = {}
        for(const key in target) {
            cloneTarget[key] =  clone(target[key])
        }
    } else {
        return target
    }
}
