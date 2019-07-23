$(window).load(function() {
  setTimeout(function(){
    $("#bg").fadeOut("slow"); 
  },1500);
})
window.onload = function() {

const video = document.getElementById("video");
const playButton = document.getElementById("play");

playButton.addEventListener("click", function() {
    if (video.paused == true ) {
      video.play();
      playButton.style.display="none"; 
    } 
  });
}

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