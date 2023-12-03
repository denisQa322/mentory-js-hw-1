
console.group("Задача 1");

let myName = "Denis";

console.log(myName);
console.groupEnd();


console.group("Задача 2");

let num1 = 10;
let num2 = 5;

console.log("Сумма:", num1 + num2);
console.log("Вычитание:", num1 - num2);
console.log("Частное:", num1 / num2);
console.log("Произведение:", num1 * num2);
console.groupEnd();


console.group("Задача 3");

let age = 24;

console.log(`Мой возвраст ${age} года.`);
console.groupEnd();

console.group("Задача 4");

let isAdmin = true;

console.log(`Является ли пользователь администратором: ${isAdmin}`);
console.groupEnd();


console.group("Задача 5");

let x = 5;

console.log(x + 1);
console.groupEnd();


console.group("Задача 6");

let y = "10";
let z = parseInt(y);

console.log(z);
console.groupEnd();


console.group("Задача 7");

let text = "Hello World!";

console.log(text[0]);
console.groupEnd();


console.group("Задача 8");

let arr = [1, 2, 3];

console.log(arr[1]);
console.groupEnd();


console.group("Задача 9");

let person = {
    personName: 'Denis',
    age: '24',
};

console.log(`Имя: ${person.personName}, Возраст: ${person.age}`);
console.groupEnd();



console.group("Задача 10");

function sum(a, b){
    return a + b
};

console.log(sum(15,25));
console.groupEnd();