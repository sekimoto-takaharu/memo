/**
 * if文でよく使われる演算子 */

let condition = 27

// =の時は「===」を書く
if(condition === 26) {
    console.log("conditionが26の場合")
}

//　≠の場合は「!==」を書く
if(condition !== 26) {
    console.log("conditionが26以外の場合")
}

// >の場合
if(condition > 20) {
    console.log("conditionが20よりも大きい場合")
}

// ≥の場合
if(condition >= 20) {
    console.log("conditionが20以上の場合")
}

/* <の場合 */
if(condition < 30) {
    console.log("conditionが30より小さい場合")
}

// ≤の場合
if(condition <= 30) {
    console.log("conditionが30以下の場合")
}

// 「かつ」は&&で表現する
if(condition >20 && condition <30) {
    console.log("conditionが20より大きく、かつ30よりも小さい場合")
}

// 「または」は||で表現する
if(condition < 20 || condition >25 ) {
    console.log("conditionが20より小さいまたは、25より大きい場合")
}

// 真偽値を反転する場合は「!」を使う(trueがfalse、falseがtrueになる)

let boolean_one = false

if(!boolean_one) {
    console.log("booleanがfalseの場合に表示されます")
}
