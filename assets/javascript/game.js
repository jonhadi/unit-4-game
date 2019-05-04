var charList = {
    char1 : {
        name: "Mushroom",
        HP: 100,
        AP: 10,
        AG: 10,
        CAP: 5
    },

    char2 : {
        name: "Whale",
        HP: 250,
        AP: 2,
        AG: 2,
        CAP: 1
    },

    char3 : {
        name: "Archer",
        HP: 50,
        AP: 20,
        AG: 20,
        CAP: 15
    },

    char4 : {
        name: "Dragon",
        HP: 25,
        AP: 25,
        AG: 20,
        CAP: 20
    }

};

//game

//show characters

//pick character

//pick enemy

//attack

//pick next enemy

//repeat till win or lose
var champ;
var chump;
// = {...charList[char2]};
//console.log({...charList[char2]});
console.log(champ);

$(".hero").on("click", function(me) {
    console.log(me);
    console.log(me.target.id);
    if (champ === undefined) {
        champ = {...charList[me.target.id]};
        console.log("champ");
        console.log(champ);
    } else {
        console.log("chump");
        chump = {...charList[me.target.id]};
        console.log(chump);
    }
});


function pickChar() {

}

function attack(champ, chump) {
    console.log(champ);
    $("#arena").empty();
    chump.HP -= champ.AP;
    console.log("Chump HP: " + chump.HP)
    $("#champAtk").html("You attacked " + chump.name + " for " + champ.AP + " damage.");
    champ.AP += champ.AG;
    console.log("New AP: " + champ.AP);
    champ.HP -= chump.CAP;
    console.log("Champ HP: " + champ.HP);
    $("#chumpAtk").html(chump.name + " attacked " + champ.name + " back for " + chump.CAP + " damage.");

}