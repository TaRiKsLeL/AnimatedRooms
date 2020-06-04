let roomObjects = $('.room-objects').children();

let i = 0;
let interval = setInterval(function() {
    roomObjects.eq(i).addClass('animate__fadeInLeft');
    i++;
    if( i >= roomObjects.length ) {
        clearInterval(interval);
    }
}, 1000);

$('.worktable-slick').slick({
    // arrows: false,
    // dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });