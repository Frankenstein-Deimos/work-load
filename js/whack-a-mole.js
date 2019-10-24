(function () {
    "use strict";
    // TODO: MAKE A PAUSE GAME BUTTON
    // TODO: MAKE A HIGH SCORE BUTTON TO DISPLAY HIGH SCORES
    // Do not show button while game is in progress. Show button before game begins/during game pause.
    console.log("hello");

    var score = 0;

    function convertSeconds(x) {
        return x * 1000;
    }

    // ==== GAME TIMER ====
    var gameTimer = 30;

    function updateTimer() {
        if (gameTimer >= 0) {
            document.getElementById("timer").innerHTML = gameTimer;
        }
        if (gameTimer === -1) {
            alert("Score: " + score + " moles were whacked!" + "\n" + "Game Over!");
        }
        gameTimer--;
    }

    // ==== MOLE DISPLAY ====
    // function displayMole() {
    //
    // }

    // ==== MOLE CLICKED ====
    // function moleWhacked() {
    //
    // }

    // ==== PLAY BUTTON CLICKED ====
    var playListener = function (playClicked) {
        // Set the timer on the HTML document
        document.getElementById("timer").innerHTML = gameTimer;
        var gameTimerUpdate = setInterval(updateTimer, convertSeconds(1));
    };

    document.getElementById('play-button').addEventListener('click', playListener, false);
})();