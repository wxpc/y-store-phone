/**
 * @Author: jecyu
 * @Date: 2017-12-19 1:53:37 pm 
 * @Modified By: jeCyu 
 * @Last Modified time: 2017-12-19 2:38:44 pm 
 */

var page = {
    onload: function () {
        this.init();
    },
    init: function () {
        this.bindEvent()
    },
    bindEvent: function () {

        // expand or collaspe
        $('.fold-header').click(function () {
            $header = $(this);
            $content = $header.next();
            $icon = $header.find('.iconfont');

            $content.slideToggle(500, function () {

                if ($icon.hasClass('icon-row-down-copy')) {
                    $icon.removeClass('icon-row-down-copy');
                    $icon.addClass('icon-row-up');
                } 
                else {
                    $icon.removeClass('icon-row-up');
                    $icon.addClass('icon-row-down-copy');
                }
            });

        });
    },

};

$(document).ready(function () {
    page.onload();
});