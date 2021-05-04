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
// class User {
//     constructor(private _name: string) {
//     }
//     public sayHi(): void {
//         console.log("hi! i am " + this._name);
//     }
//     // getter
//     get name() {
//         return this._name;
//     }
//     // setter
//     set name(newValue: string) {
//         this._name = newValue;
//     }
// }

// var tom = new User("Tom");
// console.log(tom.name);
// tom.name = "TOM";
// console.log(tom.name);
// tom.sayHi();

// クラスの継承
// protected
// 継承されるクラスで反映される
class User {
    constructor(protected _name: string) {
    }
    public sayHi(): void {
        console.log("hi! i am " + this._name);
    }
}

class AdminiUser extends User {
    private _age: number;
    constructor(_name: string, _age: number) {
        super(_name);
        this._age =_age;
    }
    public sayHi(): void {
        console.log("my age: " + this._age);
        console.log("my name: " + this._name);
        super.sayHi();
    }
}

var bob = new AdminiUser("Bob", 23);
bob.sayHi();