if ((self.parent && !(self.parent === self)) &&
    (self.parent.frames.length != 0)) 
    { self.parent.location = document.location }

(function($) {
    $(function() {

        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.bar').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);