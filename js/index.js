// Мое собеседование с одной из компаний. Решение задач с собеседования:


// Задача 1. В функцию передается строка, в которой находятся круглые скобки. Необходимо реализовать функцию, чтобы она возвращала true если скобки парные(откр. и закр.), а также порядок скобок верно соблюден.

// function validParentheses(str) {
//     return /^\(\)$/.test(str)
// }
// console.log(validParentheses('()')); // true
// console.log(validParentheses('())')); //false
// console.log(validParentheses('())(')); //false


// Задача 2. Создать функцию encode, которая принимает строку с английскими буквами, и возвращает строку, где гласные буквы заменены на цифры:
// a --> 1
// e --> 2
// i --> 3
// o --> 4
// u --> 5
// и функцию decode, которая принимает зашифрованную строку и возвращает восстановленную.

// const array = ['a', 'e', 'i', 'o', 'u'];

// function encode(str) {
//     let arr = str.split('');
//     return arr.map(function(elem) {
//         for (let i = 0; i < array.length; i++) {
//             if (array[i] == elem) {
//                 elem = i + 1
//             }
//         }
//         return elem
//     }).join('');
// }

// function decode(str) {
//     let arr = str.split('');
//     return arr.map(function(elem) {
//         for (let i = 0; i < array.length; i++) {
//             if (parseInt(elem) === i + 1) {
//                 elem = array[i];
//             }
//         }
//         return elem;
//     }).join('')
// }

// console.log(encode('hello'));           // h2ll4
// console.log(decode(encode('hello')));   // hello


// Задача 3. Даны инпуты с числами. Произвольное количетсво, пусть три. 
// В первый инпут запишите 1, через секунду во второй инпут запишите 2, еще через секунду в третий инпут 3, 
// потом через секунду в первый инпут запишите 4, во второй 5 и так далее до бесконечности.

// const inputs = document.querySelectorAll('input');
// const btn = document.querySelector('button');
// let num = 0;
// let i = -1;
// btn.addEventListener('click', start);

// function start() {
//     window.timerId = setInterval(timer, 1000);
// }

// function timer() {
//     num++;
//     i < inputs.length-1 ? i++ : i = 0;
//     inputs[i].value = num;
// }


// Задача 4. Необходимо реализовать функцию func в функиональном стиле. Она принимает массив, а возвращает максимальное количество одинаковых элементов.

function func(arr) {
    return Math.max(...Object.values(arr.reduce((acc, el) => {
        acc[el] = acc[el] ? acc[el] + 1 : 1;
        return acc;
    }, {})));
}

console.log(func([1, 0, 1, 3, 0, 0, 9]));   // 3
console.log(func([2, 13, 5, 9, 7]));     // 1