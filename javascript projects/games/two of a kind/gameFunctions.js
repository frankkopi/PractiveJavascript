/**
 * Created by Lenovo on 06-03-2016.
 */

    var count = 0;
    var continueGame = true;
    var turnedPieces = [];

    function testHowManyTurned(element) {
        count++;
        if (continueGame) {
            if (count < 2){
                turnSquare(element.id);
                turnedPieces.push(element);
            }
            else {
                continueGame = false;
                turnSquare(element.id);
                turnedPieces.push(element);
                evaluatePieces();
            }
        }
        else {
            console.log("game stopped");
        }
    }

    function turnSquare(id) {
        var square = document.getElementById(id);
        switch(id) {
            case 'square1':
                transformElement(square, 'background1');
                break;
            case 'square2':
                transformElement(square, 'background2');
                break;
            case 'square3':
                transformElement(square, 'background1');
                break;
            case 'square4':
                transformElement(square, 'background2');
                break;
            case 'square5':
                transformElement(square, 'background3');
                break;
            case 'square6':
                transformElement(square, 'background3');
                break;
        }
    }

    // rotates the element and changes the background color
    function transformElement(elem, cssClass) {
        elem.style.transition = 'transform .2s linear 0s';
        elem.style.transform = 'rotateY(180deg)';
        setTimeout(function(){
            elem.className = cssClass;
        }, 100);
    }

    function evaluatePieces() {
        setTimeout(function(){
            console.log(turnedPieces);
            var name1 = turnedPieces[0].getAttribute('name');
            var name2 = turnedPieces[1].getAttribute('name');
            if (name1 === name2) {
                turnedPieces[0].style="display: none";
                turnedPieces[1].style="display: none";
                count = 0;
                continueGame = true;
                turnedPieces.length = 0;
            }
            else {
                var kids = document.getElementById('center').children;
                for (var i = 0; i < kids.length; i++) {
                    kids[i].className = 'defaultBg';
                    kids[i].style.transform = '';
                    count = 0;
                    continueGame = true;
                    turnedPieces.length = 0;
                }
            }
        }, 1000);
    }