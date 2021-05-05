// Interface
// オブジェクトの型に名前をつける
// 構造的部分型

// interface Result {
//     a: number;
//     b: number;
// }

// function getTotal(result: Result) {
//     return result.a + result.b;
// }

// var result = {
//     a: 32,
//     b: 58,
//     c: "hello" // errorにならない
// }

// console.log(getTotal(result)); // 90


// Interface クラスの継承
// interface SpringResult {
//     a: number;
// }

// interface FallResult {
//     b: number;
// }

// interface FinalResult extends SpringResult, FallResult {
//     final?: number;
// }

// // function getTotal(result: FinalResult) {
// //     return result.a + result.b + result.final;
// // }

// function getTotal(result: FinalResult) {
//     if (result.final) {
//         return result.a + result.b + result.final;
//     } else {
//         return result.a + result.b;
//     }
// }

// var result = {
//     a: 32,
//     b: 58,
//     final: 82
// }

// console.log(getTotal(result)); // 172, finalがなければ90


// Interface -> Class

interface GameUser {
    score: number;
    showScore(): void;
}

class User implements GameUser {
    name: string;
    score: number = 0;
    constructor(name: string) {
        this.name = name;
    }
    sayHi(): void {
        console.log("hi! i am " + this.name);
    }
    showScore(): void {
        console.log("score " + this.score);
    }
}