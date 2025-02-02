// ①npm install -g typescript のコマンドで TypeScript をインストール

let hello: string = "hello";
console.log(hello);

// ②tsc index.ts のコマンドでコンパイル
// ③node index.js のコマンドで実行

/** 
 * typeScriptを使う理由
 * ① ドキュメントとしての側面を利用するため
 *      ・型が明示されているため、コードの意図が明確になる
 * ② Linterとしての側面を利用するため 
 *     ・コードの品質を保つために、コードの書き方を統一する(実行時ではなく、コンパイラ時にエラーを検出できる)
 *     ・エディタでもエラーが出るため、効率的にコードを書くことができる
 * ③ ES5へのコンパイラとしての側面を利用するため
 *    ・ES5に変換することで、古いブラウザでも動作するコードを生成できる
*/

// ①
function add(a: number, b: number): number { // 引数と返り値の型を指定(全てnumber型)
    return a + b;
}
add(1, 2);

// ③
class car {}