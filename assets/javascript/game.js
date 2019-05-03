

var character1 = {
    name: "Mushroom",
    HP: 100,
    AP: 10,
    AG: 10,
    CAP: 5
};

var character2 = {
    name: "Whale",
    HP: 250,
    AP: 2,
    AG: 2,
    CAP: 1
};

var character3 = {
    name: "Archer",
    HP: 50,
    AP: 20,
    AG: 20,
    CAP: 15
};

var character4 = {
    name: "Dragon",
    HP: 25,
    AP: 25,
    AG: 20,
    CAP: 20
};

//game

//show characters
gameStart();
//pick character

//pick enemy

//attack

//pick next enemy

//repeat till win or lose
var champ = character1;
var chump = character2;

function gameStart() {
    $("char1").txt(character1.name)
}

function pickChar() {

}

function attack(champ, chump) {
    $("#arena").empty();
    chump.HP -= champ.AP;
    console.log("Chump HP: " + chump.HP)
    $("#arena").append("You attacked " + chump.name + " for " + champ.AP + " damage.");
    champ.AP += champ.AG;
    console.log("New AP: " + champ.AP)
    champ.HP -= chump.CAP;
    console.log("Champ HP: " + champ.HP);
    $("#arena").append("\n" + chump.name + " attacked " + " back for " + chump.CAP + " damage.");

}