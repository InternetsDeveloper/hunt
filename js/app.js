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
    var gameOver;

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

    //-- SVG --
    var duckSVG = '<?xml version="1.0" encoding="iso-8859-1"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" class="duck-svg" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="107.59px" height="107.59px" viewBox="0 0 107.59 107.59" style="enable-background:new 0 0 107.59 107.59;" xml:space="preserve"><g> <g> <path id="path5050" d="M96.264,34.699c-3.347-2.532-2.761,11.526-21.229,13.686c-6.061,0.707-11.467,0.123-16.271-1.017 c-3.056-0.717-3.266-2.931-1.117-5.208c4.146-4.382,6.692-10.292,6.692-16.804c0-13.518-10.953-24.47-24.467-24.47 c-9.802,0-18.25,5.758-22.158,14.075c-1.331,2.842-4.267,4.793-7.355,4.272C4.308,18.213,0,18.525,0,24.396 c0,5.9,7.381,11.777,16.339,16.008c2.835,1.335,2.868,3.211,0.267,4.966C7.755,51.313,1.925,61.412,1.925,72.876 c0,18.295,14.928,31.224,33.129,33.126c25.834,2.701,56.48-1.725,68.054-24.964C111.389,64.409,107.671,43.343,96.264,34.699"/> </g></g></svg>';
    var bulletSVG = '<?xml version="1.0" encoding="iso-8859-1"?><!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" class="bullet-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"   viewBox="0 0 372.166 372.166" style="enable-background:new 0 0 372.166 372.166;" xml:space="preserve"><g>  <path d="M163.583,97.152h-3.641c-0.569-28.537-5.443-56.891-14.508-84.368l-2.609-7.909C141.863,1.959,139.154,0,136.083,0    c-3.071,0-5.781,1.959-6.742,4.875l-2.609,7.909c-9.065,27.477-13.938,55.832-14.508,84.368h-3.641v48.075l-11.749,30.56v179.012    h78.497V175.787l-11.748-30.56V97.152z M152.583,108.312v32.676h-33v-32.676H152.583z M117.769,151.988h36.628l7.427,19.32h-51.483    L117.769,151.988z M136.083,19.621c7.997,25.302,12.312,51.338,12.856,77.532h-25.711 C123.771,70.958,128.086,44.923,136.083,19.621z M107.834,343.799V182.308h56.497v161.491H107.834z"/><rect x="96.834" y="361.166" width="78.497" height="11"/></g></svg>';

    //-- Game Vars --
    var lvlTimer;
    var bullets = 0;
    var kimScore = 0;

    //--==== Initialize Start ====--
    $('#main').animate({
        opacity: 0
    }, 0).css({
        'background-image': 'url(\'../images/background.png\');'
    }).animate({
        opacity: 1
    }, 2300);

    timeoutSet(function () {
        wave(lvlParams[currentLevel][0], lvlParams[currentLevel][1]);
    }, 2300);

    //--==== Initialize Play Sound ====--

    function startPlay() {
        soundManager.setup({
            url: 'js/soundmanager/script/swf',
            flashVersion: 9,
            onready: function () {
                var gameSound = soundManager.createSound({
                    'id': 'aSound',
                    'multiShotEvents': true
                });
            }
        });
    }

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

});
//--==== Add / Subtract Bullets ====--
function hitsBullets(totesKims, numBullets) {
    var totesBullets = totesKims + numBullets
    bullets = totesBullets;
    console.log("Bullets left inside hitsBullets", bullets);

    //-- Number of Ducks --
    for (i = 0; i < totesKims; i++) {
        $('.kims').append(duckSVG);
    }

    //-- Number of Bullets --
    for (i = 0; i < bullets; i++) {
        $('.shots').append(bulletSVG);
    }

    //-- Calculating Shots Left --
    $("#main").off("click");
    $("#main").on("click", function () {

        bullets--;

        var bulletsLeft = $("svg.bullet-svg");
        for (i = totesBullets; i > bullets; i--) {
            $(bulletsLeft[i - 1]).css({
                "fill": "#333"
            });
        }

        if (bullets === 0) {
            $("#main").off("click");
            $(".kims").off("click");
            console.log("Like, you are totally out of bullets");
        }

    })
}


//--==== Initialize Scoring ====--
function score(totesKims, numBullets) {
    var totesBullets = totesKims + numBullets;
    var bulletsLeft = totesBullets;
    numOfKims = 0;

    //--==== Quack on click ====--
    $(".kims").one("click", function () {
        soundManager.createSound({
            url: 'sounds/quack.mp3'
        }).play();
        kimScore += 500;
        numOfKims++;

        //-- numOfKims = (kimScore / 500); --
        $(".score").html(duckScore);

        var greenDucks = $("svg.duck-svg");
        for (i = 0; i < numOfKims; i++) {
            $(greenDucks[i]).css({
                "fill": "#0f0"
            });
        }

        //--==== CheckScore / Clear Timer ====--     
        if (numOfKims == totesKims) {
            clearTimeout(lvlTimer);
            lvlComplete(totesKims, numOfKims);
        }
    });
}

//--==== Game Winning Color ====--
function random_hsl_color() {
    var hsl = "hsl(" + (Math.random() * 360) + " , 80%, 50%)";
    return hsl;
}

//--==== Level Complete Message / Options ====--

function lvlComplete(numOfKims, bullets) {
    currLvl++;

    console.log(currPlayer + " is the Current Shooter");
    if (currLvl < lvlParams.length) {
        $("#main").html('<a class="button" id="lvlUp">FOR REALS! NEXT LEVEL!</a>');
        $("#main").append('<a class="button whatevs" id="whatevs">Whatevs..I\'m out</a>');
        $("#main a#lvlUp").on("click", function () {
            console.log("Like, Start the Next Level");
            $('.shots').html("");
            $('.kims').html("");
            $("#main").html("");
            setTimeout(function () {
                wave(lvlParams[currLvl][0], lvlParams[currLvl][1]);
            }, 1000);
        });

        //--==== Quit Message / Button ====--
        $("#main a#whatevs").on("click", function () {
            $("#main").html('<h3 class="really">OMG! Like, really?</h3>');
            $("#main").append('<a href="" class="button whatevs" id="cantEven">I can\'t even</a>');

            //--==== Initialize Quit ====--
            $("#main a#cantEven").on("click", function () {
                console.log("Like, Start Next");
                $('.shots').html("");
                $('.kims').html("");
                $("#main").html("");
                setTimeout(function () {
                    wave(lvlParams[currLvl][0], lvlParams[currLvl][1]);
                }, 1000);
            });

            //--==== Play Button ====--
            $("#main").append('<a class="button whatevs" id="wait">Omg! Like, hold on! I need to play</a>');

            //--==== Initialize Continue Playing ====--
            $("#content a#wait").on("click", function () {
                console.log("Like, Start Next Level!");
                $('.shots').html("");
                $('.kims').html("");
                $("#main").html("");
                setTimeout(function () {
                    wave(lvlParams[currLvl][0], lvlParams[currLvl][1]);
                }, 1000);
            });
        });
    } else {
        //--==== Initialize Player 2 ====--
        if (currPlayer == plrOne) {
            $("#main").html('<a class="button" id="plr-2">Player Two - totally pay attention .. you\'re up!</a>');
            plrOneScore = kimScore;

            //--==== Score Reset - Player 2 / ====--
            currLvl = 0;
            currPlayer = plrTwo;
            console.log("You should hurry before Yeezy gets home:" + currPlayer);

            //--==== Player 2 Start Game ====--
            $("#main a#plr-2").on("click", function () {
                console.log("START");
                $('.shots').html("");
                $('.kims').html("");
                $("#main").html("");
                $(".score").html("0");
                kimScore = 0;
                setTimeout(function () {
                    wave(lvlParams[currLvl][0], lvlParams[currLvl][1]);
                }, 1000);
            });
        } else {

            //--==== Show Scores ====--
            $("#main").html("<h1>The Winner is..</h1>");
            $("#main").append("<h3>Player One: " + plrOneScore + "</h3>");
            $("#main").append("<h3>Player Two: " + kimScore + "</h3>");

            //--==== Player 1 wins ====--
            if (plrOneScore > kimScore) {
                setInterval(function () {
                    $("#main").css({
                        "background": random_hsl_color
                    });
                }, 100);
                $("#main").append("<h1>PLAYER ONE WINS!</h1>");
                soundManager.createSound({
                    url: 'sounds/airhorn.mp3',
                    "loops": 2
                }).play();
                $("#main").append(airhorn + airhorn + airhorn + airhorn + airhorn);
                $("#main").append('<a href="" class="button" id="refresh">Click to refresh</a>');
            }
            //--==== Player 2 wins ====--
            else if (kimScore > plrOneScore) {
                setInterval(function () {
                    $("#main").css({
                        "background": random_hsl_color
                    });
                }, 100);
                $("#main").append("<h1>PLAYER TWO WINS!</h1>");
                soundManager.createSound({
                    url: 'sounds/airhorn.mp3',
                    "loops": 2
                }).play();
                $("#main").css({
                    "background": random_hsl_color
                });
                $("#main").append(airhorn + airhorn + airhorn + airhorn + airhorn);
                $("#main").append('<a href="" class="button" id="refresh">Click to refresh</a>');
            }
            //--==== Tie ====--
            else {
                $("#main").append("<h1>It's a tie. One of you step up your game!</h1>");
            }
        }
    }
}
//--====== End of Doc Ready ======--
});
