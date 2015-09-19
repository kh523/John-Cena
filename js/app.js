
	var audio;

	var imageSize = function() {
		audio = new Audio('/johncenashort.mp3');
		document.getElementById("button").style.width = Math.min(window.innerHeight, window.innerWidth);
		document.getElementById("button").src = "img/button unpressed.png";
	}

	var clickDown = function() {
		audio.pause();
		audio.currentTime = 0;
		audio.play();
	}

	
