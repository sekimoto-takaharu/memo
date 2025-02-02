/** 
【算術演算子】
*/

/** 足し算 */
let addition = 2 + 5;
console.log(addition); // 7 (2 + 5)

/** 引き算 */
let subtraction = 5 - 2;
console.log(subtraction); // 3 (5 - 2)

/** 掛け算 */
let multiplication = 3 * 5;
console.log(multiplication); // 15 (3 × 5)

/** 割り算 */
let division = 6 / 2;
console.log(division); // 3 (6÷2)


/** 余り */
let remainder = 16 % 3;
console.log(remainder); // 1 (16÷3の余り)

/** 累乗 */
let exponentiation  = 2 ** 3;
console.log(exponentiation); // 8 (2の3条)

/** 四則演算のルール */
let caluculate = 2 + 3 * 4;
console.log(caluculate); // 14 (掛け算・割り算が先に行われる)

let caluculate2 = (2 + 3) * 4;
console.log(caluculate2); // 20(括弧が先)




/** 
 * プログラミング特有の演算子 */

    /** 足し算の省略記法 */
    let result = 5
    result = result + 3;
    console.log(result); // 5 + 3

    let result2 = 5
    result2 +=  3;
    console.log(result2); // 8 (L40と同じ処理)

    /** 引き算の省略記法 */
    let result3 = 5;
    result3 = result3 - 3;
    console.log(result3); // 2 (5-3)

    let  result4 = 5;
    result4 -= 3;
    console.log(result4); // 2 (L44と同じ処理) 

    /** 掛け算の省略記法 */
    let result5 = 5;
    result5 = result5 * 3;
    console.log(result5); // 15

    let result6 = 5;
    result6 *= 3;
    console.log(result6); // 15 (L59と同じ処理)

    /** 割り算の省略記法 */
    let result7 = 15;
    result7 = result7 / 3;
    console.log(result7); // 5

    let result8 = 15;
    result8 /= 3;
    console.log(result8); // 5 (L68と同じ)

    /** 累乗の省略記法 */
    let result9  = 5;
    result9 = result9 ** 3;
    console.log(result9); // 125 (5の3乗)

    let result10 = 5;
    result10 **= 3;
    console.log(result10); // 125 (L82と同じ)


    /** +1の省略記法 */
    let result11 = 15;
    result11 = result11 + 1;
    console.log(result11); // 16 (15+1)

    let result12 = 15;
    console.log(result12++); // 15 (+1する前の値)

    let result13 = 15;
    console.log(++result13); // 16 (+1した後の値を返す)

    /** -1の省略記法 */
    let result14 = 15;
    result14 = result14 - 1;
    console.log(result14); // 14 (15-1)

    let result15 = 15;
    console.log(result15--); // 15 (-1する前の値を返す)

    let result16 = 15;
    console.log(--result16); // 14 (-1した後の値を返している)