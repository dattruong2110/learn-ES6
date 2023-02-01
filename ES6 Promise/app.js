// 1. Initialize new Promise()
// 2. Initialize Executor

// var promise = new Promise(
//     // Executor
//     function(resolve, reject) {
//         // Logic
//         // Successfull: resolve()
//         // Failure: reject()

//         resolve([
//             {
//                 id: 1,
//                 name: 'Javascript'
//             }
//         ]);

//         reject('Failure');
//     }
// );

// promise
//     .then(function(courses) { // Khi resolve được gọi thì callback của .then sẽ được gọi
//         console.log(courses);
//     })
//     .catch(function(error) { // Khi reject được gọi thì callback của .catch sẽ được gọi
//         console.log(error);
//     })
//     .finally(function() { // Khi 1 trong 2 resolve hoặc reject được gọi thì .finally đều được gọi
//         console.log('Done!');
//     });

// var promise = new Promise(
//     function(resolve, reject) {
//         resolve('Successfully!!!');
//         setTimeout(resolve, 1000);
//     }
// );

// promise
//     // .then(function(success){
//     //     console.log(success);
//     // });

//     // Chain (tính chất chuỗi)
//     .then(function(){
//         // Trong function callback của .then nếu nó không return ra promise thì nó sẽ chạy ngay .then trong chuỗi liền kề nó
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve([1, 2, 3]);
//             }, 3000);
//         });
//     })
//     .then(function(data){
//         console.log(data);
//         return 2;
//     })
//     .then(function(data){
//         console.log(data);
//         return 3;
//     })
//     .catch(function(error){
//         console.log(error);
//     })
//     .finally(function(){
//         console.log('Done!');
//     })

// function sleep(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
// }

// sleep(1000)
//     .then(() => {
//         console.log(1);
//         return sleep(1000);
//     })
//     .then(() => {
//         console.log(2);
//         return new Promise((resolve, reject) => {
//             reject('Failure!!!');
//         });
//     })
//     .then(() => {
//         console.log(3);
//         return sleep(1000);
//     })
//     .then(() => {
//         console.log(4);
//         return sleep(1000);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.all

// var promise = Promise.resolve('Successfully!!!');
// var promise = Promise.reject('Failure!!!');

// promise
//     .then((result) => {
//         console.log('Result: ',  result);
//     })
//     .catch((error) => {
//         console.log('Error: ', error);
//     })

var promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve([1]);
    }, 1000);
})

var promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve([2, 3]);
    }, 2000);
})

var promise3 = Promise.reject('Failure!!!');

Promise.all([promise1, promise2, promise3])
    .then(([result1, result2]) => {
        console.log(result1.concat(result2));
    })
    .catch((error) => {
        console.log(error);
    })