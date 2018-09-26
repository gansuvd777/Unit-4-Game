
// Crystal Variables
var crystal = {
    green: 
    {
        name: "Green Froggy",
        value: 0
    },
    red: 
    {
        name: "Red Wolf",
        value: 0
    },
    white: 
    {
        name: "White Bunny",
        value: 0
    },
    purple: 
    {
        name: "Purple UniCorn",
        value: 0
    }
};


// Current and Target Score
var currentScore = 0;
var targetScore = 0;

// Wins and losses
var winCount = 0;
var lossCount = 0;


// functions
// ==========================================
var getRandom = function(min, max) {
    return Math.floor(Math.random()*(max - min + 1))+min;
}
var startGame = function(){
    currentScore = 0;
    targetScore = getRandom (9, 100);
    crystal.green.value = getRandom(1, 12);
    crystal.red.value = getRandom(1, 12);
    crystal.white.value = getRandom(1, 12);
    crystal.purple.value = getRandom(1, 12);

    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);

    // console.log(targetScore);
    // console.log(crystal.green.value);

}
var addValues = function(crystal){
    currentScore = currentScore + crystal.value;

    $("#yourScore").html(currentScore);

    checkWin();

    // console.log(currentScore);
}
// Check if user Win or Loss and Reset the game

var checkWin = function() {
    if (currentScore > targetScore) {
        alert("Oops. You Lost");
        
        // console.log("You lost");
        lossCount++;
        // display on HTML
        $("#lossCount").html(lossCount);

        startGame();
    }
    else if (currentScore === targetScore){
        alert("Congratulations! You Won!");
        

        winCount++;

        $("#winCount").html(winCount);

        startGame();
    }
}

startGame();
// main process
// ===========================================
$("#green").click(function(){
    addValues(crystal.green);
});
$("#red").click(function(){
    addValues(crystal.red);
});
$("#white").click(function(){
    addValues(crystal.white);
});
$("#purple").click(function(){
    addValues(crystal.purple);
});