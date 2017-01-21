var fullHeight = $(window).height();

$(window).on('load', function () {
    $('body,html').animate({scrollTop: 0});
    $('main').removeClass('fixed').removeClass('scale');
    $('header').removeClass('scale')

});

var text = 0;
$(window).scroll(function () {
    var scrolled = window.pageYOffset;
    console.log(scrolled);
    if (text < scrolled) {
        if (scrolled > 350) {
            $('header').addClass('scale')
        }
        if (scrolled > fullHeight) {
            $('main').addClass('fixed');
        }
        if (scrolled >= fullHeight * 2.35) {
            $('main').addClass('scale');
        }
        text = scrolled;
    }
    if (text > scrolled) {
        if (scrolled <= fullHeight + 50) {
            $('main').removeClass('fixed');
        }
        if (scrolled <= fullHeight * 2.5) {
            $('main').removeClass('scale');
        }
        if (scrolled <= 350) {
            $('header').removeClass('scale');
        }
        text = scrolled;
    }
});