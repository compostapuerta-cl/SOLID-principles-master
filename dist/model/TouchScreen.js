import { Component } from './Component.js';
export class TouchScreen extends Component {
    constructor() {
        super(265, "AOC", "Pantalla tactil 24'", "./img/touch_screen.png");
        this.readData = () => {
            console.log("Leyendo de la pantalla");
        };
        this.writeData = () => {
            console.log("Mostrando en pantalla");
        };
    }
}
