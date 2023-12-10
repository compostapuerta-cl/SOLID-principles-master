import { Screen } from './../model/Screen.js';
import { InkPrinter } from './../model/InkPrinter.js';
import { LaserPrinter } from './../model/LaserPrinter.js';
export let dbOutput = [
    new LaserPrinter(),
    new InkPrinter(),
    new Screen()
];
