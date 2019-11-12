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
    display: {
        currentSong: 1,
        nextSong: function() {
            mp3.display.currentSong++;
        },
        previousSong: function(){
            mp3.display.currentSong--;
        },
    },
    volume: {
        currentVolume: 1,
        plus: function(){
            mp3.volume.currentVolume++;
        },
        minus: function(){
            mp3.volume.currentVolume--;
        },
    },

};

if (mp3.playPause == 1) {
    console.log("Play");

/// Сюда писать действия вместо кнопок////////  
    //mp3.display.nextSong();
    mp3.volume.plus();
    
//////////////////////////////////////////////
   
    if (mp3.volume.currentVolume == 1 && mp3.display.currentSong == 1) {
        console.log("Current Song:" + mp3.display.currentSong);
        console.log("Volume:" + mp3.volume.currentVolume);
    }   
    else {
        console.log("Current Song:" + mp3.display.currentSong);
        console.log("Volume:" + mp3.volume.currentVolume);
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
/* ///////Первый вариант
var bd = {
    name: ["John", "Bill", "Mike"],
    age: ["28", " 30", "32"],
    experience: ["1", "5", "4"],
    languages: [
        ["Java", "JavaScript", "SQL"], 
        ["HTML", "CSS", "JavaScript"], 
        ["Python"]
    ],
};
console.log(bd.languages[2][0]);
*/ 
/*
//////Второй вариант 
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