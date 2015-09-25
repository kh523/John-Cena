
var audio;
var totalclicks;
var myDataRef = new Firebase('https://john-cenaaaa.firebaseio.com/');

var imageSize = function() {
	audio = new Audio('/johncenashort.mp3');
	document.getElementById("button").style.width = Math.min(window.innerHeight, window.innerWidth);
	document.getElementById("button").src = "img/button unpressed.png";

	myDataRef.once("value", function(data) {
		console.log(data.exportVal().totalclicks);
		totalclicks = data.exportVal().totalclicks;
		updateCounter();
	});
    
}

var clickDown = function() {
	audio.pause();
	audio.currentTime = 0;
	audio.play();
	totalclicks++;
	myDataRef.set({totalclicks: totalclicks});
	updateCounter();
}

var updateCounter = function() {
	document.getElementById("totalclicks").innerHTML = "Total Clicks: " + totalclicks;
}

myDataRef.on('child_changed', function(childSnapshot, prevChildKey) {
	totalclicks = childSnapshot.val();
	updateCounter();
});


