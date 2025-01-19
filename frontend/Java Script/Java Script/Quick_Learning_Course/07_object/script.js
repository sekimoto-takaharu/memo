/**
 * オブジェクト */

/* 
    キーと値をセットで持つことができるのがオブジェクト
    キーと値のセットでプロパティと言う

*/

let object = {
    name: "Takaharu", 
    age: 24,
    gender: "male"
}

//ドットをつけてキー名を入れると値を取得できる
 console.log(object.age) // 24


// プロパティを変更したい場合も、「存在するオブジェクト名.存在するキー名 = 変更後の値」とすれば良い
object.age = 25
console.log(object.age) // 25

// 新しくプロパティを作成する場合は、「存在するオブジェクト名.存在しないキー名 = 新しく追加する値」とすれば良い
object.prefecture = "Saitama"

console.log(object)
/*
age: 25
gender: "male"
name: "Takaharu"
prefecture: "Saitama"
*/

// キー名と値が同じ識別子だった場合は、それだけ書けば良い
let object_two = {
    name
} 
console.log(object_two)