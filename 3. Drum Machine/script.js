function play(str) {
	let displayField = document.getElementById("display");

	if (str === "q" || str === "Q") {
		displayField.innerText = "Piano 1";
	} else if (str === "w" || str === "W") {
		displayField.innerText = "Piano 2";
	} else if (str === "e" || str === "E") {
		displayField.innerText = "Piano 3";
	} else if (str === "a" || str === "A") {
		displayField.innerText = "Piano 4";
	} else if (str === "s" || str === "S") {
		displayField.innerText = "Piano 5";
	} else if (str === "d" || str === "D") {
		displayField.innerText = "Piano 6";
	} else if (str === "z" || str === "Z") {
		displayField.innerText = "Piano 7";
	} else if (str === "x" || str === "X") {
		displayField.innerText = "Piano 8";
	} else if (str === "c" || str === "C") {
		displayField.innerText = "Piano 9";
	}

	let audio = document.getElementById(str);
	audio.play();
}

// The keyup event is fired when a key is released/pushed.
// event.key returns the value of the key pressed by the user, taking into consideration the state of modifier keys such as Shift as well as the keyboard locale and layout.
//  See link: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key

window.document.onkeyup = function (e) {
	let keystroke = e.key;

	if (keystroke === "q" || keystroke === "Q") {
		play("Q");
	} else if (keystroke === "w" || keystroke === "W") {
		play("W");
	} else if (keystroke === "e" || keystroke === "E") {
		play("E");
	} else if (keystroke === "a" || keystroke === "A") {
		play("A");
	} else if (keystroke === "s" || keystroke === "S") {
		play("S");
	} else if (keystroke === "d" || keystroke === "D") {
		play("D");
	} else if (keystroke === "z" || keystroke === "Z") {
		play("Z");
	} else if (keystroke === "x" || keystroke === "X") {
		play("X");
	} else if (keystroke === "c" || keystroke === "C") {
		play("C");
	}
};
