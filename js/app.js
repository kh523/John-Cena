
	var audio = new Audio('/johncenashort.mp3');

	var imageSize = function() {
		document.getElementById("button").style.width = Math.min(window.innerHeight, window.innerWidth);
	}

	var clickDown = function() {
		audio.load();
		audio.play();
	}

	
