"use strict";

/*
        Задание №1.
    Создайте тип объектов MP3 при помощи прототипов.
 */
/*
function Player(name) {
    this.name = name;
}

Player.prototype.switcher = function (playPause) {
    this.playPause = playPause;
    if (this.playPause == 0){
        console.log("switch off " + this.name);
    }
    else if (this.playPause == 1) {
        console.log("switch on " + this.name);
    }
}

var iPod = new Player ("iPod");

iPod.switcher(0);

/*
        Задание №1.
    Создайте тип объектов Аудиоплеер, в котором есть приватное свойство
    громкость звука, для доступа к этому свойству реализуйте:
    1. Методы геттер и сеттер;
    2. Единый метод геттер-сеттер.
    Громкость может быть в диапазоне от 0 до 100.
*/
/*
function Player(volume) {
    this.__volume = volume;
    if (this.__volumeValid(volume)) {
        this.__volume = volume;
        }
}

Player.prototype.getVolume = function () {
    console.log(this.__volume);
};

Player.prototype.setVolume = function() {
    if (this.__volumeValid(volume)) {
        this.__volume = volume;
        }
};

Player.prototype.displayInfo = function () {
    if (this.__volume > 0 && this.__volume <= 100) {
        console.log("Громкость: " + this.__volume);
    }
    else {
        console.log("Введите другое значеине. Диапазон звука от 1 до 100")
    }
};

Player.prototype.__volumeValid = function (volume) {
    if (volume > 0 && volume <= 100) {
        return true;
    } else {
        return false;
        }
    };
Player.prototype.volume = function (volume) {
        if (volume === undefined) { 
            return this.__volume; 
        } else {
            if (this.__volumeValid(volume)) {
                this.__volume = volume;
            }
        }
};
var volumePlayer = new Player(-2);
volumePlayer.displayInfo ();

/*
    Задание №2.
Создайте тип объектов Сумматор, со следующим функционалом:
1. Приватное свойство __firstNumber;
2. Приватное свойство __secondNumber;
3. Публичное свойство result;
4. Приватный метод __calc(), который записывает в result сумму свойств
__firstNumber и __secondNumber;
5. Единые методы геттер-сеттер для свойств __firstNumber и __secondNumber,
во время работы методов как сеттер, должна происходить валидация (устанавливать
можно только значения типа Number), если валидация происходит успешно, должен
вызываться метод __calc(). Получается, что при успешной установке либо
__firstNumber либо __secondNumber, происходит перерасчет result.
*/

function Sum() {
    this. __firstNumber = 0;
    this.__secondNumber = 0;
    this.result = 0;
}
Sum.prototype.__calc = function (__firstNumber, __secondNumber) {
    this.result = __firstNumber + __secondNumber;
    console.log(this.result)
}

Sum.prototype.firstNumber = function (value) {
    if (this.__firstNumber === undefined) {
        return this.__firstNumber;
        
    } else {
        this.__firstNumber = value;
    }
}

Sum.prototype.secondNumber = function(value) {
    if (this.__secondNumber === undefined) {
        return this.__secondNumber;
    }else {
        this.__secondNumber = value;
    }
}

Sum.prototype.__isValidNumber = function (value) {
    if (typeof value == "Number" && !isNaN(value)) {
        return true;
    }
    else {
        return false;
    }
}

var c = new Sum ();
c.__calc(3,4);