$(window).resize(function () {
    var divHeightFive = $(".enr-sec-two .owl-stage-outer").height();
    $(".ener-banner").css("height", divHeightFive + "px");
    var divHeight = $(".home-content-side").height();
    $(".sus-imgone").css("min-height", divHeight + "px");
    var divHeighttw = $("#csr-side").height();
    $(".csr-img").css("min-height", divHeighttw + "px");
    var divHeightTh = $(".cnt--row").height();
    $(".pro--back").css("min-height", divHeightTh + "px");
});
$('.close').click(function(e) {
  e.preventDefault();
  $('.modal-body').children('iframe').attr('src', '');
});
$(".homeVideo").click(function (e) {
    var vSrc = $(this).attr("data-vsrc");
    vUrl = vSrc;
    $("#corporate--hme .modal-body iframe").attr("src", vSrc );
    setTimeout(function () {
        $("#corporate--hme").modal("show");
    }, 500);
});
window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "light2",
        exportEnabled: true,
        animationEnabled: true,
        title: { text: "Desktop Browser Market Share in 2016" },
        data: [
            {
                type: "pie",
                startAngle: 25,
                toolTipContent: "<b>{label}</b>: {y}%",
                showInLegend: "true",
                legendText: "{label}",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}%",
                dataPoints: [
                    { y: 51.08, label: "Chrome" },
                    { y: 27.34, label: "Internet Explorer" },
                    { y: 10.62, label: "Firefox" },
                    { y: 5.02, label: "Microsoft Edge" },
                    { y: 4.07, label: "Safari" },
                    { y: 1.22, label: "Opera" },
                    { y: 0.44, label: "Others" },
                ],
            },
        ],
    });
    chart.render();
};
$(function () {
    var divHeightFive = $(".enr-sec-two .owl-stage-outer").height();
    $(".ener-banner").css("height", divHeightFive + "px");
    var divHeightOne = $(".enr-sec-two .owl-stage-outer").height();
    $(".ener-banner").css("height", divHeightOne + "px");
    var divHeight = $(".corporate--video .relative").height();
    $(".invester-presentation iframe").css("height", divHeight + "px");
});
$(window).on("load", function () {
    var divHeightFive = $(".enr-sec-two .owl-stage-outer").height();
    $(".ener-banner").css("height", divHeightFive + "px");
    var divHeight = $(".home-content-side").height();
    $(".sus-imgone").css("min-height", divHeight + "px");
    var divHeighttw = $("#csr-side").height();
    $(".csr-img").css("min-height", divHeighttw + "px");
    var divHeightTh = $(".cnt--row").height();
    $(".pro--back").css("min-height", divHeightTh + "px");
});
$(document).ready(function () {
    var $html = $("html"),
        $body = $("body");
    $(document).delegate(".open", "click", function (event) {
        $(this).addClass("oppenned");
        event.stopPropagation();
    });
    var divHeight = $(".home-content-side").height();
    $(".sus-img").css("min-height", divHeight + "px");
    var divHeighttw = $("#csr-side").height();
    $(".csr-img").css("min-height", divHeighttw + "px");
    var divHeightTh = $(".cnt--row").height();
    $(".pro--back").css("min-height", divHeightTh + "px");
    var divHeightFive = $(".enr-sec-two .owl-stage-outer").height();
    $(".ener-banner").css("height", divHeightFive + "px");
    $(document).delegate("body", "click", function (event) {
        $(".open").removeClass("oppenned");
    });
    var vUrl;

    $(".modal-ener").click(function (e) {
        var vSrc = $(this).attr("data-vsrc");
        vUrl = vSrc;
        $("#videoEnergize .modal-body iframe").attr("src", vSrc + "?autoplay=1");
        setTimeout(function () {
            $("#videoEnergize").modal("show");
        }, 500);
    });

    $(".close").on("click", function (e) {
        $("#videoEner").attr("src", vUrl);
    });
    $("body").on("click", function (e) {
        var hasEle = $("#videoEnergize").hasClass("show");
        if (hasEle) {
            $("#videoEner").attr("src", vUrl);
        }
    });
    $("#Homepage-carousel").carousel({ interval: 4000 });
    $("#carouselHome").carousel({ interval: 3000 });
    $("#ser-input, .sea-mob").on("click", function (e) {
        e.stopPropagation();
        $(".search-full-view").addClass("search-normal-screen");
    });
    $(document).delegate(".cls", "click", function (event) {
        $(".open").removeClass("oppenned");
        event.stopPropagation();
    });
    $("#mtabs li").click(function () {
        $("#mtabs li").removeClass("active");
        $(this).addClass("active");
        $(".mtab_content").hide();
        var selected_tab = $(this).find("a").attr("href");
        $(selected_tab).fadeIn();
        return false;
    });
    $("body").click(function (e) {
        $(".search-full-view").removeClass("search-normal-screen");
    });
    $(".search-full-view").click(function (e) {
        e.stopPropagation();
    });
    $(".popup-mobile-click").on("click", function (e) {
        e.preventDefault(),
            (function () {
                $body.addClass("popup-mobile-menu-wrapper"), $html.css({ overflow: "hidden" });
            })();
    });
    $(".mobile-close").on("click", function (e) {
        e.preventDefault();
        menuClose();
    });
    $(".popup-mobile-visiable").on("click", function (e) {
        e.target === this && menuClose();
    });
    function menuClose() {
        $body.removeClass("popup-mobile-menu-wrapper"), $html.css({ overflow: "" });
    }
    $("#home-carousel").owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        autoplay: true,
        nav: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1, loop: true } },
    });
    $("#Solarcarousel, #csrmove").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        dots: true,
        navText: ["<img src='/static/embassy/images/arrow-left.png'>", "<img src='/static/embassy/images/arrow-right.png'>"],
        responsiveClass: true,
        responsiveRefreshRate: true,
        responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } },
    });
    var owl = $("#new-portfolio").owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        navText: ["<img src='/static/embassy/images/arrow--wt.png'>", "<img src='/static/embassy/images/arrow--wt.png'>"],
        onInitialized: counter,
        onTranslated: counter,
        responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1, nav: true } },
    });
    owl.owlcarousel2_filter(".Bengaluru");
    $(".owl-filter-bar").on("click", ".item", function () {
        var item = $(this);
        var filter = item.data("owl-filter");
        owl.owlcarousel2_filter(filter);
    });

    $(".owl-filter-bar").on("click", ".item", function () {
        var $item = $(this);
        var filter = $item.data("owl-filter");
        owl.owlcarousel2_filter(filter);
        var newi = $("#new-portfolio .owl-item").length;
        var newa = $("#new-portfolio .owl-item.active").length;
        setTimeout(function () {
            $("#new-portfolio .owl-nav").append('<p class = "counter cont"><span class="test">' + newa + '</span>/<span class="total"> ' + newi + "</span></p>");
        }, 100);
    });
    $(".owl-filter-bar a.item").click(function () {
        $(".owl-filter-bar a.item").removeClass("active");
        $(this).addClass("active");
    });
    $("#fact-check").owlCarousel({ loop: true, margin: 10, nav: false, autoplay: true, dots: true, responsiveClass: true, responsiveRefreshRate: true, responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } } });
    $("#property-carousel").owlCarousel({
        margin: 0,
        loop: true,
        nav: false,
        dots: true,
        responsive: {
            0: { items: 1, dots: true },
            600: { items: 1, dots: true, stagePadding: 100 },
            992: { items: 1, dots: true, stagePadding: 100 },
            1200: { items: 1, dots: true, stagePadding: 250 },
            1400: { items: 1, stagePadding: 250, dots: true },
            1800: { items: 1, stagePadding: 300, dots: true },
        },
    });
    $('#new-portfolio .owl-nav .owl-prev .cont').css({'display':'none'});
    $(".owl-filter-bar a").click(function () {
        var newi = $("#new-portfolio .owl-item").length;
        var newa = $("#new-portfolio .owl-item.active").length;
        var owl = $("#new-portfolio").owlCarousel({ onInitialized: counter, onTranslated: counter });
        function counter(event) {
            var element = event.target;
            var items = event.item.count;
            var item = event.item.index + 1;
            if (item > items) {
                item = item - items;
            }
            $("#new-portfolio .counter cont").html("<span class='testone'>" + item + "</span> / <span class='totalone'>" + items + "</span>");
        }
    });
});
function counter(event) {
    var element = event.target;
    var items = event.item.count;
    var item = event.item.index + 1;
    if (item > items) {
        item = item - items;
    }
    $("#new-portfolio .counter").html("<span class='testone'>" + item + "</span> / <span class='totalone'>" + items + "</span>");
}
