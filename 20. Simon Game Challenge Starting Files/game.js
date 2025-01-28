var gamePattern = []
var buttonColours = ["red", "blue", "green", "yellow"]


function nextSequence() {

    var randomNumber = Math.round(Math.random() * 3)
    var randomChosenColour = buttonColours[nextSequence()]
    gamePattern.push(randomChosenColour)

    $("#" + randomChosenColour)
    .animate({ opacity: 0.3 }, 200) // Fade out to 30% opacity
    .animate({ opacity: 1 }, 200); // Fade back in to full opacity

    var som = new Audio("./sounds/" + randomChosenColour + ".mp3")
    som.play()
}

