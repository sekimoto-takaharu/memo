/**
switch文と繰り返し処理
*/

/** switch文 */
    function vegetableColor(vegetable) {
        if(vegetable === 'tomato') {
            console.log('tomato is red!');
        } else if(vegetable === 'pumpkin') {
            console.log('pumpkin is orange!');
        } else if (vegetable === 'onion') {
            console.log('onion is white!');
        }
    }
    vegetableColor('tomato'); // tomato is red!

    // 上記のコードをswitch文で書き換える
    function vegetableColor(vegetable) { //ブロック文のため、この中で定義した変数は外から参照できない
        switch (vegetable) {
            case 'tomato': // caseの中はブロック文ではないため、スコープがない。スコープが欲しい場合は{}で囲む
                console.log('tomato is red!');
                break; // breakを書かないと次のcaseも実行されてしまう
            case 'pumpkin':
                console.log('pumpkin is orange!');
                break; // breakを書かないと次のcaseも実行されてしまう
            case 'onion':
                console.log('onion is white!');
                break;
            default: // どのcaseにも当てはまらない場合
                console.log('I don\'t know!');
        }
    }
    vegetableColor('tomato'); // tomato is red!


/** while文 */
    console.log(0);
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
    console.log(6);
    console.log(7);
    console.log(8);
    console.log(9);
    console.log(10);

    // 上記のコードをwhile文で書き換える

    let i = 0;
    while (i <= 10) { //()内の条件を満たす限り、{}内の処理を繰り返す
        console.log('while',i);
        i++;
    }


/** do ~ while文 */
    let j = 0;
    do {
        console.log('do-while', j); //とりあえず1回は処理を実行する
        j++;
    } while (j <= 10); //()内の条件を満たす限り、{}内の処理を繰り返す


/** for文 */
    for (let k = 0; k <= 10; k++) { //()内の条件を満たす限り、{}内の処理を繰り返す
        console.log('for', k);
    }

    // for文の中でbreakを使う
    for (let k = 0; k <= 10; k++) {
        if (k === 5) {
            break; // kが5になったら処理を終了する
        }
        console.log('for', k);
    }

    // for文の中でcontinueを使う
    for (let k = 0; k <= 10; k++) { // この３つの要素は省略できる(初期化式; 条件式; 更新式)
        if (k === 5) {
            continue; // kが5になったらその時点で処理をスキップする
        }
        console.log('for', k);
    }