/**
 * Created by Lenovo on 04-03-2016.
 */

// see this link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call

// Using call to invoke a function and specifying the context for 'this'
// In below example, when we will call greet the value of this will be bind to object i.

function greet() {
    var reply = [this.person, 'Is An Awesome', this.role].join(' ');
    console.log(reply);
}

var i = {
    person: 'Douglas Crockford', role: 'Javascript Developer'
};

// invoking the greet function with call.
// i will be (the calling object) this, in the greet function.
greet.call(i); // Douglas Crockford Is An Awesome Javascript Developer