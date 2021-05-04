// クラス

// アクセス修飾子
// defalt: public (省略可)
// protected, private

// public
// class User {
//     constructor(public name: string) {
//     }
//     public sayHi(): void {
//         console.log("hi! i am " + this.name);
//     }
// }

// var tom = new User("Tom");
// console.log(tom.name);
// tom.sayHi();

// private
// クラス内のみで呼び出し可能
// getter / setter を使用すれば柔軟に活用できる
// この場合、ECMAScript5を使えと言われてerrorとなるので、コンソールでコマンド「-t ES5」を付け加える
class User {
    constructor(private _name: string) {
    }
    public sayHi(): void {
        console.log("hi! i am " + this._name);
    }
    // getter
    get name() {
        return this._name;
    }
    // setter
    set name(newValue: string) {
        this._name = newValue;
    }
}

var tom = new User("Tom");
console.log(tom.name);
tom.name = "TOM";
console.log(tom.name);
tom.sayHi();