//MOBILE SLIDER
$(document).ready(function() {
  
  //Fade in video
  $(function () {
    var video = document.getElementById("bg-video");
    video.addEventListener('play', function (e) {
      $('#bg-video').delay(300).animate({'opacity': '1'}, 500);
    });
  });
  
  //Activate responsive slider
  $(".touch .slides, .novideo .slides, .lt-ie8 .slides,.slides").responsiveSlides({
    speed: 500,
    timeout: 5000,
  });
  
  //Non-essential script for .btn
  $('.btn').click(function(e) {
    e.preventDefault();
    $('body').toggleClass('touch');
  });
});