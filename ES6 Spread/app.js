// var array1 = ['Javascript', 'ReactJS', 'Redux'];

// var array2 = ['HTML', 'CSS', 'SCSS'];

// var array3 = [...array1, ...array2];

// console.log(array3);

// var object1 = {
//     name: 'ReactJS'
// };

// var object2 = {
//     price: 1000
// };

// var object3 = {
//     ...object1, 
//     ...object2
// };

// console.log(object3);

// var defaultConfig = {
//     api: 'http://domain-courses-page',
//     apiVersion: 'v1',
//     other: 'other'
// };

// var exerciseConfig = {
//     ...defaultConfig,
//     api: 'http://domain-exercise-page'
// }

// console.log(exerciseConfig);

// var array = ['ReactJS', 'Javascript', 'Redux', 'NodeJS'];

// function logger(...rest) { // ... is Rest
//     for (var i = 0; i < rest.length; i++) {
//         console.log(rest[i]);
//     }
// }

// logger(...array); // ... is Spread

// ----------------------------------
// học lại REST :))

// Rest (...) là toán tử lấy ra những phần tử còn lại của Array hoặc Object
//  example const logger = (a, ...params) => {...}
// logger(1, 2, 3, 4)
// rest sẽ lấy phần tử còn lại sau a => 2, 3, 4
// nếu const logger = (...params) => {...} thì chỉ lấy params vì chỉ có mỗi params
// const logger = (a, ...params) => {
//     console.log(params);
// }

// logger(1, 2, 3, 4)

// dùng destructuring lấy ra name và price trong Object logger => const logger = ({ name, price }) => {}
// dùng rest (...params) để lấy ra những phần tử còn lại của Object 
// const logger = ({ name, price, ...params }) => {
//     console.log(name);
//     console.log(price);
//     console.log(params);
// }

// logger({
//     name: 'JS',
//     price: 1000,
//     description: 'Description content',
//     image: 'img-1'
// });

// sử dụng destructuring và rest trong Array
// const logger = ([a, b, ...params]) => {
//     console.log(a);
//     console.log(b);
//     console.log(params);
// }

// logger([2, 6, 8, 10, 12, 14, 4]);

// ----------------------------------
// học lại SPREAD
// Spread (...) là toán tử dùng để bỏ đi dấu [] trong Array hoặc {} trong Object
// ARRAY
// const arr1 = ['JS', 'TS', 'Java'];
// const arr2 = ['ReactJS', 'Angular'];
// const arr3 = [...arr2, ...arr1];

// console.log(arr3);

// OBJECT
// const obj1 = { name: 'JS' };
// const obj2 = { price: 1000 };
// const obj3 = {...obj1, ...obj2};

// console.log(obj3);

// const defaultConfig = {
//     api: 'http://localhost:5500',
//     apiVersion: 'v1',
//     other: 'other'
// };

// const exerciseConfig = {
//     ...defaultConfig,
//     api: 'http://localhost:5500/exercise'
// };

// console.log(exerciseConfig);

const arr = ['JS', 'TS', 'Java', 'ReactJS', 'Angular'];

// dùng rest (...params) để lấy hết phần tử trong arr
const logger = (...params) => {
    for (var i = 0; i < params.length; i++) {
        console.log(params[i]);
    }
};

logger(...arr);
