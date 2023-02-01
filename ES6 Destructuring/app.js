// Destructuring with Array
// var array = ['Javascript', 'PHP', 'Ruby'];

// var [a, ...rest] = array;
// console.log(a);
// console.log(rest);


// Destructuring with Object
// var course = {
//     name: 'Javascript',
//     price: '1000',
//     image: 'image-address',
//     children: {
//         name: 'ReactJS'
//     },
//     description: 'Default value'
// };

// var { name, ...rest } = course;
// console.log(name);
// console.log(rest);

// Xóa 1 key (name) 
// newObject là Object mới đã xóa đi name
// var { name, ...newObject } = course;
// console.log(newObject);

// Lấy name của children
// đổi name Object cha -> parrentName, đổi name Object con -> childernName
// var { name: parrentName, children: { name: childrenName } } = course;
// console.log(parrentName);
// console.log(childrenName);

// Lấy ra description
// Khi Object có description thì sẽ trả ra 'Default value'. Khi Object không có description sẽ trả ra 'Default description'
// var { name, description = 'Default description' } = course;
// console.log(name);
// console.log(description);

// ... sử dụng với destructuring thì ... là toán tử Rest
// ... sử dụng trong việc định nghĩa tham số (parameters) thì ... là toán tử Rest
// ... trong những trường hợp khác là Spread

// ... with parameters
// function logger(...params) {
//     console.log(params);
// }

// console.log(logger(1, 2, 3, 4, 5, 6, 7));

// var course = {
//     name: 'Javascript',
//     price: 500,
//     image: 'image-address',
//     children: {
//         name: 'ReactJS'
//     },
//     description: 'Description value'
// };

// var { name: parrentName, children: { name: childrenName } } = course;
// console.log(parrentName);
// console.log(childrenName);

// var { name, description = 'default description' } = course; // nếu có description thì sẽ lấy description ('description value') - nếu không có sẽ lấy 'default description'.

// console.log(name);
// console.log(description);

// function logger({ name, price, ...rest }) {
//     console.log(name);
//     console.log(price);
//     console.log(rest);
// }

// logger({
//     name: 'ReactJS',
//     price: 1000,
//     description: 'Description content'
// });

// function logger([ a, b, ...rest ]) {
//     console.log(a);
//     console.log(b);
//     console.log(...rest);
// }

// logger([2, 6 ,8, 10, 12, 14])

// -------------------------------------------
// học lại :))

// Destructuring với ARRAY
// const arr = ['JS', 'PHP', 'TS'];

// const [a, ...params] = arr;
// // destructuring là lấy ra const [a, b, c] = arr nó sẽ lấy ra từng phần tử theo thứ tự trong mảng, có thể bỏ đi bất kì phần tử nào => const [a, , c] or const [a, b, ] = arr
// // rest dùng ... để lấy ra những phần tử còn lại của mảng => const [a, ...params] = arr => ...params sẽ lấy ra những phần tử còn lại ngoại trừ phần tử a

// console.log(a);
// console.log(params);

// Destructuring với OBJECT
const course = {
    name: 'Javascript',
    price: 1000,
    image: 'img-1',
    description: 'Javascript is a programming language that supports many libraries',
    children: {
        name: 'ReactJS'
    }
};

// muốn lấy ra field nào trong Object thì chỉ cần gọi field đó ra.
// nếu muốn xóa 1 key (name) trong Object thì chỉ cần gọi ...rest (newObject) thì ...rest (newObject) là Object mới đã xóa đi những Object đã gọi trước ...rest (name)
// const { name, price, ...newObject } = course;

// console.log(name, price);
// console.log(newObject);
// ---------------------------------------------
// Khi key của phần tử cha trùng tên với key của phần tử con thì sẽ dùng dấu : để đổi tên của phần tử => const { name: parentName, children: { name: childrenName } } = course;
// khi không có phần tử đó (time) mà muốn có 1 giá trị mặc định thì sẽ dùng = '...' => const { name, time = 'time default' } = course;
const { name: parentName, children: { name: childrenName }, time = 'time default' } = course;

console.log(parentName);
console.log(time);
