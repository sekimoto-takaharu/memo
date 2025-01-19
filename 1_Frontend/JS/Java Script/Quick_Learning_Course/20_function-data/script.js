/**
 * 関数はデータ化できる */

function example(parameter_one, parameter_two) 
{
    let result = parameter_one + parameter_two
    return result
}

let test = example; // 関数を変数として格納できる
console.log(test(3,4)) // 7

let test_two = function example(parameter_one, parameter_two) 
{
    let result = parameter_one + parameter_two
    return result
}
console.log(test_two(3,5)) // 8