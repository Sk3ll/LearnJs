"use strict";

/*
        Задание №1.
    Создайте тип объектов MP3 при помощи прототипов.
 */
/*
function Player(name) {
    this.name = name;
    this.playPause = true;
}

Player.prototype.switcher = function (playPause) {
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
function Player() {
    this.__volume ;
}

Player.prototype.getVolume = function () {
    console.log(this.__volume);
};

Player.prototype.setVolume = function(value) {
    if (typeof value == "number" && !isNaN(value)){
        this.__volume = value;
    }
    else console.log("Введите цифры");
};
/////// Единый геттер-сеттер
Player.prototype.volume = function (volume) {
        if (volume === undefined) { 
            return this.__volume; 
        } else 
            this.__volume = volume;
        }

Player.prototype.displayInfo = function () {
    if (this.__volume > 0 && this.__volume <= 100) {
        console.log("Громкость: " + this.__volume);
    }
    else {
        console.log("Введите другое значеине. Диапазон звука от 1 до 100")
    }
};

var p = new Player();

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
/*
function Sum() {
    this. __firstNumber = 0;
    this.__secondNumber = 0;
    this.result = 0;
}
Sum.prototype.__calc = function () {
    this.result = this. __firstNumber + this.__secondNumber;
}

Sum.prototype.firstNumber = function (value) {
    if (this.__firstNumber === undefined) {
        return this.__firstNumber;
        
    } else {
        if(typeof value == "number" && !isNaN(value)) {
            this.__firstNumber = value;
            this.__calc();
        }
        else console.log("введите цифры");
    }
}


Sum.prototype.secondNumber = function(value) {
    if (this.__secondNumber === undefined) {
        return this.__secondNumber;
    }else {
        if(typeof value == "number" && !isNaN(value)) {
            this.__secondNumber = value;
            this.__calc();
        }
        else console.log("введите цифры")
    }
}
var c = new Sum ();


//////////////////НАСЛЕДОВАНИЕ
/*
        Задание №1.
    Создайте тип объектов Геометрическая фигура, определите в нем приватные
    свойства для задания центра фигуры. Для доступа к этим свойствам определите
    необходимые метод/методы.
    На основе этого типа создайте два новых типа (наследники) – Прямоугольник и
    Круг. В этих типах определите особые приватные свойства. (Например, длина
    диагонали для Прямоугольника и радиус для Круга). В каждый из типов добавьте
    публичный метод info(), который выводит на экран всю доступную информацию о
    фигуре.
*/
/*
function GeomFigure (x, y) {
    this.__x = 0;
    this.__y = 0;
}

GeomFigure.prototype.getX = function (x) {
    return this.__x ;
}

GeomFigure.prototype.setX = function (value) {
    if (typeof value == "number" && !isNaN(value)) {
        this.__x = value;
    }
    else {
        console.log("Введите число");
    }
}

GeomFigure.prototype.getY = function (y) {
    return this.__y ;
}

GeomFigure.prototype.setY = function (value) {
    if (typeof value == "number" && !isNaN(value)) {
        this.__y = value;
    }
    else {
        console.log("Введите число");
    }
}

function Rectangle(x, y){
    GeomFigure.call(this, x, y)
    this.__diagonal = 0;
}

Rectangle.prototype = Object.create(GeomFigure.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.getDiagonal = function (diagonal) {
    return this.__diagonal ;
}

Rectangle.prototype.setDiagonal = function (value) {
    if (typeof value == "number" && !isNaN(value)) {
        this.__diagonal = value;
    }
    else {
        console.log("Введите число");
    }
}

Rectangle.prototype.info = function() {
    console.log("Диагональ: " + this.__diagonal);
}

function Circle(x, y) {
    GeomFigure.call(this, x, y)
    this.__radius = 0;
}

Circle.prototype = Object.create(Circle.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.getRadius = function (radius) {
    return this.__radius ;
}

Circle.prototype.setRadius = function (value) {
    if (typeof value == "number" && !isNaN(value)) {
        this.__radius = value;
    }
    else {
        console.log("Введите число");
    }
}

Circle.prototype.info = function() {
    console.log("Диагональ: " + this.__radius);
}


var c = new GeomFigure();
var d = new Rectangle();
var r = new Circle();

/*
        Задание №2. Полиморфизм
    Создайте тип объектов Квадрат, определите защищенное свойство для
    хранения значения стороны. Для доступа к этому свойству определите необходимые
    метод/методы. Также определите публичный метод, который возвращает периметр.
    На основе этого типа создайте тип Куб и переопределите метод получения
    периметра.
    Реализуйте 2 версии текущего задания, используя следующие способы
    переопределения:
    1. Без расширения (полностью переопределить метод родителя);
    2. С расширением (использовать результат метода родителя для дальнейших
    расчетов).
*/
/*
function Squre(side){
    this._side = side;
   
}

Squre.prototype.getSide = function (side) {
    return this._side ;
}

Squre.prototype.setSide = function (value) {
    if (typeof value == "number" && !isNaN(value)) {
        this._side = value;
    }
    else {
        console.log("Введите число");
    }
}

Squre.prototype.perimeter = function(){
    
    return this._side * 4;
}
/////////// 1
function Cube1 (side){
    Squre.call(this, side);
}

Cube1.prototype = Object.create(Squre.prototype);
Cube1.prototype.constructor = Cube1;

Cube1.prototype.perimeter = function() {
    return this._side * 12;
}

/////////2 
function Cube2 (side){
    Squre.call(this, side);
}

Cube2.prototype = Object.create(Squre.prototype);
Cube2.prototype.constructor = Cube2;

Cube2.prototype.perimeter = function() {
    return Squre.prototype.perimeter.call(this) * 3;

}

var s = new Squre(2);
var c1 = new Cube1(2);
var c2 = new Cube2(2);

/*
   Задание №1.
Напишите код для "безопасного" вычисления периметра и площади
прямоугольника в виде модуля.
Сторонами прямоугольника может быть только число (тип данных Number,
значения других типов данных нельзя устанавливать), значение которого, строго
больше 0. 
*/
/*
var paymentP = (function () {
    var firsSide;
    var secondSide;
    function operation() {
        return (firsSide + secondSide) * 2;
    }
    return {
        setFirstSide: function (value) {
            if(typeof value == "number" && !isNaN(value) && value > 0){
                firsSide = value;
            } else {
                console.log("Введите число больше 0");
            }
        },
        setSecondSide: function (value) {
            if(typeof value == "number" && !isNaN(value) && value > 0){
                secondSide = value;
            } else {
                console.log("Введите число больше 0");
            }
        },
        operation: function () {
            return operation ()
        }
    }
    
    }());

var paymentS = (function () {
    var firsSide;
    var secondSide;
    function operation() {
        return firsSide * secondSide;
    }
    return {
        setFirstSide: function (value) {
            if(typeof value == "number" && !isNaN(value) && value > 0){
                firsSide = value;
            } else {
                console.log("Введите число больше 0");
            }
        },
        setSecondSide: function (value) {
            if(typeof value == "number" && !isNaN(value) && value > 0){
                secondSide = value;
            } else {
                console.log("Введите число больше 0");
            }
        },
        operation: function () {
            return operation ()
        }
    }
    
}());



/*
    Задание №1.
Напишите функцию sumSliceArray(arr, first, second), которая принимает массив
arr и два числа (first и second) – порядковые номера элементов массива, которые
необходимо суммировать. Например, если ввели 3 и 5 – суммируются 3-й и 5-й
элементы.
Функция должна генерировать исключения если были введены не числа, и
когда одно из чисел, или оба больше размера массива.
Напишите код, который использует данную функцию, предусмотрите
обработку возможных исключений.
*/

function sumSliceArray(arr, first, second){
var arrIsArr = false;
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "number" && !isNaN(arr[i])) {
        arrIsArr = true;
        }
        else {
        arrIsArr = false;
        break;
        }
    }

    if (arrIsArr && typeof first == "number" && !isNaN(first) && first<=arr.length && typeof second == "number" && !isNaN(second) && second<=arr.length) {
        return arr [first - 1] + arr [second - 1];
    }
    else return "введите числа";
}

//console.log(sumSliceArray([1,2,3,4],5,3))


//try catch

function sumSliceArray(arr, first, second){
    var arrIsArr = false;
        for (var i = 0; i < arr.length; i++) {
            if (typeof arr[i] == "number" && !isNaN(arr[i])) {
            arrIsArr = true;
            }
            else {
            arrIsArr = false;
            break;
            }
        }
    
        if (arrIsArr && typeof first == "number" && !isNaN(first) && first<=arr.length && typeof second == "number" && !isNaN(second) && second<=arr.length) {
            return arr [first - 1] + arr [second - 1];
        }
        else throw new Error ("введите числа");
    }
    
try {    
    console.log(sumSliceArray([1,2,3,4],5,3))
}
catch(error) {
    console.log(error);
}
