var video;


function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play()
	console.log("Play Video");
} 

function pauseVid() { 
	video.pause()
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate = video.playbackRate-.2;
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate = video.playbackRate+.2;
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	video.currentTime = video.currentTime + 60;
	console.log("Current location is "+ video.currentTime);
} 

function mute() { 
	var muteButton = document.getElementById("mute");
	if(video.muted == true){
		video.muted = false;
		muteButton.innerHTML = "Mute"
  		console.log("Unmuted");
	}
	else{
		video.muted = true;
		muteButton.innerHTML = "Unmute"
		console.log("Muted");
	}
}

function changeVolume() {
	var vidVolume = document.getElementById('volumeSlider');
	video.volume = vidVolume.value / 100;
	console.log("Volume is " + video.volume);
}
       

function gray() { 
	video.style.filter = "grayscale(100%)";
	console.log("In grayscale")
}

function color() {
	video.style.filter = "grayscale(0%)";
	console.log("In color") 
}
