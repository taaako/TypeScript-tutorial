// クラス

// アクセス修飾子
// defalt: public (省略可)
// protected, private

class User {
    // public name: string;
    // constructor(name: string) {
    //     this.name = name;
    // }
    // 上記と同じ、省略版
    constructor(public name: string) {
    }
    public sayHi(): void {
        console.log("hi! i am " + this.name);
    }
}

var tom = new User("Tom");
console.log(tom.name);
tom.sayHi();