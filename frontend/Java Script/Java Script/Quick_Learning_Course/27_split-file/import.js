/**
 * ファイルを分割する */

import { example_add } from "./export.js";

let result = example_add(2,3)
console.log(result)

/*
エクスポートするファイルには、
export function ~~() {
    test()
}

と,
export　したいものの前に "export" を付ける

インポートするファイルには、
import { 関数名　　}　from "import先のパス名"

HTMLファイルには、

    <script src="import.js" type="module" defer></script>
のように
type = "module"
を入れる

また、セキュリティ上、ファイルプロトコルではなく、HTTPプロトコルを行うためには、Node.jsを入れる必要がある。
npm -v
で、バージョンが出なかったら、Node.jsが入っていない可能性がある。
*/