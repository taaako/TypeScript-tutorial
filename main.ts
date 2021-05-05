// Generics

// function getStringArray(value: string): string[] {
//     return [value, value, value];
// }
// function getStringArray(value: number): number[] {
//     return [value, value, value];
// }

// Typeを指定する
function getArray<T>(value: T): T[] {
    return [value, value, value];
}

console.log(getArray<number>(3)); // [ 3, 3, 3 ]
console.log(getArray<string>("hello")); // [ 'hello', 'hello', 'hello' ]