
  var textHolder = document.getElementById('divyanshu');
    
  // console.log('upar',textHolder);

  var text = textHolder.innerHTML;

  // console.log(text);

  var chars = text.length;
  var newText = '';
  var i;	

for (i = 0; i < chars; i++) {
	// console.log("arey ->>>> " + text.charAt(i));

	newText = newText + '<i>' + text.charAt(i) + '</i>';
}

// console.log(newText);

textHolder.innerHTML = newText;

var letters = document.getElementsByTagName('i')

console.log(letters);

var flickers = [5, 7, 9, 11, 13, 15, 17]    // Wow !!! 
var randomLetter
var flickerNumber
var counter;


// let's write a POC.
// Round a number downward to its nearest integer Math.floor();
// Return a random number between 0 (inclusive) and 1 (exclusive) Math.random();


function randomFromInterval(from,to) {
	return Math.floor(Math.random()*(to-from+1)+from);
}

// // DUMMY CALL

// var abc = randomFromInterval(2,4)
// console.log(abc);


function hasClass(element, cls) {

	console.log(element.className);

	console.log(element.className.indexOf(cls));

	// if(element.className == 'off')
	if(element.className == cls)
		return true;
	else
		return false;
	
	// POC 
	// var str = "Hello world, welcome to the universe.";
    // var n = str.indexOf("welcome");

    // return (element.className).indexOf(cls) > -1;
}

//POC for element and class Name !!

function flicker() {		
	counter += 1;
	
	// console.log("Counter",counter);

	if (counter === flickerNumber) {
		return;
	}

	// if (counter === flickerNumber) {
	// 	console.log('going back !');
	// 	return;
	// }

	setTimeout(function () {
		if(hasClass(randomLetter, 'off')) {
			randomLetter.className = '';
		}
		else {
			randomLetter.className = 'off';
		}

		flicker();
	}, 300);
}

(function loop() {

    // var rand = randomFromInterval(500,3000);

    // console.log(rand);

	randomLetter = randomFromInterval(0, 5);

	// console.log("eeeeeee" + randomLetter);

	// array of letters !!!
	randomLetter = letters[randomLetter];

	// console.log("array" + randomLetter);
	
	flickerNumber = randomFromInterval(0, 6);

	// flickers array !!! cool !!!! :) 
	flickerNumber = flickers[flickerNumber];

	console.log("flicker Number",flickerNumber);

     setTimeout(function() {

    // 		console.log('I am in !');
            counter = 0;
    //         // calls flicker function !!!
            flicker();  
    //         // calls loop function !!!
             loop();  
     }, 1000);


}());


// (function joker(){

// 	console.log("akshat");
// }());




