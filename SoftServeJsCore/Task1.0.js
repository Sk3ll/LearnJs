"use strict";


/*
    Задание №1.
    Есть следующий код:
    function createArrayIterator(array) {
    // Ваш код
    }
    var arr = [5, 3, 7];
    var itr = createArrayIterator(arr);
    console.log(itr()); // 5
    console.log(itr()); // 3
    console.log(itr()); // 7
    console.log(itr()); // undefined
    Допишите код, чтобы функция createArrayIterator() возвращала функцию-
    перечислитель для массива, который задается через параметр array.
*/

////////Числа фибоначи////////////
/*
function createArrayIterator() {
    var a = 1; 
    var b = 1;
    return function () {
       var c = a + b;
       a = b;
       b = c;
        return b;
    }
}
var itr = createArrayIterator();
console.log(itr()); // 5
console.log(itr()); // 3
console.log(itr()); // 7
console.log(itr());
console.log(itr()); // undefined*/

/*
    Задание №2.
    Напишите код для "безопасного" вычисления периметра и площади
    прямоугольника.
    Сторонами прямоугольника может быть только число (тип данных Number,
    значения других типов данных нельзя устанавливать), значение которого, строго
    больше 0.
*/
/*
var p;
var a; // fistSide
var b; // secondSide
var s; 
function perimetr(a, b){
    a = Number(a);
    b = Number(b);
    if (!(typeof Number)) {
        console.log("Напишите число");
    }
    else if (a < 0 && b < 0){
        console.log("Число должно быть больше 0")
    }
    return function (){
        p = (a+b)*2;
        s = a*b;
        return p;
    }();
}
console.log(perimetr(2, 3));

/*
        Задание №4.
    Создайте объект, который описывает MP3 плеер.
*/
/*
var mp3 = {
    playPause: 1, //1 play, 0 pause
    playlist: ["Linkin Park","Бутырка","Oxxxymiron","50 cent"],
    currentSong: 0,
    nextSong: function() {
            mp3.currentSong++;
        },
    previousSong: function(){
            mp3.currentSong--;
        },
    currentVolume: 1,
    plusVolume: function(){
            mp3.currentVolume++;
        },
    minusVolume: function(){
            mp3.currentVolume--;
        },
};

if (mp3.playPause == 1) {
    console.log("Play");
    
/// Сюда писать действия вместо кнопок////////  
    mp3.nextSong();
    mp3.nextSong();
    //mp3.nextSong();
    //mp3.nextSong();
    //mp3.nextSong();
    mp3.plusVolume();
    
//////////////////////////////////////////////
    if (mp3.currentSong > 3) {
        console.log("ERROR");
    }
    else{
        console.log("Current Song:" + mp3.playlist[mp3.currentSong]);
        console.log("Volume:" + mp3.currentVolume);
    }
}
else {
    console.log("Pause");
}

/*
        Задание №5. Вложенные. Массивы в объектах
    Опишите следующую информацию в виде иерархии массивов и объектов:
    Name Age  Experience        Languages
    John 28       1      Java, JavaScript, SQL
    Bill 30       5      HTML, CSS, JavaScript
    Mike 32       4      Python,
*/

/*
var bd = {
    people: [
    {
        name: "John",
        age: 28,
        experience: 1,
        languages: ["Java", "JavaScript", "SQL"],
    },{
        name: "Bill",
        age: 30,
        experience: 5,
        languages: ["HTML", "CSS", "JavaScript"],
    },{
        name: "Mike",
        age: 30,
        experience: 5,
        languages: ["Python"],
    }
]};

//console.log(bd.people[0].languages[1]);
*/

/*
Задание №1.
Напишите функцию mul(), которая принимает любое количество параметров
разного типа и возвращает произведение параметров типа Number.
Если параметры типа Number отсутствуют, возвращает число 0.
*/
/*
function mul() {
    // Ваш код
    var tmp = 1;
var count = 0;
    for (var i = 0; i < arguments.length; i++){
        if (typeof(arguments[i])==="number"){
            tmp *= arguments[i];
            count++;
        }

    }

if (count == 0) return 0;

return tmp;
    }
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

/*
    Задание №2. Явное указание this
Есть следующий код:
var country = {
name: &quot;Украина&quot;,
language: &quot;украинский&quot;,
capital: {
name: &quot;Киев&quot;,
population: 2907817,
area: 847.66
}
};
function format(beginMsg, endMsg) {
console.log(beginMsg + this.name + endMsg);
}
format.call(/* Ваш код /); // &quot;&lt;Украина&gt;&quot;
format.apply(/* Ваш код /); // &quot;[Украина]&quot;
format.call(/* Ваш код /); // &quot;&quot;Киев&quot;&quot;
format.apply(/* Ваш код /); // &quot;Киев&quot;
Допишите код, чтобы в консоли браузера появились строки, которые написаны
в комментариях.
*/
/*
var country = {
    name: "Украина",
    language: "украинский",
    capital: {
        name: "Киев",
        population: 2907817,
        area: 847.66
        }
    };

    function format(beginMsg, endMsg) {
    console.log(beginMsg + this.name + endMsg);
}
  
    format.call(country, "<", ">"); // <Украина>;
    format.apply(country, ["[", "]"]); // [Украина]
    format.call(country.capital,'"','"'); // "Киев"
    format.apply(country.capital, ["",""]); // Киев

    /*
    Задание №1.
Есть следующий код:
var user = {
name: &quot;Tom&quot;
};
function format(beginMsg, endMsg) {
console.log(beginMsg + this.name + endMsg);
}
var tomFormat = // Ваш код
tomFormat(&quot;&lt;&lt;&lt;&quot;, &quot;&gt;&gt;&gt;&quot;); // &quot;&lt;&lt;&lt;Tom&gt;&gt;&gt;&quot;
Привяжите функцию format() к объекту user.
Реализуйте 2 версии текущего задания, используя:
1. Анонимную функцию обвертку;
2. Метод bind().
    */

var user = {
    name: "Tom"
};

function format(beginMsg, endMsg) {
    console.log(beginMsg + this.name + endMsg);
}

var tomFormat = function(beginMsg,endMsg) { format.call(user, beginMsg, endMsg) };

//var tomFormat = format.bind(user);
tomFormat("<<<", ">>>"); // "<<<Tom>>>"

/*
    Задание №2.
Есть следующий код:
function mul(a, b) {
return a * b;
}
var doubleMul = // Ваш код
var qudraMul = // Ваш код
console.log(doubleMul(5)); // 10
console.log(qudraMul(5)); // 20
Используя функцию mul() и карринг создайте две функции doubleMul() и
qadraMul(), которые умножают числа на 2 и на 4 соответственно.
*/
/*
function mul(a, b) {
    return a * b;
    }
    var doubleMul = mul.bind(null, 2); // Ваш код
    var qudraMul = mul.bind(null, 4);
    console.log(doubleMul(5)); // 10
    console.log(qudraMul(5)); // 20

/*
    Задание №3.
Напишите аналог метода bind():
function bind(func, context) {
// Ваш код
}
function func() {
console.log(this.name + &quot; - &quot;+ this.age);
}
var user = {
name: &quot;Tom&quot;,
age: 20
};
var f = bind(func, user);
f(); // &quot;Tom – 20&quot;
*/
/*
function bind(func, context) {
    // Ваш код
    return function() {func.call(context)};
}
function func() {
    console.log(this.name + " - " + this.age);
}
var user = {
    name: "Tom",
    age: 20
};
    
var f = bind(func, user);
f(); // Tom – 20
*/


