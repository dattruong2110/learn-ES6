// Ex1
// var btn = document.getElementById("btnChange");
// var head = document.getElementById("heading")

// btn.onclick = function changeHeading() {
//     head.innerHTML = prompt();
//     head.style.color = "red";
// }

// Ex2
// setInterval(function() {
//     var today = new Date();
//     var getDate = today.getDate();
//     var getMonth = today.getMonth();
//     var getYear = today.getFullYear();
//     var getHours = today.getHours();
//     var getMinutes = today.getMinutes();
//     var getSeconds = today.getSeconds();
//     var date = getDate + "/" + getMonth + "/" + getYear;
//     var time = getHours + ":" + getMinutes + ":" + getSeconds;
//     var currentTime = document.getElementById("currentTime");
//     currentTime.innerHTML = "Date: " + date + " <br> " + "Time: " + time;
//     console.log("Date: " + date + " - " + "Time: " + time);
// }, 1000)

// function moveRight() {
//     var tanggiam = 1;
//     var pos = 0;
//     var box = document.getElementById("myImage");
//     var t = setInterval(move, 10);
//         if ((pos > 150) || (pos <0)) {
//             tanggiam = (-tanggiam);
//         }

//         pos += tanggiam;
//         box.style.left = pos+"px";
// }

// ---------------------------------------------------------------------------------------------------------------------------------------

// * Toán tử 3 ngôi (Ternary Operator)
//    - vế 1 ? vế 2 : vế 3
//    - nếu điều kiện vế 1 đúng thì sẽ lấy giá trị ở vế 2. nếu điều kiện vế 1 sai thì sẽ lấy giá trị ở vế 3
// var course = {
//     name: 'ReactJS',
//     coin: 1000
// };

// if (course.coin > 0) {
//     console.log(`${course.coin} Coins`);
// } else {
//     console.log('Free');
// }

// var result = course.coin  > 0 ? `${course.coin} Coins` : 'Free';
// console.log(result);

// var a = -1;
// var b = 2;

// var c = a > 0 ? a : b;
// console.log(c);

// ---------------------------------------------------------------------------------------------------------------------------------------

// * Array map()
//  - sử dụng khi muốn chỉnh sửa hoặc thay đổi element của array
//  - khi truyền đôi số vào map(). thì đối số phải là 1 function.
//    . Ex: map(() => {}) 
// var courses = [
//     {
//         id: 1,
//         name: 'ReactJS',
//         coin: 1000
//     },

//     {
//         id: 2,
//         name: 'Javascript',
//         coin: 500
//     },

//     {
//         id: 3,
//         name: 'HTML & CSS',
//         coin: 300
//     },

//     {
//         id: 4,
//         name: 'Redux',
//         coin: 700
//     },

//     {
//         id: 5,
//         name: 'NodeJS',
//         coin: 900
//     }
// ];

// function handleCourese(course) {
//     // console.log(course);
//     return {
//         id: course.id,
//         name: `Course: ${course.name}`,
//         coin: course.coin,
//         coinText: `Price: ${course.coin}`
//     };
// }

// var newCourses = courses.map(handleCourese);
// console.log(newCourses);

// ---------------------------------------------------------------------------------------------------------------------------------------

// * Array reduce()
//   - sử dụng khi muốn nhận về 1 giá trị duy nhất sau khi tính toán và xử lý trên các phần tử trong array 
//   - reduce nhận 2 đối số truyền vào.
//     + đối số thứ 1 là 1 function
//     + đối số thú 2 là giá trị khởi tạo
//    - tham số thứ nhất là accumulator(biến lưu trữ)
//    - tham số thứ 2 là currentValue
//    - tham số thứ 3 là currentIndex
//    - tham số cuối cùng là originArray
// var courses = [
//     {
//         id: 1,
//         name: 'ReactJS',
//         coin: 1000
//     },

//     {
//         id: 2,
//         name: 'Javascript',
//         coin: 500
//     },

//     {
//         id: 3,
//         name: 'HTML & CSS',
//         coin: 300
//     },

//     {
//         id: 4,
//         name: 'Redux',
//         coin: 700
//     },

//     {
//         id: 5,
//         name: 'NodeJS',
//         coin: 900
//     }
// ];

// // var totalCoin = 0;

// // for (var course of courses) {
// //     totalCoin += course.coin
// // }

// // console.log(totalCoin);

// var i = 0;

// function coinHandler(accumulator, currentValue, currentIndex, originArray) {
//     i++;

//     // console.table({
//     //     'Lượt chạy: ': i,
//     //     'Biến lưu trữ: ': accumulator,
//     //     'Gía khóa học: ': currentValue.coin 
//     // });

//     return accumulator + currentValue.coin;
// }

// var totalCoin = courses.reduce(coinHandler, 0); // initial value

// console.log(totalCoin);

// ---------------------------------------------------------------------------------------------------------------------------------------

// For/of with Array
// var languages = [
//     'Javascript',
//     'ReactJS',
//     'Redux'
// ];

// for (var value of languages) {
//     console.log(value);
// }

// For/of with String
// var languages = 'ReactJS';

// for (var value of languages) {
//     console.log(value);
// }

// For/of with Object
// var myInfo = {
//     name: 'Dat Truong',
//     age: 22
// }

// // case 1
// for (var value of Object.keys(myInfo)) {
//     console.log(myInfo[value]);
// }

// // case 2
// for (var value of Object.values(myInfo)) {
//     console.log(value);
// }

// For/in with Object
// var myInfo = {
//     name: 'Dat Truong',
//     age: 22,
//     address: 'Sai Gon, VN'
// }

// for (var key in myInfo) {
//     console.log(myInfo[key]);
// }

// For/in with Array
// var languages = [
//     'Javascript',
//     'ReactJS',
//     'Redux',
//     'Java'
// ];

// for (var key in languages) {
//     console.log(languages[key]);
// }

// For/in with String
// var languages = 'Javascript';

// for (var key in languages) {
//     console.log(languages[key]);
// }

// ForEach
// var courses = [
//     'Javascript',
//     'ReactJS',
//     'Redux'
// ];

// courses.forEach(function(course, index, array) {
//     console.log(course, index, array);
// });

// ForEach2

// Array.prototype.testMethod1 = 1;
// Array.prototype.testMethod2 = () => {};

// Array.prototype.forEach2 = function(callback) {
//     for(var index in this) {
//         console.log('index: ', index);
//     }
// }

// var courses = [
//     'Javascript',
//     'ReactJS',
//     'Redux'
// ];

// courses.forEach2(function(course, index, array) {
//     console.log(course, index, array);
// });

// ---------------------------------------------------------------------------------------------------------------------------------------

// splice('vị trí bắt đầu đặt con trỏ', 'vị trí xóa/chèn(0) từ vị trí đặt con trỏ', 'chuỗi được chèn')
// var languages = [
//     'Javascript',
//     'ReactJS',
//     'Redux'
// ];

// languages.splice(1, 0, 'TypeScript');
// console.log(languages);

// ---------------------------------------------------------------------------------------------------------------------------------------

// find()
// var courses = [
//     {
//         name: 'Javascript',
//         coin: 680
//     },

//     {
//         name: 'ReactJS',
//         coin: 1000
//     },

//     {
//         name: 'Redux',
//         coin: 860
//     }
// ];

// var course = courses.find(function(course, index, array) {
//     return course.name === 'ReactJS';
// })

// console.log(course);

// ---------------------------------------------------------------------------------------------------------------------------------------

var  myString = 'Learn JavaScript'

// length
// console.log(myString.length);

// find index
console.log(myString.indexOf('Java'));