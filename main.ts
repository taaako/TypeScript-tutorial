// 型

// 数値型: number
// 文字列型: string
// 真理値: boolean
// なんでもあり: any

var i: number;
var i: number = 10;
var i = 10; // i: number

var x; // x: any
x = 10;
x = "hello";

// 配列
var results: number[];
results = [10, 5, 3];

// 列挙型
// Signal

// enum Signal {
//     Red = 0,
//     Blue = 1,
//     Yellow = 2
// }

enum Signal {
    Red, // 0
    Blue = 3, // 3
    Yellow // 4
}

// Signalの拡張 mergeされる
// 複数の列挙型を宣言した場合、最初のメンバを省略できるのはどちらかのみ
enum Signal {
    Green = 5
}

var result: Signal;

// if (result === Signal.Yellow) {...}
// if (result === Signal['Yellow']) {...}

// console.log(Signal[2]); // Yellow
// console.log(Signal[3]); // Blue
console.log(Signal.Green); // 5