/**
 * 四則演算 */

let result =  6+2 // 足し算
console.log(result) //8

result =  6-2 // 引き算
console.log(result) //4

result =  6*2 // 掛け算
console.log(result) //12

result =  6/2 // 割り算
console.log(result) //3


/**
 * 左辺と右辺で同じ変数を使う計算 */

let self = 1
self = self+ 3
console.log(self) // 4 (∵ =1+3)

/**
 * 左辺と右辺で同じ変数を使う計算の省略記法 */

let omit_add = 3
omit_add += 3 //16行目と同じコード(自分の変数の値に3を足す)
console.log(omit_add) //6 (∵ = 3+3)

let omit_substract = 3
omit_substract -= 3 //16行目と同じコード(自分の変数の値に3を足す)
console.log(omit_substract) //0 (∵ = 3-3)

let omit_multiply = 3
omit_multiply *= 3 //16行目と同じコード(自分の変数の値に3を足す)
console.log(omit_multiply) //9 (∵ = 3×3)

let omit_devide = 3
omit_devide /= 3 //16行目と同じコード(自分の変数の値に3を足す)
console.log(omit_devide) //1 (∵ = 3÷3)



/**
 * 左辺と右辺で同じ変数を使う計算の省略記法(「+1」と「-1」) */ 

let add_add = 1
add_add++ // +1の省略記法
console.log(add_add) //2 (∵ 1+1)

let substract_substract = 1
substract_substract--
console.log(substract_substract) // 0 (∵ 1-1)