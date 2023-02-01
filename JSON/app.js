// JSON (Javascript Object Notation)
// Là 1 định dạng dữ liệu (chuỗi)
// JSON: Number, String, Boolean, Null, Array, Object

// Mã hóa / Giải mã
// Encode / Decode
// Stringify: Từ Javascript types -> JSON
// Parse: Từ JSON -> Javascript types

// var json = '["Javascript", "ReactJS", "TypeScript"]';
// var json = '{"name": "Dat Truong", "age": 22}';
// var a = '"Dat"';

// var object = JSON.parse(json);

// console.log(object);

// console.log(JSON.stringify([
//     'Javascript', 
//     'ReactJS', 
//     'TypeScript'
// ]));

console.log(JSON.stringify({
    name: 'Dat Truong',
    age: 22,
    test: function() {}
}));