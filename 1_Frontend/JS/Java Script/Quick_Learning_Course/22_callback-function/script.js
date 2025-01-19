/**
 * コールバック関数 */

let callback_argument = function callback_parameter(callback_parameter_one, callback_parameter_two) 
{
    return callback_parameter_one + callback_parameter_two
}

let result = function callback_function(callback_argument)
{
    return callback_argument(1, 2) ** 2
} 

console.log(result(callback_argument)) // 9