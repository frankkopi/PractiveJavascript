/**
 * Created by Lenovo on 28-02-2016.
 */

    //Box1: transition (animation) on the background color of an element
    function changeBG(id, newColor){
        var elem = document.getElementById(id);
        // transition will make an animation from one style to another style
        // transition properties are: the target, duration time of the transition, tween of animation , delay time
        elem.style.transition = "background 1.0s linear 0s";
        elem.style.backgroundColor = newColor;
    }


    //Box2: transition (animation) on an elements opacity. Fade in and Fade out
    function fadeOut(id){
        var elem = document.getElementById(id);
        elem.style.transition = "opacity 1.0s linear 0s";
        elem.style.opacity = 0;
    }

    function fadeIn(id){
        var elem = document.getElementById(id);
        elem.style.transition = "opacity 1.0s linear 0s";
        elem.style.opacity = 1;
    }


    //Box3: transition (animation) on an elements height. Slide open and slide closed
    function slideOpen(id){
        var elem = document.getElementById(id);
        elem.style.transition = "height 1.0s linear 0s";
        elem.style.height = "100px";
    }

    function slideClosed(id){
        var elem = document.getElementById(id);
        elem.style.transition = "height 1.0s linear 0s";
        elem.style.height = "0px";
    }


    //Box4: transition (animation) on an elements left property
    function slideIn(id){
        var elem = document.getElementById(id);
        elem.style.transition = "left 1.0s linear 0s";
        elem.style.left = "57px";
    }

    function slideOut(id){
        var elem = document.getElementById(id);
        elem.style.transition = "left 1.0s linear 0s";
        elem.style.left = "-200px";
    }
