//variables//
var selectedFighter = null;
var selectedOpponent = null;
var characters = {
    "Harry": {
        healthPoints: 100,
        attackPower: 6,
        counterAttack: 20,
    },
    Draco: {
        healthPoints: 60,
        attackPower: 11,
        counterAttack: 20,
    },
    Snape: {
        healthPoints: 125,
        attackPower: 4,
        counterAttack: 15,
    },
    Hermione: {
        healthPoints: 85,
        attackPower: 8,
        counterAttack: 20,
    },
    Voldemort: {
        healthPoints: 150,
        attackPower: 3,
        counterAttack: 11,
    },
}

var harry = $("#harry").attr(characters.Harry);
console.log(harry);

function updateHP() {
    $("#harryHP").text(characters.Harry.healthPoints);
    $("#snapeHP").text(characters.Snape.healthPoints);
    $("#dracoHP").text(characters.Draco.healthPoints);
    $("#hermioneHP").text(characters.Hermione.healthPoints);
    $("#voldemortHP").text(characters.Voldemort.healthPoints);
}




//game start function//
updateHP();
$("#playText").append("Choose a character:");


//click events//


$(".card").click(function (selectCharacter) {
    if (selectedFighter === null) {
        $(this).appendTo("#playerChar");
        selectedFighter = $(this).attr("id");
        console.log(selectedFighter);
        $("#playText").replaceWith("<h2>Choose an opponent:</h2>");
        $("#vs").append("<h2>VS</h2>");
    }
    else if (selectedOpponent === null) {
        $(this).appendTo("#opponentChar");
        selectedOpponent = $(this).attr("id");
        console.log(selectedOpponent);
        $(".btn").css("display", "flex");
    }
});

// $("#btn").click(function (battle) {
//     selectedFighter 
//   })

// Do I need to link the car id's to the respective char info in the object? 