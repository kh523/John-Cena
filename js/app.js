
	var audio = new Audio('/johncenashort.mp3');

	var imageSize = function() {
		document.getElementById("buttonUp").style.width = Math.min(window.innerHeight, window.innerWidth);
		document.getElementById("buttonUp").style.height = Math.min(window.innerHeight, window.innerWidth);
		document.getElementById("buttonDown").style.width = Math.min(window.innerHeight, window.innerWidth);
		document.getElementById("buttonDown").style.height = Math.min(window.innerHeight, window.innerWidth);

	}

	var clickDown = function() {
		audio.load();
		audio.play();
		document.getElementById("buttonUp").style.display = "none";
		document.getElementById("buttonDown").style.display = "block";
	}

	var clickUp = function() {
		document.getElementById("buttonUp").style.display = "block";
		document.getElementById("buttonDown").style.display = "none";
	}

	
