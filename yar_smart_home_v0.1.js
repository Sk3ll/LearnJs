"use strict";


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

function Dryer(name) {
    Devices.call(this, name)
    this._temperature = 0;
    this._isOpenDoor = false;
}
Dryer.prototype = Object.create(Devices.prototype)
Dryer.prototype.constructor = Dryer;

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
    Devices.call(this, name)
    this._channels = [];
    this._currentChanel = 0;
    this._volume = 0;
}

TV.prototype = Object.create(Devices.prototype);
TV.prototype.constructor = TV;

TV.prototype.getChannels = function (){
    return this._channels;
}
TV.prototype.pushChannel = function (chnl){
    if (typeof chnl == "string"){
        this._channels.push(chnl); 
    } else console.log("Type string pls")
}

TV.prototype.getCurrentChannel = function (){
    return this._channels[this._currentChanel];
}
TV.prototype.setChannel = function(value){
    if(typeof value == "number" && !isNaN(value)){
        this._currentChanel = value;
    } else console.log("Type nubmers");
}
TV.prototype.nextChannel = function(){
    this._currentChanel++;
}
TV.prototype.previousChannel = function(){
    if (this._currentChanel != 0){
    this._currentChanel--;
    } else this._currentChanel = 0
}

TV.prototype.getVolume = function(){
    return this._volume;
}
TV.prototype.increaseVolume = function (){
    if(this._volume < 100){
        this._volume ++;
    } else this._volume = 100;
}
TV.prototype.decreaseVolume = function (){
    if(this._volume != 0){
        this._volume --;
    } else this._volume = 0;
}
TV.prototype.silentMode = function (){
    this._volume = 0;
}


var tv = new TV();



