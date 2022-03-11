let event = {
    list: {},
    on (key, fn) {
        if (!this.list[key]) {
            this.list[key] = [];
        }
        this.list[key].push(fn);
    },
    emit () {
        let key = [].shift.call(arguments),
            fns = this.list[key];
        if (!fns || fns.length <= 0) {
            return false;
        }
        fns.forEach(fn => {
            fn.apply(this, arguments);
        })
    },
    remove (key, fn) {
        let fns = this.list[key];
        if (!fns || fns.length <= 0) {
            return false;
        }
        if (!fn) {
            fns && (fns.length = 0);
        } else {
            fns.forEach((cb, i) => {
                if (cb === fn) {
                    fns.splice(i, 1);
                }
            })
        }
    }
}
function cat () {
    console.log('喵喵喵～');
}
function dog () {
    console.log('汪汪汪～');
}
function hasArgs (args) {
    console.log(args);
}
event.on('pet', hasArgs);
event.on('pet', cat);
event.on('pet', dog);

event.remove('pet', dog)

event.emit('pet', '我是传递的参数');

// 结果：
// '我是传递的参数'
// '喵喵喵～'
