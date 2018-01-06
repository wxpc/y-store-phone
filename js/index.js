/**
 * @Author: jecyu
 * @Date: 2017-12-22 2:35:24 pm
 * @Modified By: jeCyu
 * @Last Modified time: 2018-01-06 12:21:28 pm
 */

var page = {
    onload: function() {
        this.init();
    },
    init: function() {
        this.bindEvent();
    },
    bindEvent: function() {
        var mySwiper = new Swiper(".swiper-container", {
            // direction: 'vertical',
            autoplay: {
                delay: 5000
            },
            simulateTouch: true,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                type: "bullets"
            },
            // Navigation arrows
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            // scrollbar
            scrollbar: {
                el: ".swiper-scrollbar"
            }
        });

        var swiper_product_Area = new Swiper(".swiper-container-2", {
            autoplay: {
                delay: 10000
            },
            simulateTouch: true,
            loop: true,
            slidesPerView: 3,
            spaceBetween: 0
        });

        // 找到card，取得href属性
        var cards = document.getElementsByClassName("card");
        for (var i = 0, len = cards.length; i < len; i++) {
            var source = cards[i].getAttribute("data-href");
            console.log(source);
            cards[i].addEventListener("click", function() {
                window.location = source;
            });
        }

        // fullscreen
    }
};

$(document).ready(function() {
    page.onload();
});
