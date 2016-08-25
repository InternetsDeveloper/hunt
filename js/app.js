$(document).ready(function () {

    //--==== Initialize Music ====--
    soundManager.createSound({
        url: 'sounds/music.mp3'
    }).play();

    //--==== VAR sets ====--

    //-- Level --
    var currLvl = 0;
    var lvlParams = [[3, 5],
                            [4, 3],
                            [3, 1]];
    //-- PLayer --
    var plrOne = 'Player One';
    var plrTwo = 'Player Two';
    var currPlayer = plrOne;

    //-- The Kims --
    var cryKim = '<img class="kim" src="images/kim-crying.png" />';
    var numOfKims = 0;
    var flyKim1 = ({
        "left": "40%",
        "top": "-20%"
    });
    var flyKim2 = ({
        "left": "0%",
        "right": "-20%"
    });

    //--==== Initialize Start ====--
    $('#main').animate({
        opacity: 0
    }, 0).css({
        'background-image': 'url(\'../images/background.png\');'
    }).animate({
        opacity: 1
    }, 2300);

    timeoutSet(function () {
            wave(lvlParams[currentLevel][0], lvlParams[currentLevel[1]);
            }, 2300);


        //--==== Kim Flight Patterns / Animation Seq ====--

        function animateKim(newKim) {
            var kimAnimate = (Math.floor(Math.random() * 10));
            switch (kimAnimate) {

                case 0:
                    newKim.animate({
                        "left": "85%",
                        "top": "50%"
                    }, 2000, "swing").delay(700).animate({
                        "left": "50%",
                        "top": "20%"
                    }, 1000, "swing").delay(500).animate({
                        "top": "50%",
                        "left": "10%"
                    }, 1250, "swing").delay(600).animate(flyKim1, 400, "swing");
                    break;

                case 1:
                    newKim.animate({
                        "left": "35%",
                        "top": "30%"
                    }, 1500, "swing").delay(650).animate({
                        "left": "20%",
                        "top": "35%"
                    }, 950, "swing").delay(900).animate({
                        "left": "70%",
                        "top": "67%"
                    }, 1000, "swing").delay(600).animate(flyKim1, 400, "swing");
                    break;

                case 2:
                    newKim.animate({
                        "left": "25%",
                        "top": "60%"
                    }, 1500, "swing").delay(500).animate({
                        "left": "20%",
                        "top": "35%"
                    }, 800, "swing").delay(900).animate({
                        "left": "70%",
                        "top": "67%"
                    }, 1000, "swing").delay(300).animate(flyKim1, 400, "swing");
                    break;

                case 3:
                    newKim.animate({
                        "left": "25%",
                        "top": "40%"
                    }, 1500, "swing").delay(700).animate({
                        "left": "70%",
                        "top": "27%"
                    }, 1500, "swing").delay(500).animate({
                        "top": "36%",
                        "left": "10%"
                    }, 1250, "swing").delay(600).animate({
                        "left": "50%",
                        "top": "15%"
                    }, 1500, "swing").delay(750).animate(flyKim2, 400, "swing");
                    break;

                case 4:
                    newKim.animate({
                        "left": "0%",
                        "top": "20%"
                    }, 1500, "swing").delay(650).animate({
                        "left": "60%",
                        "top": "40%"
                    }, 1450, "swing").delay(900).animate({
                        "left": "60%",
                        "top": "80%"
                    }, 1000, "swing").delay(600).animate({
                        "left": "80%",
                        "top": "5%"
                    }, 1000, "swing").delay(750).animate(flyKim2, 400, "swing");
                    break;

                case 5:
                    newKim.animate({
                        "left": "35%",
                        "top": "60%"
                    }, 1500, "swing").delay(500).animate({
                        "left": "20%",
                        "top": "35%"
                    }, 800, "swing").delay(900).animate({
                        "left": "10%",
                        "top": "57%"
                    }, 1000, "swing").delay(300).animate({
                        "left": "20%",
                        "top": "15%"
                    }, 1500, "swing").delay(750).animate(flyKim2, 400, "swing");
                    break;

                case 6:
                    newKim.animate({
                        "left": "30%",
                        "top": "10%"
                    }, 1700, "swing").delay(1000).animate({
                        "left": "30%",
                        "top": "66%"
                    }, 1000, "swing").delay(500).animate({
                        "top": "63%",
                        "left": "1%"
                    }, 1250, "swing").delay(600).animate({
                        "left": "29%",
                        "top": "45%"
                    }, 1500, "swing").delay(750).animate(flyKim2, 400, "swing");
                    break;

                case 7:
                    newKim.animate({
                        "left": "25%",
                        "top": "33%"
                    }, 1500, "swing").delay(700).animate({
                        "left": "70%",
                        "top": "27%"
                    }, 1500, "swing").delay(500).animate({
                        "top": "36%",
                        "left": "10%"
                    }, 1250, "swing").delay(600).animate({
                        "left": "50%",
                        "top": "15%"
                    }, 1500, "swing").delay(750).animate(flyKim2, 400, "swing");
                    break;

                case 8:
                    newKim.animate({
                        "left": "0%",
                        "top": "25%"
                    }, 1500, "swing").delay(650).animate({
                        "left": "60%",
                        "top": "40%"
                    }, 1450, "swing").delay(900).animate({
                        "left": "60%",
                        "top": "80%"
                    }, 1000, "swing").delay(600).animate({
                        "left": "80%",
                        "top": "47%"
                    }, 1000, "swing").delay(750).animate(flyKim2, 400, "swing");
                    break;

                case 9:
                    newKim.animate({
                        "left": "35%",
                        "top": "80%"
                    }, 1500, "swing").delay(500).animate({
                        "left": "20%",
                        "top": "35%"
                    }, 800, "swing").delay(900).animate({
                        "left": "15%",
                        "top": "80%"
                    }, 1500, "swing").delay(300).animate({
                        "left": "60%",
                        "top": "23%"
                    }, 1000, "swing").delay(750).animate(flyKim2, 400, "swing");
                    break;

                    //-- end of Switch --
            }
            //--== end of animateKim func ==--
        }

    }

    //--====== End of Doc Ready ======--
});
