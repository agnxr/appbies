// == preloader ==
$(window).load(function() {
  $("#bg").delay(500).fadeOut("slow"); 
})


window.onload = function() {

//play video
var video = document.getElementById("video");

var playButton = document.getElementById("play");

playButton.addEventListener("click", function() {
    if (video.paused == true ) {
      video.play();
      playButton.style.display="none"; 
    } 

  });

}

// === slider 
prevArrow: $('.prev');
nextArrow: $('.next');

$(document).ready(function(){

    $('.slider').slick({
  
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 900,
      arrows: true,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });

    //=== smooth scroll ===

  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });


  });