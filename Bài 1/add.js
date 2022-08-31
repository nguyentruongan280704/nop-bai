// 1 Biên dịch
// Interpretation: theo line by line
// compilation: dịch cả cục dùng, viết ở một protable file và có thể thực thi ở bất kì máy tính nào

// 3 Multi-paradigm: Đa mô hình

// 4 Prototype-based object-oriented :

// trong mỗi constructor function 


// constructor function ( NGuyên mẫu: khai báo các đối tượng con thông qua từ  khóa new)
// một bảng nguyên mẫu để khai báo các instance - đối tượng con
// từ khóa this
// name vaf color la dai luong bien thien co the thay doi dc
// New : mới
// prototype: kế thừa 
// function Mouse(name, color){
//     this.name = name;
//     this.color = color;
//     this.type = "Mouse";
// }

// Mouse.prototype.gamNham = function () {
//     // Logic
//     console.log("hup hup hup");
// }

// let mickey = new Mouse("Mickey", "Black-white");
// let jerry = new Mouse("jerry", "onrange-white");

// mickey.gamNham();
// jerry.gamNham();

// // console.log(mickey);
// // console.log(jerry);

// // let str = "Hello world";
// let str = new String("Hello world");
// // kế thừa các phương thức và thuộc tính của thằng
// // constructor function string cha
// let num = new Number("12");

// console.log(str);
// console.log(num);

// function increase3(arr, fn){
//     let result = fn(arr);
//     return result;
// }

// let newArr = increase3([1,2,3], function(arr){
//     let result = []
//     for(let i = 0; i <=arr.length - 1; i = i + 1){
//         result.push(arr[i] +3);
//     }
//      return result;
// })
// console.log(newArr);


// let arr = [1,2,3];
// let result = arr.map(function(elenment){
// return `${elenment}`
// });
// console.log(result);

// reture: trar ve ket qua

// câu hỏi phỏng vấn cuối medum 2

// let result = add3(2)(3);
// function add3(num){
//    num = num + 3;
//    return function(num2) {
//     return num * num2;
//    };
// }
// console.log(result);


// 6 Dynamic : là Javascript là một ngôn ngữ dynamic. Vậy dynamic nghĩa là gì? 
// Dynamic nghĩa là dynamic-typed, nghĩa là trong ngôn ngữ JS, mỗi khi khai báo biến, 
// chúng ta không cần phải khai báo kiểu dữ liệu cho biến đó.
//  Biến trong JS không bị ràng buổi bởi kiểu dữ liệu.
//  Mỗi lần khai báo biến, JS tự động biết được biến đó có kiểu dữ liệu gì thông qua value của biến đó.
//  Đồng thời kiểu dữ liệu của biến cũng có thể thay đổi dễ dàng thôi qua việc gán lại dữ liệu cho biến đó.

// ----------------------------------------------------------------------------------------------------------


// II. Javascript Engine và Runtime
// 1. JS engine (môi trường chạy js)

// FIRST IN LAST OUT 

// khi một chương chình javascript đc chạy , sẽ có 2  giai đoạn
// ------------

// creation phase (giai đoạn khởi tạo)

// setup variable environmoent (khởi tạo bộ nhớ để lưu chữ các biến)

// định nghĩa scope chain (định nghĩa phạm vi hoạt động của biến)
// var, let, const 
// ----------------------------------------------------------------

// global scope (var)
// script scope (let, const)
// debugger; dừng code
// var a = 10;
// let b = 20;
// const c = 30;
// -----------------------

// block scope (let, const)
// debugger;
// if (true){
//     var a = 10;
//     let b = 20;
//     const c = 30;
// }
// ------------------------------

// function scope (var)
// debugger;
// var age = 20;
// let firstName = "Peter";
// let lastName = "Parker";
// const yearOfBirth = "1995";

// // Function declaration
// function calAge(year) {
//   return 2022 - year;
// }

// // Function expression
// var getFullName = function (firstName, lastName) {
//   return `${firstName} ${lastName}`;
// };

// ràng buộc từ khóa this

// execution context (ngữ cảnh thực thi)
// ví dụ 1
// console.log(`1. ${age}`); //underfined
// var age = 20;
// console.log(`2. ${age}`);//20
 
// let firstName = "Peter";
// let lastName = "Parker";
// const yearOfBirth = "1995";
 
// console.log(`3. ${calAge(yearOfBirth)}`)//27
// // Function declaration
// function calAge(year) {
//    return 2022 - year;
// }
// console.log(`4. ${calAge(yearOfBirth)}`) //27
 
// console.log(`5. ${getFullName(firstName, lastName)}`); //error
// // Function expression
// var getFullName = function(firstName, lastName) {
//    return `${firstName} ${lastNAme}`;s
// }
// console.log(`6. ${getFullName(firstName, lastName)}`);
// ----------------

// ví dụ 2

// console.log(`1. ${a}`); // undefined
// var a = "Peter Parker";
// console.log(`2. ${a}`); // peter 

// printA();

// function printA() {
//   console.log(`3. ${a}`); // undefined
//   var a = "Tony Stark";
//   console.log(`4. ${a}`); //tony 
// }
// console.log(`5. ${a}`); //peter

// ví dụ 3
debugger;
var x = 10;
 
one();
function one() {
   var y = 5;
   two();
 
   function two() {
       var z = 15;
       three();
 
       function three(){
           var t = x + y + z;
           console.log(`1. x + y + z = ${t}`);
           four()
       }
   }
}
 
function four() {
   var t = 30;
   console.log(`2. x = ${x}`);
   console.log(`3. y = ${y}`);
   console.log(`4. z = ${z}`);
   console.log(`5. t = ${t}`);
}