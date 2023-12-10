import { Component } from './Component.js';

export class Presale {

    private _components: Component[] = [];

    constructor(){
    }


    get components(): Component[]{
        return this._components;
    }

    set components(components: Component[]){
        this._components = components;
    }

    getTotalPrice(): number{
        let total = 0;
        for(let component of this._components){
            total += component.price;
        }

        return total;
    }

}
