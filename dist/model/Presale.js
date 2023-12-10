export class Presale {
    constructor() {
        this._components = [];
    }
    get components() {
        return this._components;
    }
    set components(components) {
        this._components = components;
    }
    getTotalPrice() {
        let total = 0;
        for (let component of this._components) {
            total += component.price;
        }
        return total;
    }
}
