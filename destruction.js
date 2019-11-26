"use strict";

//////////////////DESTRUICTION
/*
/////////////1
*/
/*
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z ] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]


/*
//////////////2
*/
/*
let names = {
    first: "Tom",
    second: "Sam",
    third: "Ray",
    fourth: "Bob"
};
let { first: f, third: x, fifth = "Name №5" } = names;
console.log(f); // Tom
console.log(x); // Ray
console.log(fifth); // Name №5

/*
/////////////////3
*/
/*
let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
    };
    let {names:[name1,name2,name3,name4], ages: [age1, age2, age3, age4] } = data;
    console.log(name2); // Tom
    console.log(age2); // 24
    console.log(name4); // Bob
    console.log(age4); // 26

//////////////////////FUNCTION
/*
    Задание №1. 
Напишите функцию mul(), которая принимает любое количество параметров
разного типа и возвращает произведение параметров типа Number.
Если параметры типа Number отсутствуют, возвращает число 0.

Нельзя использовать свойство arguments, но в функцию mul() можно добавить
один параметр.
*/
/*
function mul(...num) {
    var tmp = 1;
    var count = 0;
    for (let i = 0; i < num.length; i++){
        if (typeof(num[i])==="number"){
            tmp *=num[i];
            count++;
        }
    }
    if (count == 0) return 0;
    return tmp;
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0


/*
    Задание №2.
Есть следующий код:

Допишите код используя стрелочные функции, чтобы в консоли браузера
появились строки, которые написаны в комментариях.
*/
/*
let obj = {
    name: "obj",
    print: function () {
        return () => console.log(this.name);
    }
    };
    function multiCaller(func, count) {
        for (let i = 0; i < count; i++) {
            func();
        }
    }
multiCaller(obj.print(), 3); // "obj", 3 раза

/*
Есть следующий код:

Измените код используя стрелочные функции, чтобы в коде не использовались
методы bind().
*/


let server = {
    data: 0,
    convertToString: function (callback) {
callback( //(function () { return this.data + ""; }).bind(this));
        () => {return this.data + ""}) //переписано без bind
    }
};
let client = {
    server: server,
    result: "",
    calc: function (data) {
        this.server.data = data;
        this.server.convertToString(this.notification());
    },
    notification: function () {

    return (//function (callback) {this.result = callback();}).bind(this);
    (callback) => {this.result = callback()} ) //переписано без bind
    }
};
client.calc(123);
console.log(client.result); // &quot;123&quot;
console.log(typeof client.result); // &quot;string&quot;


//////////////STRING


/*
Задание №1.
Есть следующий код:

Допишите код используя интерполяцию, чтобы в консоли браузера появилась
строка, которая написана в комментариях.
*/

let names = {
    first: "Tom",
    second: "Sam",
    third: "Ray"
    };
    console.log( `Первый: -${names.first}-, Второй -
    "${names.second}", Третий => '${names.third}'` ); // Первый: -Tom-, Второй -
    //"Sam", Третий => 'Ray'