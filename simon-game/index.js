const audio1 = new Audio("./sounds/audio1.mp3");
const audio2 = new Audio("./sounds/audio2.mp3");
const audio3 = new Audio("./sounds/audio3.mp3");
const audio4 = new Audio("./sounds/audio4.mp3");
const audioOver = new Audio("././sounds/wrong.mp3");
const red = $(".red");
const green = $(".green");
const blue = $(".blue");
const yellow = $(".yellow");
const buttonColours = [green, red, yellow, blue];
const allAudio = [audio1, audio2, audio3, audio4];
let gamePattern = [];
let clickPattern = [];
let bestScore = 0;

// Play audio when clicked and push to clickPattern
green.click(() => { handleClick(0); });
red.click(() => { handleClick(1); });
yellow.click(() => { handleClick(2); });
blue.click(() => { handleClick(3); });

// Start the game
$("#start").click(function beginGame() {
    if (gamePattern.length === 0) {
        $("h2").css("color", "#c7b97d");
        startTheGame();
        $("#start").text("Reset Game");
    } else if (gamePattern.length > 0) {
        gamePattern = [];
        clickPattern = [];
        $("h2").text("Level 0");
        $("#start").text("Start Game");
    }
});

function startTheGame() {
    clickPattern = [];
    $("body").css("background-color", "#011F3F");

    let randomNumber = Math.floor(Math.random() * 4);
    setTimeout(() => {
        buttonColours[randomNumber].addClass("clicked");
        setTimeout(() => {
            buttonColours[randomNumber].removeClass("clicked");
        }, 100);
        allAudio[randomNumber].play();
    }, 1000);
    gamePattern.push(randomNumber);
    $("h2").text("Level " + gamePattern.length);
    if (bestScore < gamePattern.length) {
        bestScore = gamePattern.length;
        $("h1").text("Best score: " + (bestScore -1));
    }
}

function handleClick(index) {
    allAudio[index].play();
    clickPattern.push(index);

    // Check if the current click is correct
    if (gamePattern[clickPattern.length - 1] !== index) {
        // Incorrect click, game over
        $("h2").text("Game over!");
        $("#start").text("Start Game");
        $("h2").css("color", "red");
        gamePattern = [];
        $("body").css("background-color", "red");
        setTimeout(() => {
            $("body").css("background-color", "#011F3F");
        }, 200);
        audioOver.play();
    } else if (clickPattern.length === gamePattern.length) {
        // Correct sequence completed, start the next level
        setTimeout(startTheGame, 1000);
    }
}
