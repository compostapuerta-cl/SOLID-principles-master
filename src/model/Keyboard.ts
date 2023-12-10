import { Component } from './Component.js';
import { iInputDevice } from '../interfaces/iInputDevice.js';

export class Keyboard extends Component implements iInputDevice{
    readData: Function;
    constructor(){
        super(40, "Logitech", "Mas RGB Mas FPS", "./img/keyboard.png");
        this.readData = ()=>{
            console.log('Leyendo datos del teclado');
        }
    }
}