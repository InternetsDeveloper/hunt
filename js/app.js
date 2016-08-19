$(document).ready(function () {

    //Initialize Music
    soundManager.createSound({
        url: 'sounds/music.mp3'
    }).play();

    //Initialize Start
    $('#main').animate({
        opacity: 0
    }, 0).css({
        'background-image': 'url(\'../images/background.png\');'
    }).animate({
        opacity: 1
    }, 2300);

    //End of Doc Ready
});
