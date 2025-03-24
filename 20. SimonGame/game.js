var gamePattern = []
var buttonColours = ["red", "blue", "green", "yellow"]
var userClickedPattern = []
var started = false
var level = 0

$(document).keypress(function() {
  if (!started) {

    $("h1").text("Level" + level)
    nextSequence()
    started = true
  }
})

function checkAnswer(currentLevel) {
    if(gamePattern[currentLevel] == userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length){

            setTimeout(function () {
              nextSequence()
            }, 1000)
    
        }
    } else {

        var audio = new Audio("sounds/wrong.mp3");
        audio.play();

        $("body").addClass("game-over")
        setTimeout(function() {
            $("body").removeClass("game-over")
        }, 200)

        $("h1").text("Game Over, Press Any Key to Restart")
        startOver()
    }
}


$(".btn").click(function() {
    var userChosenColour = $(this).attr("id")
    userClickedPattern.push(userChosenColour)

    playSound(userChosenColour)
    animatePress(this)

    checkAnswer((userClickedPattern.length) - 1)

})


function nextSequence() {

    userClickedPattern = []

    level++
    $("h1").text("Level " + level)

    var randomNumber = Math.floor(Math.random() * 4)
    var randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    
    
    playSound(randomChosenColour)

}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(curretColour) {
    $(curretColour).addClass("pressed");

    setTimeout(function() {
        $(curretColour).removeClass("pressed");
    }, 100)

}


function startOver() {
    level = 0
    gamePattern = []
    started = false
}