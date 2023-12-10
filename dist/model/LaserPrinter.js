import { Printer } from './Printer.js';
export class LaserPrinter extends Printer {
    constructor() {
        super(230, "Epson", "Impresoras Multifuncionales", "./img/printer_laser.png");
        this.writeData = () => {
            console.log("Imprimiendo ahora en laser");
        };
    }
}
