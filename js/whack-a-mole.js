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
    var actualTime = 30;
    var gameTimer = actualTime;

    function updateTimer() {
        if (gameTimer >= 0) {
            // SET TIMER ON HTML
            document.getElementById("timer").innerHTML = "TIMER: " + gameTimer;
            gameTimer--;
        } else if (gameTimer === -1) {
            alert("Score: " + score + " moles were whacked!" + "\n" + "Game Over!");
            console.log(gameTimer);
            // STOP INTERVALS TO REFLECT 'NEW GAME' WHEN PLAY-BUTTON IS CLICKED
            clearInterval(gameTimerUpdate);
            clearInterval(molePopup);
            // RESET BUTTONS
            document.getElementById("play-button").disabled = false;
            document.getElementById("pause-button").disabled = true;
        }
        // gameTimer--;
    }

    // ==== MOLE DISPLAY ====
    var moleHomes = document.getElementsByClassName("game-tile");
    console.log(moleHomes);

    // Set variables global to allow pause button to modify
    var removeMole;
    var moleLocationCatcher;

    function displayMole() {
        // Generate a number between 0 and 8 representing game-tiles on game-board
        var randomHome = Math.floor(Math.random() * 8) + 1;
        // Select random div A.k.a. moleHome
        var set = moleHomes[randomHome];
        moleLocationCatcher = set;
        // Only run while gameTimer is above 0
        if (gameTimer > 0) {
            set.innerHTML += "<img src=\"img/diglett.png\" alt=\"mole\" class=\"moleStyle\">";
        }
        // Delay mole location change : removes mole from game-tile
        var removeMole = setTimeout(function () {
            set.innerHTML = "";
        }, convertSeconds(1.5));
    }

    // ==== MOLE CLICKED ====
    // function moleWhacked() {
    //
    // }

    // ==== PLAY BUTTON CLICKED ====
    // Set intervals global to allow pause-button to modify
    var gameTimerUpdate;
    var molePopup;
    var playListener = function (playClicked) {
        if (gameTimer === -1) {
            gameTimer = actualTime;
        }
        // Enable pause button on click
        document.getElementById("pause-button").disabled = false;
        // Disable play button on click
        document.getElementById("play-button").disabled = true;
        gameTimerUpdate = setInterval(updateTimer, convertSeconds(1));
        molePopup = setInterval(displayMole, convertSeconds(2));
    };

    // ==== PAUSE BUTTON CLICKED ====
    // DEFAULT: pause-button disabled : explain purpose with demo; uncaught error, also user shouldn't be able to pause a game that hasn't started
    document.getElementById("pause-button").disabled = true;
    var pauseListener = function (pauseClicked) {
        // Enable play button on click
        document.getElementById("play-button").disabled = false;
        // Disable pause button on click
        document.getElementById("pause-button").disabled = true;
        clearInterval(gameTimerUpdate);
        clearInterval(molePopup);
        // Remove mole from game-board when paused.
        moleLocationCatcher.innerHTML = "";
    };

    document.getElementById('play-button').addEventListener('click', playListener, false);
    document.getElementById('pause-button').addEventListener('click', pauseListener, false);
})();