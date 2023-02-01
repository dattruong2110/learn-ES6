// 1. Var / Let, Const: Scope(Phạm vi truy cập), Hosting(Đưa lên trên đầu)
// 2. Const / Var, Let: Assignment(Gán lại giá trị cho biến khi sử dụng các keyword này)

// Code block: if else, loop, {}, ...

// if (true) {
//     const course = 'Javascript basic!';
    
//     {
//         {
//             const course = 'ES6';
//             console.log(course);
//         }
//     }
// }

// const a = {
//     name: 'Javascript'
// };
// a.name = 'ReactJS'; // ReactJS
// a = 'ReactJS;' // False
// const chỉ có thể gán lại thuộc tính của biến chứ không gán lại biến.
// console.log(a.name);




// Var
// for(var i = 0; i < 5; i++) {
//     console.log(i);
// }
// console.log(i);

// Let
// for(let i = 0; i < 5; i++) {
//     console.log(i);
// }
// console.log(i); false

// Const
// const company = { name: 'HITACHI', age: '20'};
// console.log(company);
// company.age = '22'; change age value
// console.log(company.age); 22

// Arrow function
// const multiply = (x, y) => x * y;
// console.log(multiply(prompt('Enter x: '), prompt('Enter y: ')));

// for/of with array
// var numbers = ['1', '2', '3', '4', '5'];
// for(var number of numbers) {
//     console.log(number);
// }

// for/of with String
// var myString = 'Dat Truong';
// for(character of myString) {
//     console.log(character);
// }