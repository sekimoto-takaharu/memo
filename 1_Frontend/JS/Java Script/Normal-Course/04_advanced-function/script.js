/** 
仕組みから理解する関数の応用的な知識 
*/

/** 関数はオブジェクトに過ぎない！ */
    function add(x, y) { // 関数のオブジェクトを作り、変数addに代入
        return x + y;
    }
    console.log(add); // 関数オブジェクトを出力 
    /** 
    firefoxのコンソールで実行すると、以下のように出力される(オブジェクトとして認識されている)
    add(x, y) {
        arguments: null
        caller: null
        length: 2
        name: "add"
        prototype: Object { … }
        <prototype>: function ()

        google chromeのコンソールで実行すると、以下のように出力される(分かりやすく関数として表示される)
        ƒ add(x, y) {
            return x + y;
        }
    */

    /** firefoxのコンソールと同じ内容をgoogle chromeで出力したい場合は、以下のように「dir」を付ければ良い */
    console.dir(add); // 関数オブジェクトを出力

    /** したがって以下のように書くと、lengthに相当する値が出る */
    console.log(add.length); // 2

    /** 関数を宣言するとオブジェクトになるが、オブジェクトから関数とすることはできない */


/** 関数を作る２つの方法 */
    /** ①関数宣言 */
        function add(x, y) { // a.関数宣言
            return x + y;
        }

    /** ②関数式 */
        let addition = function(x, y) { // 関数式を変数additionに代入(b.無名関数式)
            return x + y;
        };

        let destract = function decreasing(x, y) { // 関数式を変数destractに代入(c.名前付き関数式)
            return x - y;
        };

        console.log(addition(1, 2)); // 3
        console.log(destract(1, 2)); // -1
        // 下記のように書くとエラーになる。関数式は変数に代入された時点で関数名が決まるため、変数名で呼び出す
        // console.log(decreasing(1, 2)); // error: decreasing is not defined


/** 関数宣言と関数式の違い */
    /**
     * 関数宣言は、巻き上げられる(hoisting)が発生するため、関数宣言よりも前に関数を呼び出すことができる。
     *  メリット①：どこでも関数を呼び出すことができる
     *  メリット②：関数ってあることがわかりやすい
     * 
     * 関数式は、巻き上げられないため、関数式よりも前に関数を呼び出すことができない。
     * メリット：関数がどこで定義されているかがわかりやすい
     */


/** 関数とメソッド */
    /** 関数 */
    function hello() {
        console.log('Hello');
    }

    /** メソッド */
    const person = {
        name: 'Tom',
        hello: function() { // オブジェクトのプロパティに関数を代入することをメソッドという
            console.log('Hello');
        }
    };
    hello(); // Hello
    person.hello(); // Hello


/** アロー関数 */
    let multi = function(x, y) {
        return x * y;
    };
    console.log(multi(2, 3)); // 6

    let multi2 = (x, y) => x * y; // (d.アロー関数(無名関数の簡略化のため、名前付き関数式は使えない))
    let exponentiation = x => x ** 2; // 引数が1つの場合、()を省略できる
    let hello2 = () => console.log('Hello'); // 処理が1行の場合、{}とreturnを省略できる

    /** 
     * 特徴 
     * ①functionを省略できる
     * ②引数(パラメーター)が1つの場合、()を省略できる
     * ③処理が1行の場合、{}とreturnを省略できる
     * ④this
     * */


/** デフォルトパラメーター */
    let sayHi = (name = 'Tom') => console.log(`Hi ${name}`); // デフォルトパラメーターとしてTomを設定。引数がない場合はTomが表示される
    sayHi(); // Hi Tom
    sayHi(undefined); // Hi Tom
    sayHi('Bob'); // Hi Bob
    sayHi(null); // Hi null
    sayHi(0); // Hi 0
    sayHi(''); // Hi

    // 複数パラメーターがある場合、デフォルトパラメーターは右側から設定する
    let sayGoodbye = (name, message = 'Goodbye') => console.log(`${message} ${name}`);
    sayGoodbye('Bob'); // Goodbye Bob

    // パラメーターを入れ過ぎた場合、無視される
    // 明示的にundefinedを入れることで、デフォルトパラメーターが適用される


/** レストパラメーター */
    let sum = (...numbers) => { // レストパラメーターを使うことで、引数を配列にまとめることができる
        console.log(numbers); // [1, 2, 3]
        let result = 0;
        numbers.forEach(number => result += number);
        return result;
    };
    console.log(sum(1, 2, 3)); 
    // レストパラメーターは、引数の最後に1つだけ指定できる

    // 昔の書き方(今は使われない)
    let sum2 = function() {
        console.log(arguments);  // functionの引数をfunction内でのみ使えるargumentsオブジェクト(配列)にまとめることができる
        let total = 0;
        for (num of arguments) {
            total += num;
        }
        return total;
    };
    console.log(sum2(1, 2, 3)); // [1, 2, 3]


/** callback関数 */
    let subtract = (a, b, callback) => {
        let result = a - b;
        callback(result);
    };
    subtract(10, 3, (result) => {
        console.log(result);
    })

    // コールバック関数は、関数を引数として渡すことができる
    // コールバック関数は、関数の中で関数を実行することができる


/** 「名前付き関数式」と「無名関数」の違い */
    /** 
     * 一番大きな違いは、「デバック」のしやすさ！
     * 以下の例を見てみる
     */
    // 名前付き関数式
    let namedFunc = function namedFunc() {
        console.log('namedFunc');
    };
    console.log(namedFunc.name); // namedFunc

    // 無名関数
    let nonameFunc = function() {
        console.log('nonameFunc');
    };
    console.log(nonameFunc.name); // nonameFunc

    // このように、名前付き関数式は関数名が表示されるため、デバックしやすい

/** 引数は後で変更できる */
    let change = function(x, y) {
        x = 2;
        y = 3;
        console.log(x, y);
    };
    let a = 10;
    let b = 20;
    change(a, b); // 2 3
    console.log(a, b); // 10 20

    // 引数は値渡しであるため、関数内で引数を変更しても、元の変数には影響を与えない
