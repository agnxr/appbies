window.onload = function() {
//play video
    var video = document.getElementById("video");

    var playButton = document.getElementById("play");

playButton.addEventListener("click", function() {
    if (video.paused == true) {
      video.play();
      playButton.style.display="none";
  
    } 
  });
}