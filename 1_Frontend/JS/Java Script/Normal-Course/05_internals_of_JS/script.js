/**
 * JSの内部構造
*/

/** グローバルオブジェクト */
    /**
     * console.logやperseIntなどの関数や、ArrayやObjectなどの組み込みオブジェクトは、グローバルオブジェクトのプロパティとして定義されている。
     */

    // グローバルオブジェクトを見る方法
    console.log(globalThis);

    // グローバルオブジェクトにプロパティを追加すれば、グローバル変数として扱える
    // また、グローバルオブジェクトに上書きできてしまうので、注意が必要
    // windowオブジェクトはブラウザ環境でのグローバルオブジェクト


/** varとletの違い */
    /**
     * varは関数スコープ、letはブロックスコープ
     * 
     * ① varは同じ変数を再宣言できる。
     * 　　　　　　letは同じ変数を再宣言できない。
     * ② varは関数スコープなので、if文やfor文の中で宣言しても、外からアクセスできる。ただし、関数内でvarを定義したら、関数内でしか使えない。
     * 　　　 letはブロックスコープなので、if文やfor文の中で宣言した変数は、そのブロック内でしかアクセスできない
     * ③ varで定義した変数はグローバルオブジェクトで定義したものの一部になる。(ただし、関数内で定義した場合は一部にならない)
     *    letで定義した変数はグローバルオブジェクトで定義したものの一部にならない
     * ④ varは、変数名の巻き上げが行われる
     *    letは、巻き上げが行われない
     */

    // varの場合
    if(true) {
        var x = 5;
    }
    console.log(x); // 5

    // letの場合
    if(true) {
        let y = 5;
    }
    // console.log(y); // Uncaught ReferenceError: y is not defined


/** varと関数宣言の似ている所 */
    /**
     * varと関数宣言は、変数名を宣言するときに、変数名の巻き上げが起こる
     * 
     * つまり、変数名を宣言する前に変数名を使ってもエラーにならない
     */

    // varの場合
    console.log(a); // undefined
    var a = 5;

    // 関数宣言の場合
    console.log(b); // function b() {}
    function b() {}


/** use strict */
    /**
     * use strictを使うと、エラーチェックが厳密になる(記載するときは、ファイルの一番上に書く必要がある)
     * 部分的に「use strict」を適用したい場合は、関数のみ可能
     * 
     * 【use strictで起こること】
     * ①ブロックスコープ
     */

    'use strict';

    // 未定義の変数を使おうとするとエラーになる
    // console.log(c); // Uncaught ReferenceError: c is not defined

    // 変数名とプロパティ名が同じ場合、エラーになる
    // let d = { d: 5 }; // Uncaught SyntaxError: Identifier 'd' has already been declared


/** 「primitive」と「object」 */
    /**
     * primitive：number、string、boolean、undifined、null等
     * object:オブジェクト、配列、関数
     * 
     * primitiveは、変数に代入された時、メモリ(コンピューターの電源を消すと消える一時的なもの)に保存される
     * objectは、変数に代入された時、オブジェクトはメモリ内の番地を指定する形になっている。
     */

    const coffee = {
        name: 'Caffe Latte',
    }
    console.log(coffee.name); // caffe Latte
    const coffee2 = coffee;

    coffee2.name = 'Espresso';
    console.log(coffee.name); // Espresso

    const coffee3 = {
        name: 'Caffe latte',
    }
    console.log(coffee === coffee2); // true
    console.log(coffee === coffee3); // false


/** ガベージコレクション */
    