/**
 * Class */

class Car {
    constructor(name, company){
        this.name = name
        this.company = company
    }
    run(){
        console.log("run")
    }
    stop(){
        console.log("stop")
    }
}
/*
インスタンスを作る(クラスから作ったオブジェクトのこと)
いくらでもインスタンスを作ることはできる
*/
let car_one = new Car("Takaharu","Nissan")
let car_two = new Car()
let car_three = new Car()

console.log(car_one)
console.log(car_two)
console.log(car_three)
car_one.run()
car_one.stop()
console.log(car_one.name)
console.log(car_one.company)