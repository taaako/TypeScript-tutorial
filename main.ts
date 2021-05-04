// 関数
// 返り値がない関数: void

// function add(a: number, b: number): number {
//     return a + b;
// }
// console.log(add(5, 3));
// console.log(add(5, "hello")); // error

// オプションにする: 引数?
// オプションにした後に必須の引数は書けない
// function add(a: number, b?: number): number {
//     if (b) {
//         return a + b;
//     } else {
//         return a + a;
//     }
// }
// console.log(add(5, 3)); // 8
// console.log(add(5)); // 10

// 引数に初期値を与える
// function add(a: number, b: number = 10): number {
//     return a + b;
// }
// console.log(add(5, 3)); // 8
// console.log(add(5)); // 15

// 関数式
// var add = function(a: number, b: number): number {
//     return a + b;
// }

// アロー関数式
// var add = (a: number, b: number): number => {
//     return a + b;
// }

// アロー関数式のさらに簡略版
var add = (a: number, b: number): number => a + b;

console.log(add(5, 3));