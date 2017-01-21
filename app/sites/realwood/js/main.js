//form styler

(function ($) {
    $(function () {
        $('select').styler();
    });
})(jQuery);

//calculator
(function ($) {
    $(document).ready(function () {
        $('.calc select').change(function () {
            var material = Number($('select#material').val());
            var length = Number($('select#length').val());
            var sort = Number($('select#sort').val());
            var width = Number($('select#width').val());
            var length_room = Number($('select#length-room').val());
            var width_room = Number($('select#width-room').val());

            var room_area = length_room * width_room;
            var volume_wood = width * length;
            var final_price = ((material * sort) * volume_wood) * room_area;

            $('span#price').text(final_price + ' ')
        })
    });
})(jQuery);

//side bar mobile btn
(function ($){
    $(window).on('load', function(){
        var sidebarBtn = $('.mobile-btn-sidebar');
        var sidebar = $('.sidebar');
        sidebarBtn.on('click', function (){
            sidebarBtn.toggleClass('open');
            sidebar.toggleClass('open');
        });
    });

})(jQuery);

//slider
$('[data-aim="slide"]').on('click', function () {

    var attrId = $(this).attr('id');

    switch (attrId) {

        case 'item-1':
            $(this).addClass('current-sm-slide');
            $('#item-2').removeClass('current-sm-slide');
            $('#item-3').removeClass('current-sm-slide');
            $('#slide-1').addClass('current-slide');
            $('#slide-2').removeClass('current-slide');
            $('#slide-3').removeClass('current-slide');
            break;

        case 'item-2':
            $(this).addClass('current-sm-slide');
            $('#item-1').removeClass('current-sm-slide');
            $('#item-3').removeClass('current-sm-slide');
            $('#slide-2').addClass('current-slide');
            $('#slide-1').removeClass('current-slide');
            $('#slide-3').removeClass('current-slide');
            break;

        case 'item-3':
            $(this).addClass('current-sm-slide');
            $('#item-1').removeClass('current-sm-slide');
            $('#item-2').removeClass('current-sm-slide');
            $('#slide-3').addClass('current-slide');
            $('#slide-1').removeClass('current-slide');
            $('#slide-2').removeClass('current-slide');
            break
    }
});
