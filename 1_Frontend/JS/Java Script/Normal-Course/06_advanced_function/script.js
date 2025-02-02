/** 
レキシカル環境
*/

let apple = "apple";
let banana = "banana";

{
    let mango = "mango";
    console.log(x); //ここのxには何が入るか
}

/*
[レキシカル環境A]
    global object
    apple: "apple"
    banana: "banana"

    [レキシカル環境B]
        outerEnv;(一個上のレキシカル環境Aを参照する)
        mango: "mango"

console.log(？)の答えは、apple、banana、mangoのどれも入る
*/


/** 関数 */

let one = 1;
let two = 2;
let outerFunc = (a) => {
    let three = 3;
    let innerFunc = (b) => {
        let four = 4;
    }
    innerFunc();
}
outerFunc('hello');

/*
[レキシカル環境A]
    global object
    one: 1
    two: 2
    outerFunc: function outerFunc(a) {...}

    [レキシカル環境B] //呼び出した時にレキシカル環境が作られる
        outerEnv: (一個上のレキシカル環境Aを参照する)
        a: "hello"
        three: 3
        innerFunc: function innerFunc(b) {...}

        [レキシカル環境C] //呼び出された時にレキシカル環境が作られる
            outerEnv: (一個上のレキシカル環境Bを参照する)
            b: undefined
            four: 4
*/

/** クロージャー */
let outer = () => {
    let outerVar = "I am outside!";
    let inner = () => {
        let innerVar = "I am inside!";
        console.log(outerVar);
    }
    return inner;
}

let innerFunc = outer();
innerFunc(); //I am outside!

/*
[レキシカル環境A]
    global object
    outer: function outer() {...}
    innerFunc: function inner() {...}

    [レキシカル環境B]
        outerEnv: (一個上のレキシカル環境Aを参照する)
        outerVar: "I am outside!"
        inner: function inner() {...}

        [レキシカル環境C]
            outerEnv: (一個上のレキシカル環境Bを参照する)
            innerVar: "I am inside!"
*/

// クロージャーとは、関数が定義された時のレキシカル環境を覚えている関数のこと


/** IIFE(即時実行関数式)：昔はよく使われていた */
    let result = (() => {
        let x = 0;
        return x;
    })(); //定義してすぐに実行

    let result2 = (function() {
        let x = 0;
        return x;
    }()); //定義してすぐに実行


/** 再帰関数 */
    let countDown = (num) => {
        if(num === 0) return;
        console.log(num);
        countDown(num - 1);
    }
    countDown(3); //3 2 1


/** 実行コンテキストスタック */
    let a = 1;
    let b = 2;
    let c = 3;

    let first = () => {
        let d = 4;
        let second = () => {
            let e = 5;
            let third = () => {
                let f = 6;
            }
            third();
        }
        second();
    }
    first();

    /*
    [実行コンテキストスタック]
        1. global object
        2. first()
        3. second()
        4. third()
    */

    //関数が呼び出されると、実行コンテキストがスタックに積まれる
    //関数が終了すると、スタックから取り除かれる