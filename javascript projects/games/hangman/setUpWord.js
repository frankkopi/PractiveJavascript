/**
 * Created by Lenovo on 06-03-2016.
 */

    var words = ['ELEPHANT', 'CAR', 'WEAPON', 'MOSQUITO'];
    var random = getRandomInt(0, 4);
    var word = words[random].split('');

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    for (var i = 0; i < word.length; i++) {
        var emptyLetter = document.createElement('DIV');// create a <div> element
        var t = document.createTextNode('_');           // create a text node
        emptyLetter.appendChild(t);                     // append the text to <div>
        emptyLetter.className = 'letter';               // give <div> the attribute class="letter"
        emptyLetter.id = i.toString();                           // give <div> the attribute id="the number of i";
        document.getElementById('word').appendChild(emptyLetter); // append <div> to <div> with id="word"
    }
