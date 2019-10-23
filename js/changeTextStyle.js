
    var fontSize = function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (100 - 20 + 1)) + 20 + "px";
    };

    // var timer = function getRandomInt(min, max) {
    //     min = Math.ceil(min);
    //     max = Math.floor(max);
    //     return Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000;
    // };

    setInterval (function updateFont() {
        if (fontSize() !== 0) {
            document.getElementById('font').style.fontSize = fontSize();
        }

    }, 500);

    setInterval (function updateFont2() {
        if (fontSize() !== 0) {
            document.getElementById('font3').style.fontSize = fontSize();
        }

    }, 2000);

    setInterval (function updateFont2() {
        if (fontSize() !== 0) {
            document.getElementById('font4').style.fontSize = fontSize();
        }

    }, 400);

    setInterval (function updateFont2() {
        if (fontSize() !== 0) {
            document.getElementById('font5').style.fontSize = fontSize();
        }

    }, 3000);

    setInterval (function updateFont2() {
        if (fontSize() !== 0) {
            document.getElementById('font6').style.fontSize = fontSize();
        }

    }, 200);

    setInterval (function updateFont2() {
        if (fontSize() !== 0) {
            document.getElementById('font7').style.fontSize = fontSize();
        }

    }, 4000);

    setInterval (function updateFont2() {
        if (fontSize() !== 0) {
            document.getElementById('font8').style.fontSize = fontSize();
        }

    }, 1500);

    setInterval (function updateFont2() {
        if (fontSize() !== 0) {
            document.getElementById('font9').style.fontSize = fontSize();
        }

    }, 750);

    setInterval (function updateFont2() {
        if (fontSize() !== 0) {
            document.getElementById('font10').style.fontSize = fontSize();
        }

    }, 1250);

    setInterval (function updateFont2() {
        if (fontSize() !== 0) {
            document.getElementById('font11').style.fontSize = fontSize();
        }

    }, 1100);

    setInterval (function updateFont2() {
        if (fontSize() !== 0) {
            document.getElementById('font12').style.fontSize = fontSize();
        }

    }, 1000);

    setInterval (function updateFont2() {
        if (fontSize() !== 0) {
            document.getElementById('font13').style.fontSize = fontSize();
        }

    }, 1250);

    setInterval (function updateFont2() {
        if (fontSize() !== 0) {
            document.getElementById('font14').style.fontSize = fontSize();
        }

    }, 900);

    setInterval (function updateFont2() {
        if (fontSize() !== 0) {
            document.getElementById('font15').style.fontSize = fontSize();
        }

    }, 2500);

    setInterval (function updateFont2() {
        if (fontSize() !== 0) {
            document.getElementById('font16').style.fontSize = fontSize();
        }

    }, 2200);


    // for (var i = 0; i < words.length; i++) {
    //     setInterval (function updateFont2() {
    //         if (fontSize() !== 0) {
    //             document.getElementById('font3').style.fontSize = fontSize();
    //         }
    //
    //     }, timer);
    // }


