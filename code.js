function sum(x){
    return function(y){
        return x+y;
    }
}

const sum1 = sum(1);
console.log(sum1(2));
console.log(sum(1)(2))

for (var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, 0);
}

//щоб виправити помилку вистачить замінити var на let.
// в цьому випадку при кожні ітерації буде створюватись новий scope, який дана ітерація
// запам*ятає і при поверненні з browser ipa до стеку буде видавати число,яке записалось в scope.
// тобто при кожній ітерації інше

for (let i = 1; i <= 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, 0);
}