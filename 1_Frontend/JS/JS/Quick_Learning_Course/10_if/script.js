/**
 * if文 */

let condition = true
if(condition)
{
    console.log("trueの場合の処理")
} else {
    console.log("falseの場合の処理")
}

let condition_one = true
let condition_two = false

if(condition_one) {
    console.log("condition_oneが、trueの場合の処理")
} else if(condition_two) {
    console.log("condition_oneが、falseで、condition_twoがtrueの処理")
} else {
    console.log("condition_oneとcondition_twoのどちらもfalseの場合の処理")
}