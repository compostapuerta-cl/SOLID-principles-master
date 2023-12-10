import { iInputDevice } from './../interfaces/iInputDevice.js';
import { Component } from './Component.js';
export class Mouse extends Component implements iInputDevice{
    readData: Function;
    
    constructor(){
        super(20, "Ryzen", "Mouse óptico gamer", "./img/mouse.png");
        this.readData = () => {
            console.log("Has realizado muchos clicks");
        }
    }
}
