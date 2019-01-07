//variables//
var selectedFighterID = null;
var selectedOpponentID = null;
var selectedFighter = null;
var selectedOpponent = null;
var defeatCount = 0;

function createResetButton() {
    var resetBtn = $("<button>");
    resetBtn.addClass("btn btn-info");
    resetBtn.attr('id', 'reset');
    resetBtn.text("New Game");
    resetBtn.css("display", "inline");
    resetBtn.appendTo("#vs");

    $("#reset").click(function (newGame) {
        characters = getCharacters();
        updateHP();
        $(".card").css("visibility", "visible");
        $("#" + selectedOpponentID).appendTo("#selectChar");
        $("#" + selectedFighterID).appendTo("#selectChar");
        selectedFighterID = null;
        selectedOpponentID = null;
        defeatCount = 0;
        $("#battleText1").text("");
        $("#battleText2").text("");
        $(this).remove();
        $("#playText").text("Choose a character:");

    })
}


function getCharacters() {
    return {
        Harry: {
            healthPoints: 100,
            attackPower: 8,
            initialAttackPower: 8,
            counterAttack: 17,
        },
        Snape: {
            healthPoints: 125,
            attackPower: 5,
            initialAttackPower: 5,
            counterAttack: 12,
        },
        Draco: {
            healthPoints: 60,
            attackPower: 11,
            initialAttackPower: 12,
            counterAttack: 25,
        },
        Hermione: {
            healthPoints: 85,
            attackPower: 10,
            initialAttackPower: 10,
            counterAttack: 23,
        },
        Voldemort: {
            healthPoints: 150,
            attackPower: 4,
            initialAttackPower: 4,
            counterAttack: 10,
        }
    }
}
// var characters = getCharacters();
var characters = {
        Harry: {
            healthPoints: 100,
            attackPower: 8,
            initialAttackPower: 8,
            counterAttack: 17,
        },
        Snape: {
            healthPoints: 125,
            attackPower: 5,
            initialAttackPower: 5,
            counterAttack: 12,
        },
        Draco: {
            healthPoints: 60,
            attackPower: 11,
            initialAttackPower: 12,
            counterAttack: 25,
        },
        Hermione: {
            healthPoints: 85,
            attackPower: 10,
            initialAttackPower: 10,
            counterAttack: 23,
        },
        Voldemort: {
            healthPoints: 150,
            attackPower: 4,
            initialAttackPower: 4,
            counterAttack: 10,
        }
    
}


function updateHP() {
    $("#harryHP").text(characters.Harry.healthPoints);
    $("#snapeHP").text(characters.Snape.healthPoints);
    $("#dracoHP").text(characters.Draco.healthPoints);
    $("#hermioneHP").text(characters.Hermione.healthPoints);
    $("#voldemortHP").text(characters.Voldemort.healthPoints);
}




//game start function//

updateHP();
$("#playText").text("Choose a character:");


//click events//

$(".card").click(function (selectCharacter) {
    $("#battleText1").text("");
    $("#battleText2").text("");
    if (selectedFighterID === null) {
        $(this).appendTo("#playerChar"); //moves player down
        selectedFighterID = $(this).attr("id"); //gets id of the selected card
        // selectedFighter = $(this);
        // var fighterId = $(this).attr('id');
        // console.log(fighterId);
        selectedFighter = characters[selectedFighterID]; //gets object data for that corresponding card
        console.log(selectedFighter);

        $("#playText").text("Choose an opponent:");
        $("#vs").text("VS"); // creates space and VS text between battle cards
    }
    else if (selectedOpponentID === null) {
        $(this).appendTo("#opponentChar"); //moves opponent down
        selectedOpponentID = $(this).attr("id"); //gets id of the selected card
        selectedOpponent = characters[selectedOpponentID];  //gets object data for that corresponding card
        console.log(selectedOpponent);

        $("#fightButton").css("display", "inline");
        $("#playText").text("Ready, set, battle!");
    }
});

$("#fightButton").click(function (battle) {
    $("#battleText1").text("");
    $("#battleText2").text("");
    if ((selectedFighter.healthPoints > 0) && (selectedOpponent.healthPoints > 0)) {

        selectedOpponent.healthPoints = selectedOpponent.healthPoints - selectedFighter.attackPower;
        // $(selectedFighterID).effect( "shake" );
        // $(selectedOpponentID).effect( "shake" );
        $("#battleText1").text("You attacked " + selectedOpponentID + " for " + selectedFighter.attackPower + " damage.");
        if (selectedOpponent.healthPoints < 1) {
            // $("#" + selectedOpponentID).effect( "explode" );
            $("#" + selectedOpponentID).appendTo("#selectChar").css("visibility", "hidden");
            defeatCount++;
            $("#battleText2").text("You defeated " + selectedOpponentID + ". Select another opponent.");
            selectedOpponentID = null;

            if (defeatCount === 4) {
                $("#battleText1").text("You won! Would you like to play again?");
                $("#battleText2").text("");
                $("#fightButton").css("display", "none"); //hides battle button
                $("#vs").text(""); // removes VS text between battle cards
                createResetButton();
                return;
            }
            return;
        }

        if (selectedFighter.healthPoints > 1) {
            selectedFighter.healthPoints = selectedFighter.healthPoints - selectedOpponent.counterAttack;
            $("#battleText2").text(selectedOpponentID + " attacked you for " + selectedOpponent.counterAttack + " damage.");
            selectedFighter.attackPower = selectedFighter.attackPower + selectedFighter.initialAttackPower;
        }

        updateHP();

        if (selectedFighter.healthPoints < 1) {
            $("#battleText1").text("Game Over. " + selectedOpponentID + " beat you this time. Want to play again?");
            $("#battleText2").text("");
            $("#fightButton").css("display", "none"); //hides battle button
            $("#vs").text(""); // removes VS text between battle cards
            createResetButton();
        }

        // selectedFighter healthpoints increase by original/starting amount
    }

})


//reset everything here!!!//
// $("#reset").click(){

//     // gameRestart ();
// }