// Class in ES

'use strict';

console.clear();

// Define class
class Animals {
    // Constructor
    constructor(name) {
        this.name = name;
    }

    // getter/setter methods
    get Name() {return this.name}
    set Name(value) {this.name = value != "duck" ? value : this.name}
    Talk() {console.log("Gâu Gâu ....")}
}

let animal = new Animals('Corgi');
console.log(animal)
animal.Name = "duck"
console.log(animal.name)

console.log("--------------------------")

class Corgi extends Animals {
    constructor(color) {
        super("Corgi")
        this.color = color
    }

    Talk() {console.log("Meoo Meoo ...")}
}

let dog = new Corgi('yellow')
console.log(dog)
dog.Talk()

dog.type = "big"
console.log(dog)