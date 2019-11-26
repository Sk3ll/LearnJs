/*
1. класс Dryer
    состояние
        _name: String
        _state: Boolean
        _temperature: Number
        _isOpenDoor: Bolean
    поведение
        getname(): String
        getState(): Boolean
        on(): void  //
        off(): void
      
       getStateDoor(): Bolean
        openDoor(): void
        closeDoor(): void
       
        getTemperature(): Number 
        increseTemperature() : void
        decreaseTemperature() : void
*/

"use strict";

function Dryer() {
    this._name = "Dryer machine";
    this._state = false; 
    this._temperature = 0;
    this._isOpenDoor = false;
}

Dryer.prototype.genName = function(){
    return this._name;
}
Dryer.prototype.getState = function(){
    return this._state;
}
Dryer.prototype.on = function(){
    if (this._isOpenDoor == true){
        throw new Error("Please close door")
    } else if (this._isOpenDoor == false){
        this._state = true;
    }
}
Dryer.prototype.off = function(){
    if(this._temperature > 1){
        throw new Error("Please decrease temperature to 0")
    } else if (this._temperature == 0){
        this._state = false;
    }
}


Dryer.prototype.getStateDoor = function (){
    return this._isOpenDoor;
}
Dryer.prototype.openDoor = function(){
    if (this._state == true){
        throw new Error("Machine work")
    } else if(this._state == false){
        this._isOpenDoor = true;
    }
}
Dryer.prototype.closeDoor = function(){
    this._isOpenDoor = false;
}


Dryer.prototype.getTemperature = function(){
    if (this._isOpenDoor == true && this._state == false) {
        throw new Error ("Machine work")
    } else {
        return this._temperature;
    }
}
Dryer.prototype.increaseTemperature = function(){
    if (this._isOpenDoor == true || this._state == false){
        throw new Error("Please close door and switch on machine");
    } else if(this._isOpenDoor == false && this._state == true){
        this._temperature ++;
    }
}
Dryer.prototype.decreaseTemperature = function(){
    if (this._isOpenDoor == true && this._state == false && this._temperature == 0){
        throw new Error("Please close door and switch on machine");
    } else if(this._isOpenDoor == false && this._state == true && this._temperature != 0){
        this._temperature --;
    }
}

let d = new Dryer();