/**
 * Created by Lenovo on 04-03-2016.
 */

// original classes
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
    this.isAlive = true;
}

function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}

function Emperor(name){
    this.name = name;
    this.saying = "Waddle Waddle";
}

// set up the prototype chain
// Penguin inherits from Animal and Emperor inherits from Penguin
Penguin.prototype = new Animal();
Emperor.prototype = new Penguin();

var emperor = new Emperor("Jules");

console.log(emperor.name);
console.log(emperor.saying);
console.log(emperor.numLegs);
console.log(emperor.isAlive);

