/**
ラベル文
 */

hello: {
    console.log('Hello');
    break hello; // ラベル文を抜ける
    console.log('World');
}
console.log('goodbye');

let object = {
    "one": "壱",
    "two": "弐",
    "three": "参",
    "four": "四",
    "five": "五",
};

JapaneseCondition:if(true) {
    for(const key in object) {
        if(key === 'four') {
            console.log('break JapaneseCondition');
            break JapaneseCondition;
        }
        console.log(object[key]);
        console.log('in JapaneseCondition');
    }
}
console.log('out JapaneseCondition');


let Shirine = {
    "三重県": "伊勢神宮",
    "奈良県": "春日大社",
    "京都府": "伏見稲荷大社",
    "東京都": "明治神宮",
    "神奈川県": "鎌倉鶴岡八幡宮",
};
if(true) {
    ShirineCondition:for(const key in Shirine) {
        if(key === '東京都') {
            console.log('continue ShirineCondition');
            continue ShirineCondition;
        }
        console.log(Shirine[key]);
        console.log('in ShirineCondition');
    }
}
console.log('out ShirineCondition');
