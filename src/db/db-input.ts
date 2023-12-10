import { GraphicTable } from './../model/GraphicTable.js';
import { Mouse } from './../model/Mouse.js';
import { Keyboard } from './../model/Keyboard.js';
import { Component } from './../model/Component.js';
export let dbInput: Component[] = [
    new Keyboard(),
    new Mouse(),
    new GraphicTable()
]