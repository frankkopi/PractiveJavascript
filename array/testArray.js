/**
 * Created by Lenovo on 04-03-2016.
 */
var array = [];
array.unshift('tove', 3, 'lis', 'tove', 4, 5, 'tove');
console.log(array);


array.forEach(function(element, index, array){
    console.log(" at index: " + index + "  element: " + element + "\t\t [ " + array + " ]");
});

var mapArray = [1, 2, 3, 4].map(function(element, index, theArrayItself){
    return(element * element);
});
console.log(mapArray);

var filterArray = [1, 2, 3, 4].filter(function(element, index, theArrayItself){
    return element > 2;
});
console.log(filterArray);

var filterArray2 = array.filter(function(element, index, array){
    if (typeof element === 'string'){
        return element;
    }
});
console.log(filterArray2);

var bool = array.some(function(element, index, array){
    return typeof element === 'number';
});
console.log(bool);

var bool2 = array.every(function(element, index, array){
    typeof element === 'string';
});
console.log(bool2);


var index1 = array.indexOf('4');
var index2 = array.indexOf('tove', 4);
var slice1 = array.slice(3);
var slice2 = array.slice(2, 5);
var splice1 = array.splice(2);
var splice2 = array.splice(2, 4);



