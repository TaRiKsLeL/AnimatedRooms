let roomObjects = $('.room-objects').children();

let i = 0;
let interval = setInterval(function() {
    console.log($('.room-objects').eq(i));
    roomObjects.eq(i).addClass('showed');
    i++;
    if( i >= roomObjects.length ) {
        clearInterval(interval);
    }
}, 1500);