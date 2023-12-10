export class Component {
    constructor(price, brand, name, image) {
        this._price = price;
        this._brand = brand;
        this._name = name;
        this._image = image;
    }
    get price() {
        return this._price;
    }
    set price(price) {
        this._price = price;
    }
    get brand() {
        return this._brand;
    }
    set brand(brand) {
        this._brand = brand;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get image() {
        return this._image;
    }
    set image(image) {
        this._image = image;
    }
}
