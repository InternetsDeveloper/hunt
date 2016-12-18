$(document).ready(function () {
    // Starts the music
    soundManager.createSound({
        url: 'sounds/music.mp3'
    }).play();

    var airhorn = ('<img class="airhorn" src="images/airhorn.png" />');
    var singleDuck = '<img class="duck" src="images/duck.png" />';
    var flyAwayDuck1 = ({
        "left": "40%",
        "top": "-20%"
    });
    var flyAwayDuck2 = ({
        "left": "0%",
        "top": "-20%"
    });
    var gameOver;
    var playerOne = 'Player One';
    var playerTwo = 'Player Two';
    var currentPlayer = playerOne;
    var duckScore = 0;
    var levelTimer;
    var numOfDucks = 0;
    var bulletsLeft = 0;
    var currentLevel = 0;
    var levelParams = [[3, 5],
                      [4, 3],
                      [3, 1]];
    // levelParams[0][0] = l1 ducks
    // levelParams[0][1] = l1 bullets 
    var duckSVG = '<?xml version="1.0" encoding="iso-8859-1"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" class="duck-svg" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="107.59px" height="107.59px" viewBox="0 0 107.59 107.59" style="enable-background:new 0 0 107.59 107.59;" xml:space="preserve"><g> <g> <path id="path5050" d="M96.264,34.699c-3.347-2.532-2.761,11.526-21.229,13.686c-6.061,0.707-11.467,0.123-16.271-1.017 c-3.056-0.717-3.266-2.931-1.117-5.208c4.146-4.382,6.692-10.292,6.692-16.804c0-13.518-10.953-24.47-24.467-24.47 c-9.802,0-18.25,5.758-22.158,14.075c-1.331,2.842-4.267,4.793-7.355,4.272C4.308,18.213,0,18.525,0,24.396 c0,5.9,7.381,11.777,16.339,16.008c2.835,1.335,2.868,3.211,0.267,4.966C7.755,51.313,1.925,61.412,1.925,72.876 c0,18.295,14.928,31.224,33.129,33.126c25.834,2.701,56.48-1.725,68.054-24.964C111.389,64.409,107.671,43.343,96.264,34.699"/> </g></g></svg>';
    var bulletSVG = '<?xml version="1.0" encoding="iso-8859-1"?><!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" class="bullet-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"   viewBox="0 0 372.166 372.166" style="enable-background:new 0 0 372.166 372.166;" xml:space="preserve"><g>  <path d="M163.583,97.152h-3.641c-0.569-28.537-5.443-56.891-14.508-84.368l-2.609-7.909C141.863,1.959,139.154,0,136.083,0    c-3.071,0-5.781,1.959-6.742,4.875l-2.609,7.909c-9.065,27.477-13.938,55.832-14.508,84.368h-3.641v48.075l-11.749,30.56v179.012    h78.497V175.787l-11.748-30.56V97.152z M152.583,108.312v32.676h-33v-32.676H152.583z M117.769,151.988h36.628l7.427,19.32h-51.483    L117.769,151.988z M136.083,19.621c7.997,25.302,12.312,51.338,12.856,77.532h-25.711 C123.771,70.958,128.086,44.923,136.083,19.621z M107.834,343.799V182.308h56.497v161.491H107.834z"/><rect x="96.834" y="361.166" width="78.497" height="11"/></g></svg>';

    // SILLINESS ENSUES:
    function play() {
        soundManager.setup({
            url: 'js/soundmanager/script/swf',
            flashVersion: 9,
            onready: function () {
                    var mySound = soundManager.createSound({
                        'id': 'aSound',
                        'multiShotEvents': true
                    });
                } // end of onready function()
        }); // end of soundManager.setup
    }; // end of play();


    function random_hsl_color() {
        var hsl = "hsl(" + (Math.random() * 360) + " , 80%, 50%)";
        return hsl;
    }


    // Duck animation sequences

    function animDuck(newDuck) {
        var duckAnimate = (Math.floor(Math.random() * 10));
        switch (duckAnimate) {

            case 0:
                newDuck.animate({
                    "left": "85%",
                    "top": "50%"
                }, 2000, "swing").delay(700).animate({
                    "left": "50%",
                    "top": "20%"
                }, 1000, "swing").delay(500).animate({
                    "top": "50%",
                    "left": "10%"
                }, 1250, "swing").delay(600).animate(flyAwayDuck1, 400, "swing");
                break;

            case 1:
                newDuck.animate({
                    "left": "35%",
                    "top": "30%"
                }, 1500, "swing").delay(650).animate({
                    "left": "20%",
                    "top": "35%"
                }, 950, "swing").delay(900).animate({
                    "left": "70%",
                    "top": "67%"
                }, 1000, "swing").delay(600).animate(flyAwayDuck1, 400, "swing");
                break;

            case 2:
                newDuck.animate({
                    "left": "25%",
                    "top": "60%"
                }, 1500, "swing").delay(500).animate({
                    "left": "20%",
                    "top": "35%"
                }, 800, "swing").delay(900).animate({
                    "left": "70%",
                    "top": "67%"
                }, 1000, "swing").delay(300).animate(flyAwayDuck1, 400, "swing");
                break;

            case 3:
                newDuck.animate({
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
                }, 1500, "swing").delay(750).animate(flyAwayDuck2, 400, "swing");
                break;

            case 4:
                newDuck.animate({
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
                }, 1000, "swing").delay(750).animate(flyAwayDuck2, 400, "swing");
                break;

            case 5:
                newDuck.animate({
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
                }, 1500, "swing").delay(750).animate(flyAwayDuck2, 400, "swing");
                break;

            case 6:
                newDuck.animate({
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
                }, 1500, "swing").delay(750).animate(flyAwayDuck2, 400, "swing");
                break;

            case 7:
                newDuck.animate({
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
                }, 1500, "swing").delay(750).animate(flyAwayDuck2, 400, "swing");
                break;

            case 8:
                newDuck.animate({
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
                }, 1000, "swing").delay(750).animate(flyAwayDuck2, 400, "swing");
                break;

            case 9:
                newDuck.animate({
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
                }, 1000, "swing").delay(750).animate(flyAwayDuck2, 400, "swing");
                break;

        } // End of switch()
    } // End of animDuck();

    $('#content').on("click", function () {
        console.log("I am flashy!")
        $('#content').addClass('flash');
        setTimeout(function () {
            $('#content').removeClass('flash');
        }, 100);
    });

    function levelComplete(totalDucks, numOfBullets) {
        currentLevel++;

        console.log(currentPlayer + " is the current player")
        if (currentLevel < levelParams.length) {
            $("#content").html('<a class="button" id="nextLevel">Nice! Go to the next level</a>');
            $("#content").append('<a class="button give-up" id="give-up">Or give up...</a>');
            $("#content a#nextLevel").on("click", function () {
                console.log("START NEXT");
                $('.shots-left').html("");
                $('.ducks-to-shoot').html("");
                $("#content").html("");
                setTimeout(function () {
                    wave(levelParams[currentLevel][0], levelParams[currentLevel][1]);
                }, 1000);
            });
            $("#content a#give-up").on("click", function () {
                $("#content").html('<h3 class="sure">Are you sure?</h3>')
                $("#content").append('<a href="" class="button give-up" id="yes">Yeah, I quit!</a>');
                // If you quit:
                $("#content a#yes").on("click", function () {
                    console.log("START NEXT");
                    $('.shots-left').html("");
                    $('.ducks-to-shoot').html("");
                    $("#content").html("");
                    setTimeout(function () {
                        wave(levelParams[currentLevel][0], levelParams[currentLevel][1]);
                    }, 1000);
                });

                $("#content").append('<a class="button give-up" id="no">Wait - I need to keep playing</a>');
                // If you continue playing, play the game!
                $("#content a#no").on("click", function () {
                    console.log("START NEXT");
                    $('.shots-left').html("");
                    $('.ducks-to-shoot').html("");
                    $("#content").html("");
                    setTimeout(function () {
                        wave(levelParams[currentLevel][0], levelParams[currentLevel][1]);
                    }, 1000);
                });
            })
        } else {
            if (currentPlayer == playerOne) {
                $("#content").html('<a class="button" id="other-player">Player Two - you\'re up!</a>');
                playerOneScore = duckScore;
                // Reset duckScore after the result is stored in playerOneScore

                currentLevel = 0;
                currentPlayer = playerTwo;
                console.log("Hopefully this should be p2:" + currentPlayer);

                $("#content a#other-player").on("click", function () {
                    console.log("START NEXT");
                    $('.shots-left').html("");
                    $('.ducks-to-shoot').html("");
                    $("#content").html("");
                    $(".score").html("0");
                    duckScore = 0;
                    setTimeout(function () {
                        wave(levelParams[currentLevel][0], levelParams[currentLevel][1]);
                    }, 1000);
                });
            } else {
                // end of game, show scores

                $("#content").html("<h1>Who is the winner?</h1>");
                $("#content").append("<h3>Player One: " + playerOneScore + "</h3>");
                $("#content").append("<h3>Player TwO: " + duckScore + "</h3>");

                if (playerOneScore > duckScore) {
                    setInterval(function () {
                        $("#content").css({
                            "background": random_hsl_color
                        })
                    }, 100);
                    $("#content").append("<h1>PLAYER ONE WINS!</h1>");
                    soundManager.createSound({
                        url: 'sounds/airhorn.mp3',
                        "loops": 2
                    }).play();
                    $("#content").append(airhorn + airhorn + airhorn + airhorn + airhorn);
                    $("#content").append('<a href="" class="button" id="refresh">Click to refresh</a>')
                } else if (duckScore > playerOneScore) {
                    setInterval(function () {
                        $("#content").css({
                            "background": random_hsl_color
                        })
                    }, 100);
                    $("#content").append("<h1>PLAYER TWO WINS!</h1>");
                    soundManager.createSound({
                        url: 'sounds/airhorn.mp3',
                        "loops": 2
                    }).play();
                    $("#content").css({
                        "background": random_hsl_color
                    })
                    $("#content").append(airhorn + airhorn + airhorn + airhorn + airhorn);
                    $("#content").append('<a href="" class="button" id="refresh">Click to refresh</a>')
                } else {
                    $("#content").append("<h1>It's a tie!</h1>");
                }
            }
        }
    }

    function bulletsAndKills(totalDucks, numOfBullets) {
        var totalBullets = totalDucks + numOfBullets
        bulletsLeft = totalBullets;
        console.log("Bullets left inside bulletsAndKills", bulletsLeft);

        // Adds number of duck counters according to admin input
        for (i = 0; i < totalDucks; i++) {
            $('.ducks-to-shoot').append(duckSVG);
        }

        // Adds number of bullets according to admin input
        for (i = 0; i < bulletsLeft; i++) {
            $('.shots-left').append(bulletSVG);
        }

        // Sorting out how many shots are left:
        $("#content").off("click");
        $("#content").on("click", function () {
            // console.log("You have " + (bulletsLeft -1) + " bullets left");
            bulletsLeft--;

            var bullets = $("svg.bullet-svg");
            for (i = totalBullets; i > bulletsLeft; i--) {
                $(bullets[i - 1]).css({
                    "fill": "#333"
                });
            }

            if (bulletsLeft === 0) {
                $("#content").off("click");
                $(".duck").off("click");
                console.log("You ain't got no bullets");
            }

        })
    } // End of therAreXBulletsLeft();


    function scoresConditionals(totalDucks, numOfBullets) {
        var totalBullets = totalDucks + numOfBullets
        var bulletsLeft = totalBullets;
        numOfDucks = 0;
        $(".duck").one("click", function () {
            soundManager.createSound({
                url: 'sounds/quack.mp3'
            }).play();
            duckScore += 500;
            numOfDucks++;
            //numOfDucks = (duckScore / 500);
            $(".score").html(duckScore);

            var greenDucks = $("svg.duck-svg");
            for (i = 0; i < numOfDucks; i++) {
                $(greenDucks[i]).css({
                    "fill": "#0f0"
                });
            }

            // Check win      
            if (numOfDucks == totalDucks) {
                // Stop timer from breaking next level:
                clearTimeout(levelTimer);
                levelComplete(totalDucks, numOfBullets);
            }
        }); // end of $(".duck").one("click");
    }

    function killDuck() {
        // Click a duck and it falls from the screen
        $(".duck").one("click", function () {
                $(this).animate().stop(true, false).delay(600).animate({
                    "top": "110%"
                }, 1000, "swing");
            }) // end of full click function()
    }

    function wave(totalDucks, numOfBullets) {

        for (i = 0; i < totalDucks; i++) {
            var newDuck = $(singleDuck);
            $("#content").append(newDuck);
            animDuck(newDuck);
        }
        levelTimer = setTimeout(function () {
            levelComplete(totalDucks, numOfBullets)
        }, 9000);

        scoresConditionals(totalDucks, numOfBullets);
        bulletsAndKills(totalDucks, numOfBullets);
        killDuck();
    }

    // And start...

    $('#content').animate({
        opacity: 0
    }, 0).css({
        'background-image': 'url(\'../images/background.png\');'
    }).animate({
        opacity: 1
    }, 2300);

    setTimeout(function () {
        wave(levelParams[currentLevel][0], levelParams[currentLevel][1]);
    }, 2300);


}); // End of $(document).ready
