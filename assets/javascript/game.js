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
        AP: 5,
        AG: 5,
        CAP: 5
    },

    char3 : {
        name: "Archer",
        HP: 50,
        AP: 20,
        AG: 20,
        CAP: 30
    },

    char4 : {
        name: "Dragon",
        HP: 25,
        AP: 25,
        AG: 25,
        CAP: 40
    }

};
//character to input through jquery if time
var char5 = {
    name: "Knight",
    HP: 500,
    AP: 500,
    CAP: 0,
    AG: -50,
    profile: "../images/Knight.jpg"
}

//game

//show characters

//pick character

//pick enemy

//attack

//pick next enemy

//repeat till win or lose
var champ;
var chump;
var chumpSet = false;
var enemyCounter = 3;
// = {...charList[char2]};
//console.log({...charList[char2]});
console.log(champ);

$(".hero").on("click", function(me) {
    console.log(me);
    console.log(me.target.id);
    if (champ === undefined) {
        $('#intro').attr('class', 'hide-me');
        //if no champ set champ to id of click
        champ = {...charList[me.target.id]};
        console.log("champ");
        //console.log(me.target.parentElement.id);
        //removes hero class so it cant be clicked, doesnt work though
        //$('#'+me.target.id).removeAttr('class');
        //removes charCard and makes champ card so background doesnt turn red
        $("#"+me.target.parentElement.id).removeAttr('class').attr('id', 'champCard').detach().appendTo('#champ');
        //move character list to enemies area
        $('#character-list').detach().appendTo('#enemiesATA');
        $('.charCard').attr('class', 'enemy');
    } else {
        console.log("chump");
        console.log(chump);
        if (!chumpSet) {
            chump = {...charList[me.target.id]};
            console.log(chump);
            $("#"+me.target.parentElement.id).removeAttr('class').attr('id', 'chumpCard').detach().appendTo('#chump');
            //change color of text to white for black background
            $("#"+me.target.previousElementSibling.id).attr('class', 'enemy-text');
            $("#"+me.target.nextElementSibling.id).attr('class', 'enemy-text');
            chumpSet= true;
        }
    }
});


function pickChar() {

}

function attack(champ, chump) {
    chump.HP -= champ.AP;
    console.log("Chump HP: " + chump.HP);
    if (chump.HP > 0) { //if enemy is not dead
        //find the id of HP text on card
        var hpID = '#' + $('#chumpCard').children()[2].id;
        $(hpID).html(chump.HP);
        $("#champAtk").html("You attacked " + chump.name + " for " + champ.AP + " damage.");
        champ.AP += champ.AG;
        console.log("New AP: " + champ.AP);
        champ.HP -= chump.CAP;
        hpID = '#' + $('#champCard').children()[2].id;
        $(hpID).html(champ.HP);
        if (champ.HP > 0) { // champ still alive
            console.log("Champ HP: " + champ.HP);
            $("#chumpAtk").html(chump.name + " attacked " + champ.name + " back for " + chump.CAP + " damage.");
        } else { // lose
            $("#champAtk").html("You Lose!");
            $('#resetButton').removeAttr('class');
        }
    } else {
        //reset text
        $("#chumpAtk").empty();
        //find and give defeat text
        console.log($('#chumpCard').children());
        $("#champAtk").html("You have defeated " + $('#chumpCard').children()[0].innerHTML + ", choose another enemy to battle.")
        $('#chumpCard').removeAttr('id').attr('class', 'hide-me');
        //release chump
        chumpSet = false;
        enemyCounter--;
        if(enemyCounter === 0) {
            $("#champAtk").html("You WON!");
            $('#resetButton').removeAttr('class');
        }
    }

}

function reset() {
    location.reload();
}