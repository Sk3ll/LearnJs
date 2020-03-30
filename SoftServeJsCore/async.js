"use strict";

//////////CALLBACK
/*
    Задание №1.
Напишите функцию random(min, max, delay, callback), которая через delay
миллисекунд помещает callback в очередь на выполнение.
Если min меньше max, функция генерирует случайно число в диапазоне от min
до max и передает в callback вторым параметром.
Если min больше max, функция создает объект ошибки и передает в callback
первым параметром.
Для генерации случайных чисел можно использовать метод Math.random().

Через две секунды, на экране должно появится случайной число от 1 до 100.
Через три секунды, на экране должна появится информация об ошибке.
*/
/*
function random(min, max, delay, callback) {
    var data;
    var error;
    if (min < max) {
        data = function () {
            return Math.random() * (max - min) + min;
          }
    } else if (min > max) {
        error = new Error("min > max");
    }
    setTimeout(function () { callback(error, data) }, delay);
    }
    
    random(1000, 100, 3000, function (error, data) {
        if (error) {
            console.log(error);
        } else {
            console.log(data());
        }
    });
    random(1, 100, 2000, function (error, data) {
        if (error) {
            console.log(error);
        } else {
            console.log(data());
        }
    });

//////////////////OBJECTS

/*
    Задание №1.
Создайте тип объектов Прямоугольник со свойствами координат верхнего
левого (x1, y1) и нижнего правого (x2, y2) углов.
Переопределите методы toString() и valueOf(). Метод toString() должен
возвращать строку с описанием текущего состояния. Метод valueOf() должен
возвращать текущий периметр.
 */
/*
var rectangle = {
    angle1: [-2, 3],
    angle2: [2, -3],
    toString: function(){
        return [rectangle.angle1, rectangle.angle2];
    },
    valueOf: function() {
        return (Math.abs(this.angle1[0] - this.angle2[0])+Math.abs(this.angle1[1] - this.angle2[1]))*2;
    }
}

console.log(rectangle.toString());
console.log(rectangle.valueOf());

///////STRING
/*
    Задание №1.
Дана строка, которая содержит имена пользователей, разделенные запятой –
&quot;Login1,LOgin2,login3,loGin4&quot;. Разбейте эту строку на массив строк (чтобы отдельно
были логины), и приведите их все в нижний регистр.
*/
/*
var str = "Login1,LOgin2,login3,loGin4";
var str1 = str.split(",");
for (var i = 0; i < str1.length; i++) {
    console.log(str1[i].toLowerCase());
}

/*
    Задание №2.
Напишите программу, которая запрашивает у пользователя строки (prompt()).
Ввод строк должен быть завершен, когда пользователь вводит строку end. Далее
программа проверяет, есть ли в строке цифры, если да, добавляет в начало строки
текст &quot;Numbers: &quot;, если нет – &quot;No numbers: &quot; и выводит результат в виде следующей
таблицы:
*/
/*
var message;
function isValid(){
    if (message == "end") {
        return false;
    }  else {
        return true
    }
}

while(isValid()){
    message = prompt('введите end, чтоб закончить', "end");
    var num = parseInt(message.replace(/\D+/g,""));
    if (typeof num == "number" && !isNaN(num)){
        console.log("Number: " + message);
    }
    else if(typeof message == "string") {
        console.log("No numbers: " + message);
    }
}



/////////DATE

/*
    Задание №1.
Напишите функцию addTwoDays(date), которая принимает объект типа Date и
добавляет к дате данного объекта два дня.
*/
/*
var date = new Date();
console.log(date)
function addTwoDays(date) {
    var cd = date.getDate();
    date.setDate(cd+2);
    return date;
}
console.log(addTwoDays(date));


/////////////ARRAY

/*
    Задание №1.
1. Создайте массив с элементами &quot;Джаз&quot;, &quot;Блюз&quot;;
2. Добавьте в конец элемент &quot;Рок-н-Ролл&quot;;
3. Замените предпоследний элемент с конца на &quot;Классика&quot;. Код замены должен
быть универсальный, т.е. работать для массивов любой длины;
4. Удалите первый элемент массива и выведите его на экран;
5. Добавьте в начало элементы &quot;Рэп&quot; и &quot;Регги&quot;.
*/
/*
var arr = ["Джаз", "Блюз"];
console.log(arr);

arr.push("Рок-н-Ролл");
console.log(arr);

arr.splice( length - 2, 1, "Классика" );
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift("Рэп", "Регги")
console.log(arr);

/*
    Задание №2.
Расширьте тип объектов Array методом sortDesc(), который сортирует массив
по убыванию.
*/
/*
Array.prototype.sortDesc = function(){
    this.sort();
    this.reverse();
}

var arr = [5, 1, 4, 2, 3];
arr.sortDesc();
console.log(arr); // [5, 4, 3, 2, 1]

/*
Задание №3.
Напишите функцию deleteEvenNumbers(array), которая принимает массив
array, удаляет из массива array четные числа и возвращает его.

*/

/*
function deleteEvenNumbers(array) {
        return array.filter(function (index){ return index%2 == 1 });   
    }
    var arr = [1, 2, 3, 4, 5];
    var arr = deleteEvenNumbers(arr);
    console.log(arr); // [1, 3, 5]

/*
    Задание №4.
Есть следующий код:

var arr = ["Tom", "Sam", "Bob"];
var arrLength = [];
for (var i = 0; i < arr.length; i++) {
    arrLength[i] = "<li>" + arr[i] + "</li>";
}
console.log(arrLength);
Перепишите данный код, заменив цикл for на метод map().
*/
/*
var arr = ["Tom", "Sam", "Bob"];
var arrLength = arr.map(function (value){
    return "<li>" + value + "</li>";
});
console.log(arrLength);


/*
    Задание №5.
Напишите функцию matrixToArray(matrix), которая принимает двумерный
массив (матрицу) matrix, разворачивает двумерный массив в одномерный и
возвращает его. Данное задание необходимо решить при помощи
аккумулирующих методов.
*/

function matrixToArray(matrix) {
    return matrix.reduce(function(acc, currentValue){
        return acc +","+  currentValue;
    });
    }
    var arr = [[1, 2], [3, 4, 5], [6, 7, 8], [9]];
    var arr = matrixToArray(arr);
    console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]