var video;
var volume;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play()
	console.log("Play Video");
	//get the volume element
	volume = document.querySelector("#volume");
	//change its text
	volume.innerHTML = video.volume * 100 + "%"
} 

function pauseVid() { 
	video.pause()
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate -= .2;
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate += .25;
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	video.currentTime = video.currentTime + 60;
	console.log("Current location is "+ video.currentTime);
} 

function mute() { 
	var muteButton = document.querySelector("#mute");
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
	var vidVolume = document.querySelector('#volumeSlider');
	video.volume = vidVolume.value / 100;
	console.log("Volume is " + video.volume);
	//get the volume element
	volume = document.querySelector("#volume");
	//change its text
	volume.innerHTML = video.volume * 100 + "%"
}
       

function gray() { 
	video.style.filter = "grayscale(100%)";
	console.log("In grayscale")
}

function color() {
	video.style.filter = "grayscale(0%)";
	console.log("In color") 
}



