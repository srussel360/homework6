var video;
var vidVolume;


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
	if(video.muted == true){
		video.muted = false;
  		console.log("Unmuted");
	}
	else{
		video.muted = true;
		  console.log("Muted");
	}
}

function changeVolume() {
	vidVolume = document.getElementById('volumeSlider');
	video.volume = vidVolume;
	console.log("Volume is " + video.volume);
}
       

function gray() { 

	console.log("In grayscale")
}

function color() {

	console.log("In color") 
}
