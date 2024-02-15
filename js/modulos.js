import Saludar, { pi, usuario } from './constantes.js';
import { aritmetica as calculo} from './aritmetica.js';

console.log("Archivos modulosJs");
console.log(pi, usuario);
//console.log(aritmetica.sumar(3, 4));
console.log(calculo.sumar(3, 4));
//saludar();
let saludo = new Saludar();
saludo