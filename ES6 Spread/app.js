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
// học lại :))

// rest là lấy ra những phần tử còn lại 
//  example const logger = (a, ...params) => {...}
// logger(1, 2, 3, 4)
// rest sẽ lấy phần tử còn lại sau a => 2, 3, 4
// nếu const logger = (...params) => {...} thì chỉ lấy params vì chỉ có mỗi params
const logger = (a, ...params) => {
    console.log(params);
}

logger(1, 2, 3, 4)