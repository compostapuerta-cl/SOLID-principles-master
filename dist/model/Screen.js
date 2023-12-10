import { Component } from './Component.js';
export class Screen extends Component {
    constructor() {
        super(287, "Samsung", "Las mejores pantallas para juegos", "./img/screen.png");
        this.writeData = () => {
            console.log('Ando mostrando tus juegos');
        };
    }
}
