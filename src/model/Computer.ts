import { iVerifier } from './../interfaces/iVerifier.js';
import { Component } from './Component.js';
export class Computer implements iVerifier{
    private _components: Component[] = [];
    typeComponents: string[] = [];
    verifyRequirements: Function;

    constructor(){
        this.verifyRequirements = (): boolean => {
            let countProcessor = 0;
            let countInput = 0;
            let countOutput = 0;
            let countSpecial = 0;
            for (let type of this.typeComponents){
                if(type === 'Processor'){
                    countProcessor++;
                }
                if(type === 'Input'){
                    countInput++;
                }
                if(type === 'Output'){
                    countOutput++;
                }
                if(type == 'Special'){
                    countSpecial += 2;
                }
            }

            if(countProcessor == 0){
                return false;
            }
            else{
                if((countInput > 0 && countOutput > 0)|| countSpecial > 0){
                    return true;
                }
                else{
                    return false;
                }
            }
        }
    }

    addComponent(component: Component, type: string){
        this._components.push(component);
        this.typeComponents.push(type)
        console.log(this._components)
    }

    removeComponent(component: Component){
        console.log(component);
        let index = -1;
        for(let i = 0; i<this._components.length ; i++){
            if(this._components[i].name === component.name && this._components[i].brand === component.brand  && this._components[i].price === component.price){
                index = i;
                break;
            }
        }
        if(index >= 0){
            this._components.splice(index, 1);
            this.typeComponents.splice(index,1);
        }
        console.log(this._components);
    }

    get components(): Component[]{
        return this._components;
    }

    set components(components: Component[]){
        this._components = components;
    }

}