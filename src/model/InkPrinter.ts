import { iOutputDevice } from './../interfaces/iOutputDevice.js';
import { Printer } from './Printer.js';
export class InkPrinter extends Printer implements iOutputDevice{
    writeData: Function;
    constructor(){
        super(180, "HP", "Colores nitidos y vividos", "./img/printer_ink.png");
        this.writeData = () => {
            console.log("¡Imprimiendo data ahora con tinta!")
        }
    }
}