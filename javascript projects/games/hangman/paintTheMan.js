/**
 * Created by Lenovo on 06-03-2016.
 */

    // images to draw the man hanging in the gallow
    var imageArray = ['gallow2.jpg', 'gallow3.jpg', 'gallow4.jpg', 'gallow5.jpg', 'gallow6.jpg',
        'gallow7.jpg', 'gallow8.jpg', 'gallow9.jpg', 'gallow10.jpg', 'gallow11.jpg', 'you_win.jpg'];

    // boolean to control the game
    var continueGame = true;

    // function which draws the man.
    var count = 0;
    function paint() {
        if (continueGame) {
            var element = document.getElementById('gallowPane');
            if (count >= 9) {
                // paint looser message
                element.style.backgroundImage = 'url(images/gallow11.jpg)';
                continueGame = false;
            } else {
                var image = imageArray[count];
                element.style.transition = 'background-image 1.0s linear 0s';
                element.style.backgroundImage = 'url(images/' + image + ')';
                count++;
            }
        }
    }

    function paintWinnerMessage() {
        var element = document.getElementById('gallowPane');
        element.style.transition = 'background-image 0.1s linear 0s';
        element.style.backgroundImage = 'url(images/you_win.jpg)';
        continueGame = false;
    }