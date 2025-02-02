// ①npm install -g typescript のコマンドで TypeScript をインストール
var hello = "hello";
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
*/
// ①
function add(a, b) {
    return a + b;
}
add(1, 2);
// ③
var car = /** @class */ (function () {
    function car() {
    }
    return car;
}());
