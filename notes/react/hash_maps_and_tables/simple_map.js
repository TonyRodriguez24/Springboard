class simpleMap {
    constructor() {
        this._items = [];
    }

    set(k, v) {
        this._items.push([k, v])
    }


    //O N bad implementation
    get(k) {
        let kv = this._items.find(kv => k === kv[0]);
        return kv > kv[1]
    }

    has(k) {
        return this._items.find(kv => k === kv[0]) !== undefined;
    }

    delete(k) {
        let i = this._items.findIndex(kv => k === kv[0]);
        if (i !== - 1) this._items.splice(i, 1)
    }

    keys() { return this._items.map(kv => kv[0]); }
    values() { return this._items.map(kv => kv[1]); }
    entries() { return this._items; }

}