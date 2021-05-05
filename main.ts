// Interface
// オブジェクトの型に名前をつける
// 構造的部分型

interface Result {
    a: number;
    b: number;
}

function getTotal(result: Result) {
    return result.a + result.b;
}

var result = {
    a: 32,
    b: 58,
    c: "hello" // errorにならない
}

console.log(getTotal(result)); // 90