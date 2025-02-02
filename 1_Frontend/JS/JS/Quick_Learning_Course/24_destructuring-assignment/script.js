/**
 * 分割代入 */

const object = 
{
    name: "Takaharu",
    age: 24,
    gender: "male"
}
// const year = object.age
// const gender = object.gender
const {age:year,gender} = object //分割代入(10-11行目と同じ処理)
console.log(year)
console.log(gender)


const array =
[
    "apple",
    "banana",
    "grape"
]

/*
const A = "apple"
const B = "banana"
const C = "grape"
*/

const [A,B,C] = array // 25-27行目と同じ処理を書いている
console.log(A) // "apple"
console.log(B) // "banana"
console.log(C) // "grape"