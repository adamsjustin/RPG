var myCharacter = false;

var enemyCharacter;

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


//testing a toggle disable dependant on character selection input

//	$('.charButton').prop('disabled', function(i, v) { return !v; });

/*	function toggleInputState(.charButton, on) {
  // 'on' = true(visible) or false(hidden)
  // If a field is to be shown, enable it; if hidden, disable it.
  // Disabling will prevent the field's value from being submitted
  $('.charButton').prop('disabled', !on).toggle(on);
}
*/



//Selecting a character
	$('.character').on('click', function() {
	myCharacter = $(this).data('character');
	console.log(myCharacter);
	});


 $(".select").on("click", function() {
 	$(this).appendTo("#selected");
 });

//test for checking my or enemy character
	/*$('.test').on('click', function() {
		alert(enemyCharacter);
	}); */

//Selecting enemy character
	$('.enemyCharacters').on('click', function() {
	enemyCharacter = $(this).data('character');
	console.log(enemyCharacter);
	});

//disable the button
//	$('.battleButton').prop('disabled', true);

/* check that enemy and player have been selected and enable the button
	$('.enemyCharacters').on('click', function() {
		if(myCharacter == 'knight', 'priest', 'scout', 'mage', 'barbarian' || enemyCharacter == 'dknight', 'orc', 'bmage', 'warlock', 'thief') {
           $('.battleButton').prop('disabled', false);
        }});
*/

	$('#btest').on('click', function() {
		alert(myCharacter)
	});