"use strict";
// Write a function that takes a parameter of type number | string and prints its type.
function tellType(x) {
    console.log(typeof x);
}
tellType('Jocky');
tellType(32);
tellType('Jimi Hendrix');
function multiply(a, b, c) {
    if (c) {
        return a * b * c;
    }
    return a * b;
}
// ------------
function applyTaxes(price, tax = 0.1) {
    return price * (1 + tax);
}
console.log(applyTaxes(100, 0.3));
