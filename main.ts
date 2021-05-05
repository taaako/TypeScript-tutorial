// 内部モジュール

module UserModule {
//     export var name = "sato";
//     export module AddressModule {
//         export var zip = "111-1111";
//     }
// }

// moduleを別ファイルから呼び出す
// "/// <...>" でファイルを呼び出せる
// コンパイルするとmain.jsとuser.jsになるので、１つにしたい時はコマンドに「--out all.js」を付け足す
/// <reference path="./user.ts" />

console.log(UserModule.name);
console.log(UserModule.AddressModule.zip);

// モジュール名の省略を指定
import addr = UserModule.AddressModule;
console.log(addr.zip);