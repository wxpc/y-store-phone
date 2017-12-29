/**
 * @Author: jecyu
 * @Date: 2017-12-19 1:53:37 pm
 * @Modified By: jeCyu
 * @Last Modified time: 2017-12-27 6:28:28 pm
 */

var page = {
    onload: function() {
        this.init();
    },
    init: function() {
        this.bindEvent();
    },
    bindEvent: function() {
        // 用于判断是否折叠
        var isFolded = false;
        // expand or collaspe
        $(".fold-header").click(function() {
            // 取反
            isFolded = !isFolded;
            $header = $(this);
            $content = $header.next();
            $icon = $header.find(".iconfont");

            $content.slideToggle(500, function() {
                // 展开
                if (isFolded) {
                    $icon.removeClass("icon-row-down-copy");
                    $icon.addClass("icon-row-up");
                } else {
                    $icon.removeClass("icon-row-up");
                    $icon.addClass("icon-row-down-copy");
                }
            });
        });
    }
};

$(document).ready(function() {
    page.onload();
});
