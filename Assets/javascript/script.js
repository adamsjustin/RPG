var myCharacter;

var enemy;
    
var player;                     
var enemy;                      
var isAttacking = false;

var knight = {
    character: characterQualities = {
        name: "Knight",
        image: "./assets/images/knight.gif",
        time: 20,
        hp: 100,
        attack: 20
    }
};

var barbarian = {
    character: characterQualities = {
        name: "Barbarian",
        image: "./assets/images/barbarian.gif",
        time: 15,
        hp: 80,
        attack: 25
    }
};

var mage = {
    character: characterQualities = {
        name: "Mage",
        image: "./assets/images/mage.gif",
        time: 15,
        hp: 70,
        attack: 30
    }
};

var scout = {
    character: characterQualities = {
        name: "Scout",
        image: "./assets/images/scout.gif",
        time: 5,
        hp: 700,
        attack: 12
    }
};

var priest = {
    character: characterQualities = {
        name: "Priest",
        image: "./assets/images/priest.gif",
        time: 10,
        hp: 65,
        attack: 15
    }
};

var dknight = {
    character: characterQualities = {
        name: "Dark Knight",
        image: "./assets/images/dknight.gif",
        time: 20,
        hp: 100,
        attack: 19
    }
};

var orc = {
    character: characterQualities = {
        name: "Orc",
        image: "./assets/images/orc.gif",
        time: 15,
        hp: 85,
        attack: 15
    }
};

var bmage = {
    character: characterQualities = {
        name: "Black Mage",
        image: "./assets/images/bmage.gif",
        time: 15,
        hp: 75,
        attack: 20
    }
};

var thief = {
    character: characterQualities = {
        name: "Thief",
        image: "./assets/images/thief.gif",
        time: 5,
        hp: 60,
        attack: 12
    }
};

var warlock = {
    character: characterQualities = {
        name: "Warlock",
        image: "./assets/images/warlock.gif",
        time: 12,
        hp: 70,
        attack: 12
    }
};




/*
var knight = {
	attribute: "attr",
	hp: 100,
	mp: 10,
	abilities: ["Swing", "Shield Throw", "Shield Bash"],

};
	
var barbarian = {
	attribute: "attr",
	abilities: ["Axe Throw", "Berserk", "Helm Split"],
	hp: 100,
	mp: 10,
};

var mage = {
	attribute: "attr",
	abilities: ["Fireball", "Lightning", "Freeze"],
	hp: 100,
	mp: 10,
};

var thief = {
	attribute: "attr",
	abilities: ["Swipe", "Backstab", "Smokescreen"],
	hp: 100,
	mp: 10,
};

var priest = {
	attribute: "attr",
	abilities: ["Smack", "Holy", "Barrier"],
	hp: 100,
	mp: 10,
};

var dknight = {
	attribute: "attr",
	abilities: ["Cleave", "Shield Swipe", "Crush"],
	hp: 100,
	mp: 10,
};

var orc = {
	attribute: "attr",
	abilities: ["Axe Toss", "Rage", "Shield Break"],
	hp: 100,
	mp: 10,
};

var bmage = {
	attribute: "attr",
	abilities: ["Pain", "Flare", "Sleep"],
	hp: 100,
	mp: 10,
};

var thief = {
	attribute: "attr",
	abilities: ["Slash", "Poison Blade", "Vanish"],
	hp: 100,
	mp: 10,
};

var warlock = {
	attribute: "attr",
	abilities: ["Bane", "Fester", "Repose"],
	hp: 100,
	mp: 10,
};
*/








$("#battle-screen").hide();

function getRandom(input) {
    return Math.floor(Math.random() * input);
}




function selectPlayer(player) {
    myCharacter = player;
    console.log("Player Will be: " + myCharacter.character.name);
    myCharacter.character.imageElement = $("#hero");
    myCharacter.character.imageElement.attr("src", myCharacter.character.image);
    $("#hero-image").attr("src", myCharacter.character.image);
}

// Runs after an enemy is selected
function selectEnemy(enemyChar) {
    // assign the enemy
    enemy = enemyChar;

    console.log("Enemy will be: " + enemy.character.name);

    $("#enemy-image").attr("src", enemy.character.selectImage);
    // Grabs the playing image element
    enemy.character.imageElement = $("#enemy");
    // Sets the opacity to 1 (when he dies the opacity goes to zero, this will reset it)
    enemy.character.imageElement.css("opacity", 1); 
    $("#enemy-image").attr("src", enemy.character.image);
};


//testing a toggle disable dependant on character selection input

//	$('.charButton').prop('disabled', function(i, v) { return !v; });

/*	function toggleInputState(.charButton, on) {
  // 'on' = true(visible) or false(hidden)
  // If a field is to be shown, enable it; if hidden, disable it.
  // Disabling will prevent the field's value from being submitted
  $('.charButton').prop('disabled', !on).toggle(on);
}
*/

$('.charButton').on("click", function () {
        switch ($(this).data('character')) {
            case 'knight':
                selectPlayer(knight);
                break;
            case 'barbarian':
                selectPlayer(barbarian);
                break;
            case 'mage':
                selectPlayer(mage);
                break;
            case 'scout':
                selectPlayer(scout);
                break;
            case 'priest':
                selectPlayer(priest);
                break;
            default:
                break;
                console.log(myCharacter);
        };
    });
$('.enemyButton').on("click", function () {
        switch ($(this).data('character')) {
            case 'dknight':
                selectEnemy(dknight);
                break;
            case 'orc':
                selectEnemy(orc);
                break;
            case 'bmage':
                selectEnemy(bmage);
                break;
            case 'thief':
                selectEnemy(thief);
                break;
            case 'warlock':
                selectEnemy(warlock);
                break;
            default:
                break;
               console.log(enemy);
        }
    });

function killed(dead) {
    clearInterval(interval);
        if(enemy.character.hp <= 0) {
            alert("You Win!");
            $(".remove").show();
            $("#battleButton").show();
        }
                // we win!
         if(player.character.hp <= 0) {
            alert("You Lose!");
            $(".remove").show();
            $("#battleButton").show();
            }
        }
    
        
    

    // This updates the display of player and enemy stats. 
function updateStats() {
    $("#player-stats").html("<h1>PLAYER</h1><h1 style=\"margin-top: 10px\">HP: " + myCharacter.character.hp + "</h1>");
    $("#enemy-stats").html("<h1>Enemy</h1><h1 style=\"margin-top: 10px\">HP: " + enemy.character.hp + "</h1>");

        if(myCharacter.character.hp <= 0) {
          killed(player);
          playerLost = true;
                    }
    
}
//Selecting a character



$("#battleButton").on("click", function() {
	$(this).hide();
	console.log(myCharacter);
	updateStats();
	$(".remove").hide();
	$("#battle-screen").show();
	$("#battle-screen").css("height", "150px");

/* function flip() {
	if $('#hero-image').src === scout.character.image {
		$("#hero-image").addClass("mirror");
	}
}
*/

}); 



function playerAttackEnemy() {
    enemy.character.hp -= myCharacter.character.attack;

        var attack = getRandom(myCharacter.character.attack);
        if (attack > 0) {
            
            myCharacter.character.isAttacking = true;
            
                    
                }

                updateStats();
                if(enemy.character.hp <= 0) {
                    killed(enemy);
                    enemyLost = true;
                    alert("You win!")
                }
               
            };
           
        
    


function enemyAttacking() {


	var playerLost = false;
	var attack = getRandom(enemy.character.attack);
	        // If we have an attack
	        if(attack > 0) {

	            enemy.character.isAttacking = true;
	                    
	                    // Update the display
	                    updateStats();
	                    if(player.character.hp <= 0) {
	                        alert(player.character.name + " has fallen!");
	                        killed(player);
	                        playerLost = true;
	                    }
	                    // Animate
	                    enemy.character.imageElement.animate({
	                        right: "-180px"
	                    }, 300, function () {
	                        enemy.character.isAttacking = false;
	                        
	                    });         
}

}



$("#option-attack").on("click", function() {
        playerAttackEnemy();
        
    });


