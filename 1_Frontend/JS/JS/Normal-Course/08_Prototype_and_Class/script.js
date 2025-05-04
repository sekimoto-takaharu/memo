/**
プロトタイプとクラス
*/

/* プロトタイプチェーン */
const obj = {
    a: 1,
    b: 2,
    c:5,
    prototype: p1
}
const p1 = {
    c:3,
    d:4
}
console.log(obj.c); // 5

