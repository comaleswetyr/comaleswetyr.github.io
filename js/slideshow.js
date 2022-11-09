$(function () {
    var current = 0,

    $imgs = jQuery('#slideshow .slide');
    imgAmount = $imgs.length;

    $($imgs.css('position', 'absolute')
            .css('min-width', '100%')
            .css('min-height', '100%')
            .css('width', 'auto')
            .css('height', 'auto')
            .hide().get(Math.floor(Math.random() * 14))
        ).show();

    window.setInterval(swapImages, 15000);

    function swapImages() {
        var $currentImg = $('.slide:visible');
        var $nextImg = $('.slide:hidden').eq(Math.floor(Math.random() * $('.slide:hidden').length));
            speed = 4000;

        // animation speed should be the same for both images so we have a smooth change
        $currentImg.fadeOut(speed);
        $nextImg.fadeIn(speed);
    }
});
