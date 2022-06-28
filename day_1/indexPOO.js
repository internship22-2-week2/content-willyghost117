
import {Mouse,Keyboard, Monitor,Computer} from './ClassObjet.js';
let mouse1 = {
    tipoEntrada: 'Entrada',
    marca: 'HP',
    idMouse: 1,  
    }

let keyboard1 = {
      tipoEntrada: 'Entrada',
      marca: 'Dell',
      idKeyboard: 1,  
      }
let monitor1 = {
        idMonitor: 1,
        marca: 'Dell',
        tamanio: "Grande",  
        }
let computer1 = {
          idComputer: 1,
          nombre: 'Dell',
            
          }


const mousePOO=new Mouse(mouse1);
const keyboardPOO=new Keyboard(keyboard1);
const monitorPOO=new Monitor(monitor1);
const computerPOO=new Computer(1,"Dell",mouse1);
console.log(mousePOO);
console.log(keyboardPOO);
console.log(monitorPOO);
console.log(computerPOO);

