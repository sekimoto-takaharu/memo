/**
 * Switch文 */

let condition = "Apple"

switch(condition) {
    case "Apple": {
        console.log("conditionがAppleの場合に表示されます")
        break //break文がないと処理が下に続くため、注意！
    }

    case "Banana": {
        console.log("conditionがBananaの場合に表示されます")
        break
    }

    case "Grape": {
        console.log("conditionがGrapeの場合に表示されます")
        break
    }

    default: {
        console.log("conditionがAppleやBananaやGrape以外の場合に表示されます")
        break
    }
}
