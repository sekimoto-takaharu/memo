/**
 * アロー関数 */


let arrow_function = (parameter_one, parameter_two) =>
{
    let result = parameter_one + parameter_two
    return result
}
console.log(arrow_function(3,5)) //8

/*
アロー関数の特徴
①引数が１つの場合は　（）を省略可能(例:arrow_function_one)
②{}内が単一の式がreturn文の場合は{}とreturnを省略できる
*/

let arrow_function_one = a =>
{
    let result = a**a
    return result
}
console.log(arrow_function_one(2)) //4

let arrow_function_two = a => a**a
console.log(arrow_function_two(3)) //27