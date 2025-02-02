/** 
【関数】：何度も使い回す処理をまとめたもの
*/

/** 関数とは */
    /** 関数の定義(関数宣言) */ 
    function example() {
    console.log(1+1);
    console.log('Hello World');
    }  // 関数の末尾には「;」をつけない

    //ここまでだと、関数を定義しただけで、実行されないため、関数を実行する必要がある

    /** 関数の実行 */
    example();  // 2, Hello World
    example();  // 何度も呼び出すことができる


    /** パラメーター */
        /** 関数の引数 */
        function example2(a, b) { // a, bは仮引数(パラメーター)
            console.log(a + b);
        }

        example2(1, 2); // 1, 2は引数(アーギュメントともいう)
        example2(3, 4); // 3, 4は引数(アーギュメントともいう)

    /** return文(戻り値) */
        function example3(a, b) {
            return a + b; // return文を使うことで、関数の戻り値(返り値)を返すことができる
            // return文以降の処理は実行されない
        }
        console.log(example3(1, 2)); // 3
        console.log(example3(3, 4)); // 7

        // return文がない場合、関数の戻り値は「undefined」となる
        function example4(a, b) {
            a + b;
        }
        console.log(example4(1, 2)); // undefined

        function example5(a, b) {
            return; // return文の後に何も書かない場合も「undefined」となる
        }
        console.log(example5(1, 2)); // undefined

    /** 関数の位置 */
        // 関数は宣言された位置よりも前に呼び出すことができる(関数の定義を一番上に巻き上げられる)
        example6(); // 1, 2
        function example6() {
            console.log(1, 2);
        }


    /** スコープ */
        function example7(num1, num2) {
            let value = num1 + num2;
            console.log(value);
        }
        example7(1, 2); // 3
        // console.log(value); // エラーが出る(関数内で宣言された変数は関数内でしか使えない)
        
        let num3 = 5;
        function example8(num1, num2) {
            let value = num1 + num2 + num3; // 逆に関数の外で宣言された変数は関数内で使うことができる
            console.log(value);
        }

        /* 
         スコープが全ての場所で使える変数を「グローバル変数」、関数内でしか使えない変数を「ローカル変数」という
         全ての場所で使えるスコープを「グローバルスコープ」、関数内でしか使えないスコープを「ローカルスコープ」という
         関数内のスコープを「関数スコープ」という。また、関数はブロック文の中にあるため、「ブロックスコープ」ともいう
        */

         let num4 = 20;
        function example9() {
            let num4 = 10;
            console.log(num4); // 10(関数外で宣言された変数よりも、関数内で宣言された変数が優先される)
        }