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

function Dryer(name) {
    this._name = name;
    this._state = false; 
    this._temperature = 0;
    this._isOpenDoor = false;
}

Dryer.prototype.getName = function(){
    return this._name;
}
Dryer.prototype.getState = function(){
    return this._state;
}
Dryer.prototype.on = function(){
    if (this._isOpenDoor == false){
        this._state = true; 
    }
}
Dryer.prototype.off = function(){
        this._state = false;
        this._temperature = 0;
}


Dryer.prototype.getStateDoor = function (){
    return this._isOpenDoor;
}
Dryer.prototype.openDoor = function(){
        this._isOpenDoor = true;
        this._state = false;
}
Dryer.prototype.closeDoor = function(){
    this._isOpenDoor = false;
}


Dryer.prototype.getTemperature = function(){
        return this._temperature;
}
Dryer.prototype.increaseTemperature = function(){
    if (this._temperature < 30){
        this._temperature ++;
    } 
}
Dryer.prototype.decreaseTemperature = function(){
    if (this._temperature > 0){
        this._temperature --;
    } 
}

let d = new Dryer();


/*
2. класс TV
    состояние
        _name: String
        _state: Boolean
        _channels: arr
        _currentChanel: number
        _volume: number
    поведение
        getname(): String
        getState(): Boolean
        on(): void  
        off(): void
      
        getChannels(): arr
        pushChannels(): void

        getCurrentChanel(): arr[Number]
        setChanel(): Number 
        nextChanel(): void
        previousChanel(): void
       
        getVolume(): Number // 0 - 100
        increseVolume(): void 
        decreaseVolume(): void 
        silentMode(): void
*/

function TV(name) {
    this._name = name;
    this._state = false; 
    this._channels = [];
    this._currentChanel = 0;
    this._volume = 0;
}

TV.prototype.getName = function() {
    return this._name;
}
TV.prototype.getState = function() {
    return this._state;
}
TV.prototype.on = function() {
    this._state = true;
}
TV.prototype.off = function(){
    this._state = false;
}

TV.prototype.getChannels = function (){
    return this._channels;
}
TV.prototype.pushChannel = function (chnl){
    if (typeof chnl == "string"){
        this._channels.push(chnl); 
    } else {
        console.log("Type string pls");
    }
}

TV.prototype.getCurrentChannel = function (){
    return this._channels[this._currentChanel];
}
TV.prototype.setChannel = function(value){
    if(typeof value == "number" && !isNaN(value) && value < this._channels.length){
        this._currentChanel = value;
    } else {
        console.log("Type nubmers");
    }
}
TV.prototype.nextChannel = function(){
    if (this._currentChanel < this._channels.length -1){
        this._currentChanel++;
    }
}
TV.prototype.previousChannel = function(){
    if (this._currentChanel > 0){
    this._currentChanel--;
    } 
}

TV.prototype.getVolume = function(){
    return this._volume;
}
TV.prototype.increaseVolume = function (){
    if(this._volume < 100){
        this._volume ++;
    } 
}
TV.prototype.decreaseVolume = function (){
    if(this._volume > 0){
        this._volume --;
    } 
}
TV.prototype.silentMode = function (){
    this._volume = 0;
}


var tv = new TV();



function Devices (name){
    this._name = name;
    this._state = false;
}
Devices.prototype.getName = function(){
    return this._name;
}
Devices.prototype.getState = function(){
    return this._state;
}
Devices.prototype.on = function(){
    this._state = true;
}
Devices.prototype.off = function(){
    this._state = false;
}
