class Dispositivo_Entrada {
    constructor (dispositivo){
        this._tipoEntrada=dispositivo.tipoEntrada;
        this._marca=dispositivo.marca;

    }
}

export class Mouse extends Dispositivo_Entrada{
    constructor(mouse){
        super(mouse);
        this._idMouse=mouse.idMouse;
    }
    greet(){
        console.log("soy mouse")
    }
}

export class Keyboard extends Dispositivo_Entrada{

    constructor(keyboard){
        super(keyboard);
        this._idKeyboard=keyboard.idKeyboard;
    }
    greet(){
        console.log("soy keyboard")
    }
}

//export const Computer={
 //   constructor(computer){
 //       this._idComputer=computer.idComputer;
  //      this._nombre=computer.nombre;
  //      this._componentes=[];
  //  }

//}
export class Monitor {
    constructor (monitor){
        this._idMonitor=monitor.idMonitor;
        this._marca=monitor.marca;
        this._tamanio=monitor.tamanio;

    }
}

export class Computer {
    constructor (computer){
        this._idComputer=computer.idComputer;
        this._nombre=computer.nombre;
        this._componente=[];

    }
}