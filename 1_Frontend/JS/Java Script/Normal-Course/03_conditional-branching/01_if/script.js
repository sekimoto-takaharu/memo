/** 
条件分岐
*/

/** if文と演算子 */
    /** 基本的なif文 */
        let condition1 = true;
        let condition2 = false;
        if(condition1){
            console.log("condition1がtrueの場合に実行される");
        }

        if(condition1){
            console.log("condition1がtrueの場合に実行される");
        } else{
            console.log("condition1がfalseの場合に実行される");
        }

        if(condition2){
            console.log("condition2がtrueの場合に実行される");
        } else if (condition1){
            console.log("condition1がfalseで、condition1がtrueの場合に実行される");
        } else {
            console.log("どちらでもない場合に実行される");
        }


    /** 演算子を用いるif文 */
        let num1 = 10;
        let num2 = 20;
        console.log(num1 === num2); // false
        console.log(num1 !== num2); // true


    /** 型も含めて比較する場合 */ 
        if(num1 === num2){ // ===は型も値も等しい場合
            console.log("num1とnum2が等しい");
        } else {
            console.log("num1とnum2が等しくない");
        }

        if(num1 !== num2){ // !==は型も値も等しくない場合
            console.log("num1とnum2が等しくない");
        } else {
            console.log("num1とnum2が等しい");
        }


    /** 型を問わない比較をする場合 */ 
        let num3 = "10";
        let num4 = 10;
        console.log(num3 == num4); // true
        console.log(num3 === num4); // false

        if(num1 == num2){ // ==は値は等しい場合(型は問わない)
            console.log("num1とnum2が等しい");
        } else {
            console.log("num1とnum2が等しくない");
        }

        if(num1 != num2){ // !=は値は等しくない場合
            console.log("num1とnum2が等しくない");
        } else {
            console.log("num1とnum2が等しい");
        }


    /** オブジェクトを比較する */
        let obj1 = {name: "Taro"};
        let obj2 = {name: "Taro"};
        let obj3 = obj1;
        console.log(obj1 === obj2); // false
        console.log(obj1 == obj2); // false
        console.log(obj1 === obj3); // true


    /** 配列を比較する */
        let arr1 = [1, 2, 3];
        let arr2 = [1, 2, 3];
        let arr3 = arr1;
        console.log(arr1 === arr2); // false
        console.log(arr1 == arr2); // false
        console.log(arr1 === arr3); // true


    /** 比較演算子 */
        let num5 = 10;
        let num6 = 20;
        console.log(num5 > num6); // false
        console.log(num5 < num6); // true
        console.log(num5 >= num6); // false
        console.log(num5 <= num6); // true

        if(num5 > num6){
            console.log("num5はnum6より大きい");
        } else if(num5 < num6){ 
            console.log("num5はnum6より小さい");
        } else {
            console.log("num5とnum6は等しい");
        }
        
        if(num5 >= num6){
            console.log("num5はnum6以上");
        } 
        
        if(num5 <= num6){
            console.log("num5はnum6以下");
        }   


    /** TruthyとFalsy */
        let condition3 = "Hello";
        let condition4 = "";
        if(condition3){ // Truthy(空文字以外の文字列はtrue)
            console.log("trueの場合に実行される");
        }
        if(condition4){ // Falsy(空文字はfalse)
            console.log("trueの場合に実行される");
        } else {
            console.log("falseの場合に実行される");
        }

        let condition5 = 0;
        let condition6 = 1;
        if(condition5) { // Falsy(0はfalse)
            console.log("trueの場合に実行される");
        } else {
            console.log("falseの場合に実行される");
        }

        if(condition6) { // Truthy(0以外の数値はtrue)
            console.log("trueの場合に実行される");
        }

        let condition7 = null;
        let condition8 = undefined;
        if(condition7) { // Falsy(nullはfalse)
            console.log("trueの場合に実行される");
        } 

        if(condition8) { // Falsy(undefinedはfalse)
            console.log("trueの場合に実行される");
        }


    /** 論理演算子 */
        let condition9 = true;
        let condition10 = false;
        if(condition9 && condition10){ // &&は両方がtrueの場合にtrue
            console.log("両方がtrueの場合に実行される");
        } else {
            console.log("どちらかがfalseの場合に実行される");
        }

        if(condition9 || condition10){ // ||はどちらかがtrueの場合にtrue
            console.log("どちらかがtrueの場合に実行される");
        } else {
            console.log("両方がfalseの場合に実行される");
        }

        let exampleCondition = 'Hello' && 0; 
        console.log(exampleCondition); // 0

        let exampleCondition2 = 'Hello' || 0;
        console.log(exampleCondition2); // Hello

        /**
         * &&は左辺がtruethyの場合は右辺を返す。左辺がfalsyの場合は左辺を返す。
         * ||は左辺がtruethyの場合は左辺を返す。左辺がfalsyの場合は右辺を返す。
        */

    /** 論理否定演算子 */
        if(!condition9){ // !はtrueをfalseに、falseをtrueにする
            console.log("condition9がfalseの場合に実行される");
        } else {
            console.log("condition9がtrueの場合に実行される");
        }

        if(!condition10){ // !はtrueをfalseに、falseをtrueにする
            console.log("condition10がfalseの場合に実行される");
        } else {
            console.log("condition10がtrueの場合に実行される");
        }

    /** 論理演算子の優先順位 */ 
        let condition11 = true;
        let condition12 = false;
        let condition13 = true;
        if(condition11 && condition12 || condition13){ // &&が||よりも優先される
            console.log("trueの場合に実行される");
        } else {
            console.log("falseの場合に実行される");
        }

        /**
         * それ以外の演算子の優先順位は、下記URLを参照
         * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence
         */


    /** null合体演算子 */
        let condition14 = null;
        let condition15 = "Hello";
        console.log(condition14 ?? condition15); // Hello

        if(condition14 ?? condition15){
            console.log("condition14がnullまたはundefinedの場合に実行される");
        } else {
            console.log("condition14がnullまたはundefined以外の場合に実行される");
        }

        let condition16 = undefined;
        let condition17 = "Hello";
        console.log(condition16 ?? condition17); // Hello

        if(condition16 ?? condition17){
            console.log("condition16がnullまたはundefinedの場合に実行される");
        } else {
            console.log("condition16がnullまたはundefined以外の場合に実行される");
        }
        
        /**
         * null合体演算子は左辺がnullまたはundefinedの場合は右辺を返す。
         * ||は左辺がfalsyの場合は右辺を返す。
         */
    
    /** 三項演算子 */
        let condition18 = true;
        let condition19 = false;
        console.log(condition18 ? "trueの場合に返す値" : "falseの場合に返す値"); // trueの場合に返す値

        let result = condition18 ? "trueの場合に返す値" : "falseの場合に返す値";
        console.log(result); // trueの場合に返す値

        let result2 = condition19 ? "trueの場合に返す値" : "falseの場合に返す値";
        console.log(result2); // falseの場合に返す値

/**
 * 式：変数の代入時に右辺に書けるもの(1+1, function(){}, 1 === 1 ,etc...)
 * 文：変数の代入時に右辺に書けないもの(if, return , etc...)
 */