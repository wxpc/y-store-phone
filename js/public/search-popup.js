/**
 * @Author: jecyu
 * @Date: 2018-01-05 5:55:30 pm
 * @Modified By: jeCyu
 * @Last Modified time: 2018-01-06 11:18:44 am
 */
/**  
    1.Click on the Search button
    2.Make a DIV with content appear when I click on the Search button
    3.Make the DIV disappear if I click on the search button again
    4.Style the DIV so it looks like a talk bubble 
    5. 点击周围，也删除搜索框 // 需要为searchbox添加一层outter
*/

/**
 * 创建 My 对象，含有两个函数，注册事件和单击事件。
 */
var My = My || {};
My.Searchbox = {
    Register: function(id) {
        $(id)
            .css({ cursor: "pointer" })
            .click(My.Searchbox.ClickHandler);
    },
    // 点击周围，也删除搜索框 // 需要
    // Close: function delSearch(id) {

    // },
    // 实现点击创建或删除搜索框
    ClickHandler: function(evt) {
        var clicked = $(evt.currentTarget);
        var id = "searchBox";
        var CreateDiv = My.Utils.CreateDiv;
        // alert("Your clicked Me!");
        // CreateDiv("searchBox", "bubble", 80, 100, 300, 100);
        evt.stopPropagation();

        // 找到所有的搜索框，超过1个就把它们删除
        if ($("#" + id).length > 0) {
            $("#" + id).remove();
            return;
        }

        // 计算搜索框大小和相对位置
        var left = (clicked.position().left + 20) / 75; // 转为rem
        var top = (clicked.position().top + clicked.height() + 100) / 75;
        var width = 8;
        var height = 1.5;

        // // 如果没有任何搜索框，就创建一个
        var srch = CreateDiv(id, "bubble", left, top, width, height);
        srch.html(
            "<div class='search'><input type='text' name='search' placeholder='搜索文章或商品'><i class='iconfont icon-magnifier'></i></div>"
        );
    }
};

My.Utils = {
    // 创建搜索框
    CreateDiv: function(id, cssClass, left, top, width, height) {
        return $("<div id='" + id + "' class='" + cssClass + "'></div>")
            .appendTo("body")
            .css({
                display: "block",
                position: "fixed",
                left: left + "rem",
                top: top + "rem",
                width: width + "rem",
                height: height + "rem"
            })
            .css("z-index", 9999);
    }
};

$(document).ready(function() {
    My.Searchbox.Register("#nav-search");
    // $(".searchBox-container").click(function del() {
    //     if ($(".searchBox-container").length > 0) {
    //         $(".searchBox-container").remove();
    //         return;
    //     }
    // });
});
