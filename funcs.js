"use strict"

function calc(a, b) {
    return (a + b)
}
console.log( calc(4, 6) );



const calcConst = function(a, b) {
    return (a + b)
};
console.log( calcConst(6, 6) );


//стрелочна коротка
const calcArr = (a, b) => a + b;
console.log( calcArr(41, 6) );

// стрелочна довга
const calcArr2 = (a, b) => {
    return (a + b)
}
console.log( calcArr(41, 6) );


// піднесення до квадрата стрелочна
const kv = a => a * a
console.log( kv(4) );
