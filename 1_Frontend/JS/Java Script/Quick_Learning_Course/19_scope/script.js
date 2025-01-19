/**
 * 変数や定数にアクセスできる範囲 */


function example(parameter_one, parameter_two) {
    let result = parameter_one + parameter_two
    return result
}

console.log(result) // 「result is not difined」となる
/*
{ブロック文}で定義した変数や定数はその{ブロック文内}でしか使えない
*/