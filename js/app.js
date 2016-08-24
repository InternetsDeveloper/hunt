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
            var pOne = 'Player One';
            var pTwo = 'Player Two';
            var currPlayer = pOne;


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

                //--====== End of Doc Ready ======--
            });
