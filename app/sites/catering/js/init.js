;(function ($){
    $(window).on('load', function(){
        //init modal
        $('._order-modal-open').on('click', function (){
            $('#order').bPopup({
                closeClass: 'close',
            });
        });

        // formstyler
        $('select').styler();

        //slick nav
        $('.menu').slicknav({
            prependTo: '.header .container',
            label: '',
        });
    })
})(jQuery)