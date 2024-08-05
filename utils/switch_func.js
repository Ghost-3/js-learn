class SwitchExecutor {
    constructor(value) {
        this._value = value;
        this._default = null
        this._cases = []
    }

    case(value, fn) {
        this._cases.push({value, fn});
        return this
    }

    default(fn) {
        this._default = fn
        return this.exec()
    }

    exec() {
        for (const c of this._cases) {
            if (c.value === this._value) return c.fn()
        }
        if (this._default) return this._default()
    }
}

function Switch(value) {
    return new SwitchExecutor(value);
}

export default Switch;