import { Component } from './Component.js';


export class Printer extends Component {

    constructor(price: number, brand: string, name: string, img: string){
        super(price, brand, name, img);
    }
}