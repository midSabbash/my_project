//slick nav mobile
(function ($) {
    $(function () {
        $('#menu').slicknav();
    })
})(jQuery);

//slick slider
(function ($) {
    $(function () {
        $('.sl_slider').slick({
            dots: true
        });
    });
})(jQuery);

//form styler
(function ($) {
    $(function () {
        $('select').styler();
    });
})(jQuery);

// form validation
(function ($) {
    $(document).ready(function () {

        // unbind focus
        $('input#name, input#email, textarea#message').unbind().blur(function () {

            var id = $(this).attr('id');
            var val = $(this).val();

            switch (id) {
                // check name
                case 'name':
                    var rv_name = /^[a-zA-Zа-яА-Я]+$/; // reg for name

                    if (val.length > 2 && val != '' && rv_name.test(val)) {
                        $(this).addClass('not_error');
                        $(this).next('.error-box').text(' ')
                    }
                    else {
                        $(this).removeClass('not_error').addClass('error');
                        $(this).next('.error-box').html('* Please enter valid name.')
                    }
                    break;

                // check email
                case 'email':
                    var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;  //reg for email

                    if (val != '' && rv_email.test(val)) {
                        $(this).addClass('not_error');
                        $(this).next('.error-box').text(' ')
                    }
                    else {
                        $(this).removeClass('not_error').addClass('error');
                        $(this).next('.error-box').html('* Please enter valid email.')
                    }
                    break;

                // check commit
                case 'message':
                    if (val != '' && val.length < 5000) {
                        $(this).addClass('not_error');
                        $(this).next('.error-box').text(' ')
                    }
                    else {
                        $(this).removeClass('not_error').addClass('error');
                        $(this).next('.error-box').html('fill in this field.')
                    }
                    break;
            }

        });

        $('form#feedback-form').submit(function (e) {

            e.preventDefault();

            if ($('.not_error').length == 3) {

                $.ajax({
                    url: 'send.php',
                    type: 'post',
                    data: $(this).serialize(),

                    beforeSend: function (xhr, textStatus) {
                        $('form#feedback-form :input').attr('disabled', 'disabled');
                    },

                    success: function (response) {
                        $('form#feedback-form :input').removeAttr('disabled');
                        $('form#feedback-form :text, textarea').val('').removeClass().next('.error-box').text('');
                        alert(response);
                    }
                });
            }
            else {
                $('form#feedback-form').reset();
                return false;

            }
        });
    });
})(jQuery);