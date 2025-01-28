/**
【変数】
*/

/**
console.log(count); // 宣言前に変数にアクセスすることはできないため、エラーが起きる。 
*/
let count; // 変数宣言という。変数を宣言する場合は、「let」を用いる。この状態だと、countはundifiuned(未定義)となる。
console.log(count); // undifined

/* countは１回letで宣言しているので、２回目以降にletで宣言はできないため、２回目はletをつけない */
count = 0; // countに0を代入すると言う。文の終わりに「;(セミコロン)」を入れると良い。
console.log(count); // 0

count = 30; // countを0→30に上書きした。
console.log(count); // 30