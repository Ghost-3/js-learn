class IfExecutor {
    constructor(cond, fn) {
        this._else = null
        this._ifs = [{cond, fn}]
    }

    elif(cond, fn) {
        this._ifs.push({cond, fn})
        return this
    }

    else(fn) {
        this._else = fn
        return this.exec()
    }

    exec() {
        for (const i of this._ifs) {
            if (i.cond) return i.fn()
        }
        if (this._else) return this._else()
    }
}

function If(cond, fn) {
    return new IfExecutor(cond, fn);
}

export default If;
