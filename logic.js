function setState(state) {
	var titleElement = document.getElementById("gameTitle"),
		textElement = document.getElementById("gameText"),
		buttonContainer = document.getElementById("buttonContainer"),
		button1 = document.getElementById("gameButton1"),
		button2 = document.getElementById("gameButton2"),
		endContainer = document.getElementById("endContainer"),
		endText = document.getElementById("endMessage");

	titleElement.innerHTML = state.title;
	textElement.innerHTML = state.text;

	if (!state.end) {
		buttonContainer.style.display = "block";
		endContainer.style.display = "none";
		button1.innerHTML = state.answer1.title;
		button2.innerHTML = state.answer2.title;
		button1.onclick = function() { setState(state.answer1); };
		button2.onclick = function() { setState(state.answer2); };
	} else {
		endContainer.style.display = "block";
		buttonContainer.style.display = "none";
		endText.innerHTML = state.end;
	}
}

function startGame() {
	setState({
		title: "Welcome",
		text: "Welcome to this little interactive christmas story, dedicated to WaniKani user Mythros. " +
			"There are in total two good endings. See if you can find them both. Good luck!<br><br>" +
			"You wake up, only to find yourself not knowing where you are or how you got here. " +
			"Based off of your surroundings, you conclude that you must be inside a logde. The only thing you have " +
			"managed to locate so far is a door leading to the outside.",
		answer1: {
			title: "Investigate the room",
			text: "You decided to go up to investigate the room that you're currently in. " +
				"Looking out of the window, you see there is an aweful lot of snow. Good thing you didn't " +
				"decide to go out. You also see a chest with a lock, a dresser and some candy lying on the ground.",
			answer1: {
				title: "Look for a key in the dresser",
				text: "You decided to go to the dresser to have a look and see if you could find a key there. " +
					"There are two drawers in the dresser, one on top and one bellow.",
				answer1: {
					title: "Open the first drawer",
					text: "You open the first drawer where you find a key and an envelope. The envelope has text on " +
						"it that reads: \"Getting out of here: The guide\".",
					answer1: {
						title: "Take the key",
						text: "You take the key up and walk over to the chest. When trying to insert the key, you notice that it " +
							"doesn't fit. Feeling a bit disappointed, you try to put the key in your pocket when you find something" +
							"which looks like a hatch in the floor.",
						answer1: {
							title: "Open the hatch",
							text: "Once you managed to get the hatch open, you stick your head down to see if you can find anything down " +
								"there. While not what you had hoped for, you find a very hungry lion who easily decapitate you within a " +
								"second or two.",
							end: "BAD END: One head is better than none."
						},
						answer2: {
							title: "Ignore the hatch",
							text: "You ignore the hatch and try to look for anything else that could be of interest in the room. You take a " +
								"look over at the bed where you find something yellow moving.",
							answer1: {
								title: "Investigate the bed carefully",
								text: "You go over to the bed to investigate what is going on. You find a Pikachu on the bed. You bearly have " +
									"time to say \"hi\" before the Pikachu jumps out of the bed, grabs the key that you putin your pocket, runs " +
									"over to the chest that it manages to open with the same key that you failed with before. When it opens the " +
									"chest, Christmas food flies all over the place, after which you and Pikachu enjoys a nice meal together.",
								end: "GOOD END: Nom, nom, nom."
							},
							answer2: {
								title: "Go for an attack",
								text: "You jump on to the bed to attack whatever has managed to find its way in here. Just as you're going in for " +
									"an attack, you notice that it's a Pikachu lying on the bed. Before you have time to think about it any " +
									"further, you're grilled to death by an electric attack.",
								end: "BAD END: Pikachu, Thunderbolt!"
							}
						}
					},
					answer2: {
						title: "Open the envelope",
						text: "You open the envelope where you find a piece of paper. You pick up the paper and start to " +
							"feel dizzy. You manage to catch a glimpse of the paper reading: \"Step 1. Don't trust anything " +
							"that feels to obvious.\" before falling to the ground.",
						end: "BAD END: Was that paper poisonous or something?"
					}
				},
				answer2: {
					title: "Open the second drawer",
					text: "Once you open the second drawer, you find a lit bomb. Surprised, you throw it in to the air " +
						"only to have it explode right in your face.",
					end: "BAD END: Who knew opening a drawer could ignite a bomb?"
				}
			},
			answer2: {
				title: "Eat the candy",
				text: "You take the candy lying on the floor and eat it. Suddenly, you start feeling very powerful. " +
					"\"What is this!?\", you ask yourself when you start levitating up from the floor. Turns out you " +
					"got super-powers from eating the candy. You punch a hole in the roof and fly away from the lodge.",
				end: "GOOD END: Superman!"
			}
		},
		answer2: {
			title: "Go outside",
			text: "You decided it was a good idea to go outside. When you try to open the door, you notice that it's locked.",
			answer1: {
				title: "Try to lockpick the door",
				text: "You don't have a lockpick, so you instead proceed by using your tounge. You quickly realize how bad " +
					"of an idea this was when your tounge gets cut by the door lock and you bleed to death because you couldn't get your tounge out.",
				end: "BAD END: The Lockpicker"
			},
			answer2: {
				title: "Smash down the door",
				text: "Somehow, even though you have never practiced karate before, you manage to break down the door with surprisingly skillful karate. " +
					"Once you get outside however, you realize how much you screwed up since you quickly freeze to death.",
				end: "BAD END: Going outside probably wasn't a good idea."
			}
		}
	});
}

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("restartButton").onclick = startGame;
	startGame();
});
