function hash(key) {
    return Array.from(key).reduce(
        (accum, char) => accum + char.charCodeAt(), 0
    );
}

class hashMap{
    constructor() {
        this._items = [];
    }

    set(k, v) {
        const hashedKey = hash(k);
        this._items[hashedKey] = v;
    }
    get(k) {
        const hashedKey = hash(k)
        return this._items[hashedKey]
    }
}

const m = new hashMap()
m.set('apple', 'red')
m.set('christmas tree', 'green')
console.log(m)

console.log(m.get('apple'))