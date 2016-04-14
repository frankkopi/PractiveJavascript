/**
 * Created by Lenovo on 04-03-2016.
 */
function myFunction(age) {
    var age = age;
    console.log("Hello my name is " + this.name);
    console.log(age);           // logs 40
    console.log(this.age);      // logs 30
    console.log(this.favFood);  // logs pizza
}

var person = {
    name: 'frank',
    age: 30,
    favFood: 'pizza'
};

// when passing the person object as the first argument to call().
// In myFunction, the this keyword will be the person object
myFunction.call(person, 40);



function myFunction2() {
    console.log("This is myFunction2");
    console.log("Hello my name is " + this.name);
    console.log(this.age);
    console.log(this.favFood);
}


var person2 = {
    name: 'kurt',
    age: 50,
    favFood: 'fish',
    printInfo: function(){
        myFunction2.call(this); // passing the object itself (person2) as the first argument to call().
    }
};

person2.printInfo();