function restart() {
	var video = document.getElementById("video-prueba");
	video.currentTime = 30;
}

function skip(value) {
	var video = document.getElementById("video-prueba");
	video.currentTime += 30;
}