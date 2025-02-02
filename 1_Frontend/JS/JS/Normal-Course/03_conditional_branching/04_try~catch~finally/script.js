/** 
try ~ catch文 
*/

// tryブロック内でエラーが発生すると、catchブロックが実行される
let result = 0;
try {
    // 例外を発生させる
    console.log(results); // ここでエラーが発生(変数resultsは定義されていない)→catchブロックが実行される
    console.log('この行は実行されません');
    }
    catch (error) {
    // エラーが発生した場合の処理
    console.log(error.message);
    }
    finally {
    // どちらの場合でも実行される処理
    console.log('処理が完了しました');
}
//ただし、実行部分でのエラーを拾うが、構文エラーは拾えない


try {
    throw new Error('エラーが発生しました'); // throw文は、例外を発生させる
    console.log('この行は実行されません');
    return;
    }
    catch (error) {
    console.log(error.message);
    }
    finally {
    console.log('処理が完了しました');
}