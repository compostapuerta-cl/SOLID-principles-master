import { Component } from './Component.js';
export class Keyboard extends Component {
    constructor() {
        super(40, "Logitech", "Mas RGB Mas FPS", "./img/keyboard.png");
        this.readData = () => {
            console.log('Leyendo datos del teclado');
        };
    }
}
