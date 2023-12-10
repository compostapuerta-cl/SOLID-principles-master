import { Screen } from './../model/Screen.js';
import { InkPrinter } from './../model/InkPrinter.js';
import { LaserPrinter } from './../model/LaserPrinter.js';
import { Component } from './../model/Component.js';
export let dbOutput: Component[] = [
    new LaserPrinter(),
    new InkPrinter(),
    new Screen()
]