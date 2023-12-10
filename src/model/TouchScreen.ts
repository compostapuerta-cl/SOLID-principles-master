import { Component } from './Component.js';
import { iOutputDevice } from './../interfaces/iOutputDevice.js';
import { iInputDevice } from './../interfaces/iInputDevice.js';

export class TouchScreen extends Component implements iInputDevice, iOutputDevice{
    readData: Function;
    writeData: Function;
   
    constructor(){
        super(265, "AOC", "Pantalla tactil 24'", "./img/touch_screen.png")
        this.readData = ()=>{
            console.log("Leyendo de la pantalla");
        }
        this.writeData = ()=>{
            console.log("Mostrando en pantalla")
        }
    }
}