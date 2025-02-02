/**
オブジェクトの高度な機能
*/


/** オブジェクトのキーに入れられるものの種類とそのアクセス方法 */
    const interest = 'interest';
    const object = {
        name: '太郎',
        age: 25,
        const: 'const', // 予約語をプロパティ名に使うことができる
        'hello world' : 'こんにちは', // プロパティ名に文字列(空白有)を使うことができる
        1: 'one', // プロパティ名に数値のみであれば、使うことができる(マイナスは使えない)
        0.2 : '0.2', // プロパティ名に小数使うことができる
        [interest]: 'three', // プロパティ名に式を使うことができる
    };

    // オブジェクトへのアクセスの仕方
    console.log(object.name); // 太郎
    console.log(object.age); // 25
    console.log(object.const); // const
    console.log(object['hello world']); // こんにちは
    console.log(object[1]); // one
    console.log(object[0.2]); // 0.2
    console.log(object[interest]); // three

    /**
     * オブジェクトのキーは基本的に「string」型である
     * []を使うことで、string型に変換してから、アクセスすることができる
     * 
     * <オブジェクト名>.<プロパティ名> でアクセスする場合は、プロパティ名が変数名として使えるものである必要がある
    */

/** オブジェクトのキーや値やその両方を配列で取得する方法 */
    console.log(Object); // Objectは組み込みオブジェクト 
    console.log(Object.keys(object)); // オブジェクトのキーを配列で取得する 
    // 上と同じことを、「for ~ of」でできる
    for(const key of Object.keys(object)) {
        console.log(key);
    }

    // 値を返す場合は、
    console.log(Object.values(object));

    // キーと値を返す場合は、
    console.log(Object.entries(object));

/** キーの順番 */
    // キーの順番は、「数字の昇順→それ以外の定義した順番」になる

/** オブジェクトのプロパティの削除 */
    delete object.age;
    console.log(object); // ageが削除されている

/** オブジェクトの省略記法 */
    const hello = 'hello';
    const goodbye = 'goodbye';
    const object2 = {
        hello: hello,
        goodbye: goodbye,
    }
    // 上記のコードは、以下のように省略できる
    const object3 = {
        hello,
        goodbye,
    }
    console.log(object2); 
    console.log(object3); 

/** スプレッド構文 */
    const object4 = {
        hello: 'hello',
        goodbye: 'goodbye',
    }
    const object5 = {
        ...object4,
        thank: 'thank',
    }

    console.log(object5); // {hello: "hello", goodbye: "goodbye", thank: "thank"}

/** オブジェクトのコピー */
    const object6 = {
        hello: 'hello',
        goodbye: 'goodbye',
    }
    const object7 = object6; // 参照渡し
    object7.hello = 'こんにちは';

    console.log(object6); // {hello: "こんにちは", goodbye: "goodbye"}
    console.log(object7); // {hello: "こんにちは", goodbye: "goodbye"}

    // 参照渡しを避けるためには、スプレッド構文を使う
    const object8 = {
        hello: 'hello',
        goodbye: 'goodbye',
        example: {
            example1: 'example1',
            example2: 'example2',
        }
    }
    const object9 = {
        ...object8, // スプレッド構文を使うことで、コピーを作成する
    }

    object9.hello = 'こんにちは';
    console.log(object8); // {hello: "hello", goodbye: "goodbye", example: {…}}
    console.log(object9); // {hello: "こんにちは", goodbye: "goodbye", example: {…}}



/** オブジェクトの拡張 */
    const object10 = {
        a: 1,
        c: 5,
    }
    const object11 = {
        a: 2,
        b: 3,
    }
    const object12 = {
        a : 0,
        b : 0,
        c : 0,
    }
    Object.assign(object10, object11); // object10にobject11を追加する
    console.log(object10); // {a: 2, c: 5, b: 3}

    Object.assign(object10, object11, object12); 
    console.log(object10); // {a: 0, c: 0, b: 0}


/** 分割代入 */
    const object13 = {
        a: 1,
        b: 2,
        c: 3,
    }
    const {a, b, c} = object13;
    console.log(a); // 1(const a = object13.a;と同じ)
    console.log(b); // 2(const b = object13.b;と同じ)
    console.log(c); // 3(const c = object13.c;と同じ)

    // 分割代入を使って、オブジェクトの中身を入れ替えることができる
    const {a: a1, b: b1, c: c1} = object13; // a1 = object13.a, b1 = object13.b, c1 = object13.c