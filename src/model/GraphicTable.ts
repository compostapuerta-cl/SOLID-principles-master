import { iInputDevice } from './../interfaces/iInputDevice.js';
import { Component } from './Component.js';
export class GraphicTable extends Component implements iInputDevice{
    readData: Function;
    constructor(){
        super(340, "Wacom", "Dibujos detallados", "./img/graphic_table.png");
        this.readData = () => {
            console.log("Dibujando cosillas");
        }
    }
}