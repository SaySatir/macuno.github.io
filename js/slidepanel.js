jQuery(document).ready(function($) {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300)
            $('#contact_info').animate({ 'left': '0px' }, 500);
        else
            $('#contact_info').stop(true).animate({ 'left': '-230px' }, 500);
    });
    $('#contact_info .close').bind('click', function() {
        $(this).parent().remove();
    });
});