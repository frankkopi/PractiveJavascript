/**
 * Created by Lenovo on 04-03-2016.
 */
// super class
function Animal(name, color) {
    this.name = name;
    this.color = color;
    this.isAlive = true;
}

// Dog class
// when invoking the Animal.call(), the this keyword in Animal will be the new empty dog object
function Dog(name, color, breed) {
    Animal.call(this, name, color);
    this.breed = breed;
}

// new (new keyword) will call the constructor and this (this keyword) will be the new empty dog object
var dog = new Dog('fido', 'white', 'beagle');
var dog2 = new Dog('halifax', 'black', 'german shepard');
console.log(dog);



// GuardDog class inherits from Dog
function GuardDog(name, color, breed, weight){
    Dog.call(this, name, color, breed);
    this.weight = weight;
}

var dog3 = new GuardDog('tarzan', 'brown', 'bulldog', 30);
console.log(dog3);