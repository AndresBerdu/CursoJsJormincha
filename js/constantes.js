export const pi = Math.PI;

export let usuario = "Andres";
const password = "query";
//export default password

const hello = () => console.log("Hola");

export default function saludar () {
    console.log("Hola módulos + ES6");
}

export class Saludar {
    constructor() {
        console.log("Hola módulos + ES6");
    }
}