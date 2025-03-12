var gamePattern = []
var buttonColours = ["red", "blue", "green", "yellow"]

var userClickedPattern = []


function nextSequence() {

    var randomNumber = Math.round(Math.random() * 3)
    var randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)

    $("#" + randomChosenColour)
    .animate({ opacity: 0.3 }, 200) // Fade out to 30% opacity
    .animate({ opacity: 1 }, 200); // Fade back in to full opacity

    var som = new Audio("./sounds/" + randomChosenColour + ".mp3")
    som.play()
}


$("button").click(function() {
    userChosenColour = $(this).attr("id")
    userClickedPattern.push(userChosenColour)    

})

function playSound(name) {
    var som = new Audio("./sounds/" + name + ".mp3")
    som.play()


}
