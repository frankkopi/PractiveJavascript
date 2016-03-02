/**
 * Created by Lenovo on 28-02-2016.
 */

function toggleClass(element){
    if (element.className === 'class1'){
        element.className = 'class2';
    }
    else
    {
        element.className = 'class1';
    }
}

function toggleClass2(element){
    var kids = document.getElementById('menu1').children;
    for (var i = 0; i < kids.length; i++){
        kids[i].className = "class1";
    }
    element.className = 'class2';
}