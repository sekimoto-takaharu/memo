/**
 * push ・ map */

const array = 
[
    0,
    1,
    2
];

/*
array.push(parameter)は「配列(array)の最後にparameterを入れる
*/
array.push(3) //配列の最後に"3"を入れる
console.log(array)

/*
array.mapはarrayの要素に処理を加えて配列を返す
コールバック関数が必要
*/
let mapping_array = array.map((element) => {
    return element * 2;
});
console.log(mapping_array);