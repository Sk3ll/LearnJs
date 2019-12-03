"use strict";

/*
    Задание №1.
1. Создайте новый объект tv;
2. Добавьте свойство currentChannel со значением 1;
3. Добавьте метод nextChannel(), который увеличивает currentChannel на
единицу;
4. Добавьте метод previousChannel(), который уменьшает currentChannel на
единицу;
5. Добавьте метод setChannel(number), который переходит на канал по номеру.
*/

let tv = {
    currentChannel: 1,
    nextChannel() {
        this.currentChannel++;
    },
    previousChannel(){
        this.currentChannel--;
    },
    setChannel(number){
        this.currentChannel = number;
    }
}

/*
    Задание №2.
Создайте объект, который описывает MP3 плеер.
*/

/*
let player = {
    playlist: ["Eminem", "Linkin Park", "50 cent", "Pharaon", "Basta"],
    _current: 0,
    get currentSong(){
       return this.playlist[this._current]
    },
    nextSong(){
        this._current++;
    },
    previousSong(){
        this._current--
    }
}

///////////CLASS

/*
    Задание №1.
Напишите класс, который описывает MP3 плеер.
*/
/*
class Player {
    constructor (name){
        this._name = name;
        this.playlist = ["Eminem", "Linkin Park", "50 cent", "Pharaon", "Basta"];
        this._current = 0; //playlist
        this._volume = 0;
    }
    get Name(){
        return this._name;
    }
    set Name(name){
        this._name = name;
    }


    get currentSong(){
        return this.playlist[this._current];
    }
    nextSong(){
        if(this.playlist[this._current] === undefined) {
            this._current = 0;
        } else {
        this._current++;
        }
    }
    previousSong(){
        if(this.playlist[this._current] === undefined) {
            this._current = 0;
        } else {
        this._current--;
        }
    }


    get volume () {
        return this._volume;
    }
    increaseVolume() {
        if (this._volume < 100){
        this._volume ++;
        }
    }
    decreaseVolume() {
        if (this._volume >= 0){
        this._volume --;
        }
    }
}

let p = new Player();

/*
    Задание №2.
Напишите класс Геометрическая фигура, определите в нем приватные свойства
для задания центра фигуры. Для доступа к этим свойствам определите необходимые
метод/методы.
На основе этого класса создайте два новых (наследники) – Прямоугольник и
Круг. В этих классах определите особые приватные свойства. (Например, длина
диагонали для Прямоугольника и радиус для Круга). В каждый из классов добавьте
публичный метод info(), который выводит на экран всю доступную информацию о
фигуре.
*/

/*
class  GeomFigure  {
    constructor (x, y){
    this.__x = x;
    this.__y = y;
}

    get X () {
        return this.__x ;
    }

    set X (value) {
        if (typeof value == "number" && !isNaN(value)) {
            this.__x = value;
        }
        else {
            console.log("Введите число");
        }
    }

    get Y () {
        return this.__y ;
    }

    set Y (value) {
        if (typeof value == "number" && !isNaN(value)) {
            this.__y = value;
        }
        else {
            console.log("Введите число");
        }
    }
}
class Rectangle extends GeomFigure {
        constructor (x, y, diagonal){
            super(x, y);
            this.__diagonal = diagonal;
    }

    get diagonal () {
        return this.__diagonal ;
    }

    set diagonal (value) {
        if (typeof value == "number" && !isNaN(value)) {
            this.__diagonal = value;
        }
        else {
            console.log("Введите число");
        }
    }

    info () {
        console.log("Диагональ: " + this.__diagonal);
    }
}

class Circle extends GeomFigure {
    constructor (x, y, radius){
        super(x, y);
        this.__radius = radius;
}
    get radius () {
        return this.__radius ;
    }

    set radius (value) {
        if (typeof value == "number" && !isNaN(value)) {
            this.__radius = value;
        }
        else {
            console.log("Введите число");
        }
    }

    info () {
        console.log("Радиус: " + this.__radius);
    }
}

let c = new GeomFigure();
let d = new Rectangle();
let r = new Circle();

/*
    Задание №3.
Напишите класс Квадрат, определите защищенное свойство для хранения
значения стороны. Для доступа к этому свойству определите необходимые
метод/методы. Также определите публичный метод, который возвращает периметр.
На основе этого класса создайте класс Куб и переопределите метод получения
периметра.
Реализуйте 2 версии текущего задания, используя следующие способы
переопределения:
1. Без расширения (полностью переопределить метод родителя);
2. С расширением (использовать результат метода родителя для дальнейших
расчетов).
*/
/*
class Squre{
    constructor(side){
        this._side = side;
   }


    get side () {
        return this._side ;
    }

    set side (value) {
        if (typeof value == "number" && !isNaN(value)) {
            this._side = value;
        }
        else {
            console.log("Введите число");
        }
    }

    perimeter (){
        return this._side * 4;
    }
}
/////////// 1
class Cube1 extends Squre{
    constructor (side){
        super(side);
    }

    perimeter () {
    return this._side * 12;
    }
}
/////////2 
class Cube2 extends Squre{
    constructor(side){
    super(side);
    }

    perimeter () {
        return Squre.prototype.perimeter.call(this) * 3
    }
}
let s = new Squre();
let c1 = new Cube1();
let c2 = new Cube2();

/*
    Задание №4.
Напишите класс Круг и реализуйте следующий функционал:
    [+]1. Определите конструктор, который запрашивает координаты центра круга, его
радиус и инициализирует объект;
    [+]2. Определите метод получения длины окружности для текущего объекта (L = 2
* π * R);
    [+]3. Определите статический метод, который принимает радиус и возвращает
длину окружности для заданного радиуса (L = 2 * π * R);
    [+]4. Определите метод получения объекта-круга, который возвращает копию
текущего объекта;
    [+]5. Определите статический метод, который принимает координаты центра круг,
его радиус и возвращает объект круга с заданными параметрами;
    [+]6. Определите метод проверки попадания точки в круг;
    [+]7. Определите метод преобразования текущего состояния объекта в
символьную строку (toString()).
*/

class Circle {
    constructor(x, y, radius) {
        this._x0 = x;
        this._y0 = y;
        this._radius = radius;
    }

    get x0() {
        return this._x0;
    }
    get y0(){
        return this._y0;
    }
    set x0(value){
        if (typeof value == "number" && !isNaN(value)) {
            this._x0 = value;
        }
        else {
            console.log("Please, insert the number ");
        }
    }
        set y0(value){
        if (typeof value == "number" && !isNaN(value)) {
            this._y0 = value;
        }
        else {
            console.log("Please, insert the number ");
        }
    }
    
    
    get radius (){
        return this._radius
    }
    set radius(value){
        if (typeof value == "number" && !isNaN(value)) {
            this._radius = value;
        }
        else {
            console.log("Please, insert the number ");
        }
    }
    
    
    circumference () {
        return Circle.lenghtCircle(this.radius);
    }

    objCircle() {
        return new Circle(this.x0, this.y0 ,this.radius);
    }

    hitPoint(x, y){
        if(( Math.pow(x - this._x0, 2) + Math.pow(y - this._y0, 2) ) <= Math.pow(this.radius,2)){
            return "hit"
        } else {
            return "missed"
        }
    }
    toStr() {
        return "Center: " + this._x0 + ", "+ this._y0 + ". Radius: "+ this._radius;
    }

    static lenghtCircle(radius) {
        return 2*Math.PI*radius;
    }
    static center(x, y, radius){
        return new Circle (x, y, radius);
    }

}
 
let c = new Circle();

/////////PROMISE


/*
Задание №1.
Напишите функцию createPromiseRandom(min, max, delay), которая возвращает
promise, который:
 переходит в состояние fulfilled, если min меньше max и генерирует
случайное число через delay миллисекунд в диапазоне от min до max;
 переходит в состояние rejected, если min больше max и возвращает
объект ошибки.
Для генерации случайных чисел можно использовать метод Math.random().
Примеры использования функции:

Через две секунды, на экране должно появится случайной число от 1 до 100.
Через три секунды, на экране должна появится информация об ошибке.
*/
/*
function createPromiseRandom(min, max, delay) {
    return new Promise(function (resolve, reject) {
        setTimeout( () => {
            if (min < max) {
               resolve(Math.random() * (max - min) + min);
            } else {
                reject(new Error("min > max"));
            }
        }, delay)
    });
    }
    let p1 = createPromiseRandom(1, 100, 2000);
    p1.then(
        (result)=>console.log(result),
        (result)=>console.log(result)
    );
    let p2 = createPromiseRandom(1000, 100, 3000);
    p2.then(
        (result)=>console.log(result),
        (result)=>console.log(result)
        );


/*
    Задание №2.
Создайте следующую асинхронную цепочку promise:
new Promise(function (resolve, reject) {
// Запрашиваем у пользователя число number при помощи
prompt()
// Если пользователь ввел не число - вызвать reject()
// Если пользователь ввел число - вызвать
resolve(number)
}).catch(function (error) {
return new Promise(function (resolve, reject) {
// Запрашиваем у пользователя число number, пока он
его не введет
// После ввода числа - вызвать resolve(number)
});
}).then(function (result) {
// Вывод number на экран
});
*/
/*
new Promise(function (resolve, reject) {
    let n = Number(prompt("Введите число", ))
    if (typeof n == "number" && !isNaN(n)){
        resolve(n)
    } else {
        reject(new Error("Error"))
    }
    
    }).catch(function (error) {
        return new Promise(function (resolve, reject) {
            let num;  
            function isValid() {
                    if (typeof num == "number" && !isNaN(num)){
                    return false;
                } else return true;
            }
            while (isValid()){
                num = Number(prompt("введите число",))
            }
            resolve(num);
        });
    }).then(function (result) {
    console.log(result)
    });

*/
