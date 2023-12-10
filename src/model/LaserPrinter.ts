import { iOutputDevice } from './../interfaces/iOutputDevice.js';
import { Printer } from './Printer.js';
export class LaserPrinter extends Printer implements iOutputDevice{
    writeData: Function;
    constructor(){
        super(230, "Epson", "Impresoras Multifuncionales", "./img/printer_laser.png");
        this.writeData = () => {
            console.log("Imprimiendo ahora en laser");
        }
    }
}