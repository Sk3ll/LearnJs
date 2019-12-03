"use strict";
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


/*
function sumSliceArray(arr, first, second){
    
    if (typeof first == "number" && !isNaN(first) && first<=arr.length && typeof second == "number" && !isNaN(second) && second<=arr.length) {
        return arr [first - 1] + arr [second - 1];
    }
    else throw new Error ("введите числа");
}

try {    
console.log(sumSliceArray([1,2,3,4],3,3))
}
catch(error) {
console.log(error);
}


/*
    Задание №5.
Напишите функцию matrixToArray(matrix), которая принимает двумерный
массив (матрицу) matrix, разворачивает двумерный массив в одномерный и
возвращает его. Данное задание необходимо решить при помощи
аккумулирующих методов.
*/
/*
function matrixToArray(matrix) {
    return matrix.reduce(function(acc, currentValue){
        return  acc.concat(currentValue);
    });

    }
    var arr = [[1, 2], [3, 4, 5], [6, 7, 8], [9]];
    var arr = matrixToArray(arr);
    console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


/*
    Задание №1.
Дана строка, которая содержит имена пользователей, разделенные запятой –
&quot;Login1,LOgin2,login3,loGin4&quot;. Разбейте эту строку на массив строк (чтобы отдельно
были логины), и приведите их все в нижний регистр.
*/
/*
console.log("Login1,LOgin2,login3,loGin4".toLowerCase().split(","));


/*
    Задание №2.
Напишите программу, которая запрашивает у пользователя строки (prompt()).
Ввод строк должен быть завершен, когда пользователь вводит строку end. Далее
программа проверяет, есть ли в строке цифры, если да, добавляет в начало строки
текст &quot;Numbers: &quot;, если нет – &quot;No numbers: &quot; и выводит результат в виде следующей
таблицы:
*/

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
    //var num = parseInt(message.replace(/\D+/g,""));
    for (var i = 0; i < message.length;i++){
        var num = message.charAt(i)
       // console.log(num)

    if (typeof num == "number" && !isNaN(num)){
        console.log("Number: " + message);
    }
    else if(typeof message == "string") {
        console.log("No numbers: " + message);
    }
}
}