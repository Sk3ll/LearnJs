"use strict";

"use strict";


class Devices {
    constructor (name){ 
        this._name = name;
        this._state = false;
    }

    get name () {
        return this._name;
    }
    get state (){
        return this._state;
    }
    on (){
        this._state = true;
    }
    off () {
        this._state = false;
    }
}

class Dryer extends Devices {
    constructor(name) {
        super(name)
        this._temperature = 0;
        this._isOpenDoor = false;
    }

    on (){
        if (this._isOpenDoor == false){
            this._state = true; 
        }
    }
    off (){
            this._state = false;
            this._temperature = 0;
    }


    get stateDoor (){
        return this._isOpenDoor;
    }
    openDoor (){
            this._isOpenDoor = true;
            this._state = false;
    }
    closeDoor (){
        this._isOpenDoor = false;
    }


    get temperature (){
            return this._temperature;
    }
    increaseTemperature (){
        if (this._temperature < 30){
            this._temperature ++;
        } 
    }
    decreaseTemperature (){
        if (this._temperature > 0){
            this._temperature --;
        } 
    }
}

let d = new Dryer("Dryer machine");


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

class TV extends Devices {
    constructor(name){
        super(name);
        this._channels = [];
        this._currentChanel = 0;
        this._volume = 0;
}

    get channels (){
        return this._channels;
    }
    pushChannel (chnl){
        if (typeof chnl == "string"){
            this._channels.push(chnl); 
        } else {
            console.log("Type string pls");
        }
    }

    get currentChannel (){
        return this._channels[this._currentChanel];
    }
    set channel (value){
        if(typeof value == "number" && !isNaN(value) && value < this._channels.length){
            this._currentChanel = value;
        } else {
            console.log("Type nubmers");
        }
    }
    nextChannel (){
        if (this._currentChanel < this._channels.length -1){
            this._currentChanel++;
        }
    }
    previousChannel (){
        if (this._currentChanel > 0){
        this._currentChanel--;
        } 
    }

    get volume (){
        return this._volume;
    }
    increaseVolume (){
        if(this._volume < 100){
            this._volume ++;
        } 
    }
    decreaseVolume (){
        if(this._volume > 0){
            this._volume --;
        } 
    }
    silentMode (){
        this._volume = 0;
    }
}

let tv = new TV("tv");



/*
class SmartHouse
    состояние
        _name: String
        _devices: []
    поведение
        getName(): String
        addDevices(device): void
        getDevices(): [Object]
        getDeviceByName(name): Object
        deleteDeviceByName(name): void
        offAllDevice(): void
*/

class SmartHouse{
    constructor(name){
        this._name = name;
        this._devices = [];
}

    get name () {
        return this._name;
    }

    addDevices (object){
        this._devices.push(object)
    }
    get devices (){
        return this._devices;
    }
    getDeviceByName (name){
        return this._devices.filter( function (obj){
            return obj.name == name;
        })[0];
        
    }
    deleteDeviceByName (name) {
        this._devices =  this._devices.filter( function (obj){
            return obj.name != name;
        })
    }
    offAllDevice () {
        this._devices.forEach(function( obj){ obj.off() } );
    }
}

let sh = new SmartHouse("Name1");
sh.addDevices(new Dryer("Dryer1"));
sh.addDevices(new Dryer("Dryer2"));
sh.addDevices(new TV("tv1"));
console.log(sh.devices);
console.log(sh.getDeviceByName("tv1"));
sh.deleteDeviceByName("tv1");
sh.getDeviceByName("Dryer1").on();
console.log(sh.getDeviceByName("Dryer1"));
console.log(sh.devices);
sh.offAllDevice();
