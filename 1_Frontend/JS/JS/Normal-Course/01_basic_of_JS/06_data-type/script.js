/** 
【データの型】
*/

/** 【1】string型(文字列型) */
   let string1 = 'おはよう'; // シングルクオート
   let string2 = "こんにちは"; // ダブルクオート
   let string3 = `こんばんは`; // バッククオート
   let person = 'たかはる';

   let string4 = 'みなさん' + "こんにちは" + person + `!`; // 「+」を使う記法は上記３つとも可能！
   let string5 = `みなさん こんにちは ${person} !` // この書き方は、バッククオート限定
   let string6 = "シングルクオート(')を入れたい場合は、ダブルクオートで囲えば良い";
   let string7 = 'シングルクート内でシングルクオートを使う場合は、\'とバックスラッシュを使えば良い';
   let string8 = 'バックスラッシュを使いたいときは、バックスラッシュを２回書けば良い\\'
   let string9 = "改行をしたい場合は、「\\n」を使うと良い";
   let string10 = 
   `バッククオートの場合は、
   バッククオートの場合は、
   エディタ通りに改行される
   `;



/** 【2】number型(数字型) */
   let number = 10; // integer型(整数型)ともいう
   let number2 = 10.05; // float型(浮動小数点)ともいう

   /** 動的型付けが可能！ */
      number = "こんばんは"; //number型を入れていた変数にstring型を入れることもできる(∵JSは動的型付け言語だから、状況に応じてnumber型やstring型になったりする)

      const stringNumber = "10"; // string型
      const result = stringNumber + 10; // string型の10とnumber型の10を足すと、文字列の「1010」になる
      console.log(result); // 結果：1010

   /**　型を変換する方法 */

      /** string→numberにする方法 */
         /** ①Numberを使う方法 */
         const result2 = Number(stringNumber) + 10; // Number()を使うと、string型をnumber型に変換できる
         console.log(result2); // 結果：20

         /** ②parseIntを使う方法 */
         const result3 = parseInt(stringNumber) + 10; // parseInt()を使うと、string型をnumber型に変換できる
         console.log(result3); // 結果：20

         /** ③parseFloatを使う方法 */
         const stringFloat = "10.05";
         const result4 = parseFloat(stringFloat) + 10; // parseFloat()を使うと、string型をnumber型に変換できる
         console.log(result4); // 結果：20.05

         /** ④+を使う方法 */
         const result5 = +stringNumber + 10; // +を使うと、string型をnumber型に変換できる
         console.log(result5); // 結果：20


      /** number→stringにする方法 */
         /** ①Stringを使う方法 */
         const ten = 10;
         const stringTen = '10' + String(ten); // String()を使うと、number型をstring型に変換できる
         console.log(stringTen); // 結果：10

         /** ②toStringを使う方法 */
         const stringTen2 = '10' + ten.toString(); // toString()を使うと、number型をstring型に変換できる
         console.log(stringTen2); // 結果：10



/** 【3】boolean型 */
   let bool = true; // 真
   let bool2 = false; // 偽



/** 【4】配列型 */
   let array = [1, 2, 3, 4, 5]; // 配列(数字型)
   let array2 = ['りんご', 'バナナ', 'みかん']; // 配列(文字列型)
   let array3 = [1, 'りんご', true, 'バナナ', 5]; // 色々な型を混ぜてもOK
   console.log(array); // 結果：['0' => 1, '1' =>  2, '2' => 3, '3' => 4, '4' => 5]
   // 配列の中身は、0から始まるインデックス番号で管理されるため、上記のようになる。
   console.log(array[0]); // 結果：1

   /** 配列に要素を追加する */
   array.push(6); // 配列の末尾に要素を追加する
   console.log(array); // 結果：['0' => 1, '1' =>  2, '2' => 3, '3' => 4, '4' => 5, '5' => 6]



/** 【5】オブジェクト型 */
   let object = {
      name: 'coffee', // キー: 値
      size: 350, // キー: 値
      isHot: true, // キー: 値
      toppings: [
         'シロップ', 
         'ミルク', 
         '生クリーム'
      ],
      nutrition: {
         calorie: 200,
         sugar: 20,
         protein: 3
      },
      // キーと値をセットで、「プロパティ」と呼ぶ
      //キーと間の間に「:」を入れる
      // 値の間に「,」を入れる
   }

   console.log(object); // 結果：{name: "coffee", size: 350, isHot: true, toppings: Array(3), nutrition: {…}}
   
   // オブジェクトの中にオブジェクトが入っている場合は、ドット記法でアクセスできる
   console.log(object.name); // 結果：coffee
   console.log(object.toppings[0]); // 結果：シロップ
   console.log(object.nutrition.calorie); // 結果：200

   // オブジェクトの値を変更する場合は、以下のようにする
   object.name = 'tea';
   console.log(object.name); // 結果：tea

   // オブジェクトに新しいプロパティを追加する場合は、以下のようにする
   object.price = 500;
   console.log(object); // 結果：{name: "tea", size: 350, isHot: true, toppings: Array(3), nutrition: {…}, price: 500}
   
/** 【6】 nullとundifined */
   let undifined; // 値が未定義の変数
   let nullValue = null; // 値がnullの変数
   console.log(undifined); // 結果：undefined
   console.log(nullValue); // 結果：null

   // nullとundifinedの違い
      /*
       nullは、値が「何もない」という意味(明示的に「何もない」ということを示す)
       undifinedは、値が「未定義」という意味
       例えば、変数に値を入れていない場合は、undifinedになる
       逆に、値をクリアしたい場合は、nullにする
      */

/** type of　演算子 */
   console.log(typeof string1); // 結果：string
   console.log(typeof number); // 結果：number
   console.log(typeof bool); // 結果：boolean
   console.log(typeof array); // 結果：object
   console.log(typeof object); // 結果：object
   console.log(typeof undifined); // 結果：undifined
   console.log(typeof nullValue); // 結果：object
   /* 
    nullは、objectと表示されるが、これはJSのバグであり、nullはobjectではない
    nullは、null型である
    配列は、object型と表示されるが、これはJSの仕様であり、配列はobject型である
    undifinedは、undifined型である
   */