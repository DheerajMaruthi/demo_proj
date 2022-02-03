$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 700) {
        $(".sticky-section").addClass("sticky");
    } else {
        $(".sticky-section").removeClass("sticky");
    }
});


  $('.close').click(function(e) {
    e.preventDefault();
    $('.modal-body').children('iframe').attr('src', '');
  });

if ($(window).width() > 1224) {
    $readMoreJS.init({ target: ".dummy", numOfWords: 100, toggle: true, moreLink: "Read More", lessLink: "Read Less" });
}
if ($(window).width() < 1223) {
    $readMoreJS.init({ target: ".dummy", numOfWords: 80, toggle: true, moreLink: "Read More", lessLink: "Read Less" });
}
$(function () {
    var link = $("#navbar a.dot");
    link.on("click", function (e) {
        var target = $($(this).attr("href"));
        $("html, body").animate({ scrollTop: target.offset().top }, 600);
        $(this).addClass("active");
        e.preventDefault();
    });
    $.fn.isOnScreen = function () {
        var win = $(window);
        var viewport = { top: win.scrollTop(), left: win.scrollLeft() };
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();
        var bounds = this.offset();
        bounds.right = bounds.left + this.outerWidth();
        bounds.bottom = bounds.top + this.outerHeight();
        return !(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom);
    };
    $(window).scroll(function () {
        if ($(".social-share").isOnScreen() == true) {
            $("#navbar").hide();
        } else {
            $("#navbar").show();
        }
    });
    $(window).on("scroll", function () {
        scrNav();
    });
    function scrNav() {
        var sTop = $(window).scrollTop();
        $("section").each(function () {
            var id = $(this).attr("id"),
                offset = $(this).offset().top - 1,
                height = $(this).height();
            if (sTop >= offset && sTop < offset + height) {
                link.removeClass("active");
                $("#navbar")
                    .find('[data-scroll="' + id + '"]')
                    .addClass("active");
            }
        });
    }
    scrNav();
});
$(window).resize(function () {
    var divHeightCam = $(".outer-loc").height();
    $(".campus--banner").css("height", divHeightCam + "px");
    var divHeightCss = $(".mtab_content ").height();
    $(".firstblock").css("height", divHeightCss + "px");
    var divHeightInc = $(".corp-wrapper iframe").height();
    $(".cor-video-banner").css("height", divHeightInc + "px");
    var divHeightInb = $(".cal-section").height();
    $(".events-inner").css("height", divHeightInb + "px");
    var divHeightSocialOne = $(".sic-ed").height();
    $("#owledu .social--banner").css("height", divHeightSocialOne + "px");
    var divHeightSocialTwo = $(".heigt").height();
    $("#owlhealth .social--banner").css("height", divHeightSocialTwo + "px");
    var divHeightSocialThree = $(".dvh").height();
    $(".social-seven-img .social--banner").css("height", divHeightSocialThree + "px");
    var divHeightSocialFour = $(".sustain-three .inner--div").height();
    $("#owlpolicy .social--banner").cs;
    $("height", divHeightSocialFour + "px");
    var divHeightSocialFive = $(".sustain-four .inner--div").height();
    $("#owlenv .social--banner").css("height", divHeightSocialFive + "px");
    var divHeightSocialSix = $(".sustain-five .bg--blue").height();
    $(".sus-inner--div").css("height", divHeightSocialSix + "px");
    var divHeightStru = $(".str-div").height();
    $(".stru-banner").css("height", divHeightStru + "px");
});
$(function () {
    var divHeightCss = $(".mtab_content ").height();
    $(".firstblock").css("height", divHeightCss + "px");
    var divHeightCam = $(".cam--txt").height();
    $("#campus .campus--banner").css("height", divHeightCam + "px");
    var divHeightInc = $(".corp-wrapper iframe").height();
    $(".cor-video-banner").css("height", divHeightInc + "px");
    var divHeightInb = $(".cal-section").height();
    $(".events-inner").css("height", divHeightInb + "px");
    var divHeightSocialOne = $(".sic-ed").height();
    $("#owledu .social--banner").css("height", divHeightSocialOne + "px");
    var divHeightSocialTwo = $(".heigt").height();
    $("#owlhealth .social--banner").css("height", divHeightSocialTwo + "px");
    var divHeightSocialThree = $(".dvh").height();
    $(".social-seven-img .social--banner").css("height", divHeightSocialThree + "px");
    var divHeightSocialFour = $(".sustain-three .inner--div").height();
    $("#owlpolicy .social--banner").css("height", divHeightSocialFour + "px");
    var divHeightSocialFive = $(".sustain-four .inner--div").height();
    $("#owlenv .social--banner").css("height", divHeightSocialFive + "px");
    var divHeightSocialSix = $(".sustain-five .bg--blue").height();
    $(".sus-inner--div").css("height", divHeightSocialSix + "px");
    var divHeightStru = $(".str-div").height();
    $(".stru-banner").css("height", divHeightStru + "px");
});
var divHeightCam = $(".cam--txt").height();
$("#campus .campus--banner").css("height", divHeightCam + "px");
$(window).on("load", function () {
    var divHeightCam = $(".cam--txt").height();
    $("#campus .campus--banner").css("height", divHeightCam + "px");
    var divHeightInc = $(".corp-wrapper iframe").height();
    $(".cor-video-banner").css("height", divHeightInc + "px");
    var divHeightCss = $(".mtab_content ").height();
    $(".firstblock").css("height", divHeightCss + "px");
    var divHeightStru = $(".str-div").height();
    $(".stru-banner").css("height", divHeightStru + "px");
    var divHeightInb = $(".cal-section").height();
    $(".events-inner").css("height", divHeightInb + "px");
    var divHeightCam = $(".outer-loc").height();
    $("#campus .campus--banner").css("height", divHeightCam + "px");
    var divHeightSocialOne = $(".sic-ed").height();
    $("#owledu .social--banner").css("height", divHeightSocialOne + "px");
    var divHeightSocialTwo = $(".heigt").height();
    $("#owlhealth .social--banner").css("height", divHeightSocialTwo + "px");
    var divHeightSocialThree = $(".dvh").height();
    $(".social-seven-img .social--banner").css("height", divHeightSocialThree + "px");
    var divHeightSocialFour = $(".sustain-three .inner--div").height();
    $("#owlpolicy .social--banner").css("height", divHeightSocialFour + "px");
    var divHeightSocialFive = $(".sustain-four .inner--div").height();
    $("#owlenv .social--banner").css("height", divHeightSocialFive + "px");
    var divHeightSocialSix = $(".sustain-five .bg--blue").height();
    $(".sus-inner--div").css("height", divHeightSocialSix + "px");
    var newi = $("#new-portfolio .owl-item").length;
    var newa = $("#new-portfolio .owl-item.active").length;
    setTimeout(function () {
        $("#new-portfolio .owl-nav").append('<p class = "counter cont"><span class="testone">' + newa + '</span>/<span class="totalone"> ' + newi + " </span></p>");
    }, 100);
});
var divHeightCam = $(".outer-loc").height();
$(".campus--banner").css("height", divHeightCam + "px");

var owl = $("#available-car").owlCarousel({
    loop: false,
    margin: 10,
    navText: ["<img src='/static/embassy/images/arrow-mt2.png'>", "<img src='/static/embassy/images/arrow-mt.png'>"],
    responsive: {
        0: { items: 1, nav: false, dots: true },
        600: { items: 1, dots: true, nav: false, stagePadding: 0 },
        992: { items: 1, dots: true, nav: false, stagePadding: 0 },
        1200: { items: 2, dots: false, nav: true, stagePadding: 0 },
        1400: { items: 3, center: false, stagePadding: 0, nav: true, dots: true },
        1800: { items: 3, center: false, stagePadding: 0, nav: true, dots: true },
    },
});

$(function () {
    $(".exchangeFilter select ").change(function () {
        $("#" + $(this).val()).show();
        $(".exchange--value").hide();
    });
});
var newi = $("#new-portfolio .owl-item").length;
console.log(newi);
$(function () {
    if ($(".nav--elements  .btn-link").attr("aria-expanded") === "false") {
        $(this).css("color", "#646464");
    } else if ($(".nav--elements .btn-link").attr("aria-expanded") === "true") {
        $(this).css("css", "#000000");
        alert("true");
    }
});
$(window).on("resize", function () {
    var divHeight = $(".corporate--video .relative").height();
    $(".invester-presentation iframe").css("height", divHeight + "px");
    var divHeightOne = $(".enr-sec-two .owl-stage-outer").height();
    $(".ener-banner").css("height", divHeightOne + "px");
    var divHeightCam = $(".cam--txt").height();
    $("#campus .campus--banner").css("height", divHeightCam + "px");
});
$(function () {
    $("#prtfolio").on("slide.bs.carousel", function () {
        $(".carousel-indicators li").each(function () {
            if ($(this).hasClass("active")) {
                var divHeightCam = $(".cam--txt").height();
                $("#campus .campus--banner").css("height", divHeightCam + "px");
            }
        });
    });
    var divHeightCam = $(".cam--txt").height();
    $("#campus .campus--banner").css("height", divHeightCam + "px");
    var divHeightOne = $(".enr-sec-two .owl-stage-outer").height();
    $(".ener-banner").css("height", divHeightOne + "px");
    var divHeight = $(".corporate--video .relative").height();
    $(".invester-presentation iframe").css("height", divHeight + "px");
});
$(document).ready(function () {
    $(".carousel-inner").each(function (e) {
        1 === $(this).children("div").length && $(this).siblings(".carousel-control, .carousel-indicators").hide();
    });
    $("#owledu, #owlpolicy, #owlenv").owlCarousel({ loop: true, margin: 10, responsiveClass: true, responsive: { 0: { items: 1, nav: false }, 600: { items: 1, nav: false }, 1000: { items: 1, nav: false, loop: true, dots: true } } });
    $("#myNew li a").click(function () {
        var dataid = $(this).attr("data-slide");
        $(".tab-show").removeClass("active");
        $("#" + dataid).addClass("active");
        $("#myNew li a").removeClass("active");
        $(this).addClass("active");
    });
    $(".apply-new").click(function () {
        $("#role-overview").fadeOut();
        $("#apply-forms").fadeIn();
        $(".overview").removeClass("active");
        $(".appllyfrm").addClass("active");
        $("html, body").animate({ scrollTop: $("#myTabContentNew").position().top });
    });
    $("#myTabone li a").click(function () {
        var dataid = $(this).attr("data-slide");
        $(".tab-show").removeClass("active");
        $("#" + dataid).addClass("active");
        $("#myTabone li a").removeClass("active");
        $(this).addClass("active");
    });
    $(".rplyFrm").click(function () {
        $(".rplyfrm").fadeOut();
        $(this).parent().next().fadeToggle();
    });
    $("#owlhealth").owlCarousel({ loop: true, margin: 10, responsiveClass: true, responsive: { 0: { items: 1, nav: false }, 600: { items: 1, nav: false }, 1000: { items: 1, nav: false, loop: true, dots: true } } });
    $("#corporate").owlCarousel({ loop: true, margin: 40, responsiveClass: true, responsive: { 0: { items: 1, nav: false }, 600: { items: 2, nav: false, margin: 20 }, 1400: { items: 3, nav: false, loop: true, dots: true } } });
    $("#embassy-one #building").attr("id", "embassy-building");
    $("#embassy-building")
        .owlCarousel({
            loop: false,
            margin: 30,
            center: true,
            autoplay: true,
            nav: false,
            dots: true,
            responsiveClass: true,
            scrollPerPage: true,
            responsive: { 0: { items: 1, nav: false, slideBy: 1 }, 600: { items: 2, nav: false, slideBy: 2 }, 1000: { items: 3, nav: false, loop: false, autoplay: false, dots: true, center: false, slideBy: 3 } },
        })
        .css("z-index", 0);
    $("#building")
        .owlCarousel({
            loop: false,
            margin: 30,
            center: false,
            autoplay: true,
            nav: false,
            dots: true,
            responsiveClass: true,
            scrollPerPage: true,
            responsive: { 0: { items: 1, nav: false, slideBy: 1 }, 600: { items: 2, nav: false, slideBy: 2 }, 1000: { items: 3, nav: false, loop: false, autoplay: false, dots: true, center: false, slideBy: 3 } },
        })
        .css("z-index", 0);
    $("#event-car, #pastcar").owlCarousel({ loop: true, margin: 10, responsiveClass: true, responsive: { 0: { items: 1, nav: false }, 600: { items: 3, nav: false }, 1000: { items: 3, nav: false, loop: true, dots: true } } });
    $("#past-car").owlCarousel({ loop: true, margin: 10, responsiveClass: true, responsive: { 0: { items: 1, nav: false }, 600: { items: 3, nav: false }, 1000: { items: 3, nav: false, loop: true, dots: true } } });
    $(".facncybox-fac").fancybox({ prevEffect: "none", nextEffect: "none", helpers: { title: { type: "outside" }, thumbs: { width: 50, height: 50 } } });
    size_li = $("#sustain-three li").length;
    x = 3;
    $("#sustain-three li:lt(" + x + ")").show();
    $("#loadMoreone").click(function () {
        x = x + 3 <= size_li ? x + 3 : size_li;
        $("#sustain-three li:lt(" + x + ")").show();
        $("#showLessone").show();
        if (x == size_li) {
            $("#loadMoreone").hide();
        }
    });
    $("#showLessone").click(function () {
        x = x - 3 < 0 ? 2 : x - 3;
        $("#sustain-three li")
            .not(":lt(" + x + ")")
            .hide();
        $("#loadMoreone").show();
        $("#showLessone").show();
        if (x == 2) {
            $("#showLessone").hide();
        }
    });
    size_li_two = $("#sustain-four li").length;
    xtwo = 2;
    $("#sustain-four li:lt(" + xtwo + ")").show();
    $("#loadMoretwo").click(function () {
        xtwo = xtwo + 2 <= size_li_two ? xtwo + 2 : size_li_two;
        $("#sustain-four li:lt(" + xtwo + ")").show();
        $("#showLesstwo").show();
        if (xtwo == size_li_two) {
            $("#loadMoretwo").hide();
        }
    });
    $("#showLesstwo").click(function () {
        xtwo = xtwo - 2 < 0 ? 2 : xtwo - 2;
        $("#sustain-four li")
            .not(":lt(" + xtwo + ")")
            .hide();
        $("#loadMoretwo").show();
        $("#showLesstwo").show();
        if (xtwo == 2) {
            $("#showLesstwo").hide();
        }
    });
    $(".exchangeFilter select")
        .change(function () {
            $(this)
                .find("option:selected")
                .each(function () {
                    var optionValue = $(this).attr("value");
                    console.log(optionValue);
                    if (optionValue) {
                        $(".exchange--value")
                            .not("." + optionValue)
                            .hide();
                        $("." + optionValue).show();
                    } else {
                        $(".exchange--value").hide();
                    }
                });
        })
        .change();
    $(document).ready(function () {
        $(".fancybox-fac, .fancybox-ava").fancybox({ prevEffect: "none", padding: 0, nextEffect: "none", closeBtn: "true", helpers: { title: { type: "outside" }, thumbs: { width: 50, height: 50 }, overlay: { locked: false } } });
    });
    $(".zoom-image").each(function () {
        var originalImagePath = $(this).find("img").data("original-image");
        $(this).zoom({ url: originalImagePath, magnify: 0.8 });
    });
    $(".triangle-embs").hide();
    setTimeout(function () {
        $(".triangle-embs").show();
    }, 2000);
    var divHeight = $(".corporate--video .relative").height();
    $(".invester-presentation iframe").css("height", divHeight + "px");
    var divHeightOne = $(".enr-sec-two .owl-stage-outer").height();
    $(".ener-banner").css("height", divHeightOne + "px");
    var showChar = 110;
    var ellipsestext = "...";
    var moretext = "Read More";
    var lesstext = "Read Less";
    $(".sort-properties li a").on("click", function () {
        var filter = $(this).attr("data-value");
        if (filter == "all") {
            $(".prop--list").removeClass("is-hidden");
        } else {
            $(".prop--list").addClass("is-hidden");
            $(".prop--list[data-category=" + filter + "]").removeClass("is-hidden");
        }
    });
    $(".sort-properties li").click(function () {
        $(".sort-properties li").removeClass("active");
        $(this).addClass("active");
    });
    $(".site-link-wrapper a").css({ "text-transform": "uppercase", "font-size": "16px", padding: "14px 30px" });
    $("#accordionOne .collapse.show").each(function () {
        $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
    });
    $("#accordionOne .collapse")
        .on("#accordionOne show.bs.collapse", function () {
            $(this).prev("#accordionOne .card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
        })
        .on("hide.bs.collapse", function () {
            $(this).prev("#accordionOne .card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
        });
    $("#accordionsss .collapse.show").each(function () {
        $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
    });
    $("#accordionsss .collapse")
        .on("#accordionOne show.bs.collapse", function () {
            $(this).prev("#accordionsss .card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
        })
        .on("hide.bs.collapse", function () {
            $(this).prev("#accordionsss .card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
        });
    $("#accordionScs .collapse.show").each(function () {
        $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
    });
    $("#accordionScs .collapse")
        .on("#accordionOne show.bs.collapse", function () {
            $(this).prev("#accordionScs .card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
        })
        .on("hide.bs.collapse", function () {
            $(this).prev("#accordionScs .card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
        });
    var vUrl;
    $(".modal-corporate").click(function (e) {
        var vSrc = $(this).attr("data-vsrc");
        vUrl = vSrc;
        $("#videoCorporate .modal-body iframe").attr("src", vSrc + "?autoplay=1");
        setTimeout(function () {
            $("#videoCorporate").modal("show");
        }, 500);
    });
    $('#assets option[value=""]').text("Assets");
    $('#area option[value=""]').text("Area");
    $(".modalCorporate").click(function (e) {
        var vSrc = $(this).attr("data-vsrc");
        vUrl = vSrc;
        $("#corporate--vid .modal-body iframe").attr("src", vSrc + "?autoplay=1");
        setTimeout(function () {
            $("#corporate--vid").modal("show");
        }, 500);
    });
    $(".homeVideo").click(function (e) {
        var vSrc = $(this).attr("data-vsrc");
        vUrl = vSrc;
        $("#corporate--hme .modal-body iframe").attr("src", vSrc + "?autoplay=1");
        setTimeout(function () {
            $("#corporate--hme").modal("show");
        }, 500);
    });
    $(".modal-event").click(function (e) {
        var vSrc = $(this).attr("data-vsrc");
        vUrl = vSrc;
        $("#videoEvents .modal-body iframe").attr("src", vSrc + "?autoplay=1");
        setTimeout(function () {
            $("#videoEvents").modal("show");
        }, 500);
    });
    // var newHtml = $(".cont").html();
    // console.log(newHtml);
    // $("#new-port-car .owl-nav .owl-prev").prepend('<p class = "cont">' + newHtml + "</p>");
    $(".modal-social").click(function (e) {
        var vSrc = $(this).attr("data-vsrc");
        vUrl = vSrc;
        $("#videoSocial .modal-body iframe").attr("src", vSrc + "?autoplay=1");
        setTimeout(function () {
            $("#videoSocial").modal("show");
        }, 500);
    });
    $(".corporate--video").click(function (e) {
        var vSrc = $(this).attr("data-vsrc");
        vUrl = vSrc;
        console.log(vSrc);
        $("#videoInvestor .modal-body iframe").attr("src", vSrc + "?autoplay=1");
        setTimeout(function () {
            $("#videoInvestor").modal("show");
        }, 500);
    });
    var hes = $(".maindesc").text().length;
    console.log(hes);
    if (hes >= 300) {
        $(".maindesc").css("height", "150px");
        $(".maindesc").css("overflow-y", "auto");
    } else {
        $(".maindesc").css("height", "inherit");
        $(".maindesc").css("overflow-y", "inherit");
    }
    $(".modal-gal").click(function (e) {
        var vSrc = $(this).attr("data-vsrc");
        vUrl = vSrc;
        console.log(vSrc);
        $("#videoGallery .modal-body iframe").attr("src", vSrc + "?autoplay=1");
        setTimeout(function () {
            $("#videoGallery").modal("show");
        }, 500);
    });

    $("#career-img").click(function (e) {
        var vSrc = $(this).attr("data-vsrc");
        vUrl = vSrc;
        console.log(vSrc);
        $("#career-modal .modal-body iframe").attr("src", vSrc + "?autoplay=1");
        setTimeout(function () {
            $("#career-modal").modal("show");
        }, 500);
    });
    $(".modal-overview").click(function (e) {
        var vSrc = $(this).attr("data-vsrc");
        vUrl = vSrc;
        console.log(vSrc);
        $("#investor-vid .modal-body iframe").attr("src", vSrc + "?autoplay=1");
        setTimeout(function () {
            $("#investor-vid").modal("show");
        }, 500);
    });
    var vUrl;
    $(".modal-img").click(function (e) {
        var vSrc = $(this).attr("data-vsrc");
        vUrl = vSrc;
        $(".modal-img .modal-body iframe").attr("src", vSrc + "?autoplay=1");
        setTimeout(function () {
            $("#my--video").modal("show");
        }, 500);
    });

    $(".modal-img").click(function (e) {
        var vSrc = $(this).attr("data-vsrc");
        vUrl = vSrc;
        $("#investor-vid .modal-body iframe").attr("src", vSrc + "?autoplay=1");
        setTimeout(function () {
            $("#my--video").modal("show");
        }, 500);
    });

    $("#corporate--vid").on("hidden.bs.modal", function () {
        $(".modal iframe").attr("src", "");
    });

    $("#investor-vid").on("hidden.bs.modal", function () {
        $(".modal iframe").attr("src", "");
    });

    // $(".modal").on("hidden.bs.modal", function () {
    //     $(".modal iframe").attr("src", "");
    // });

    $(function () {
        $(".investorssa[href*=\\#]:not([href=\\#])").click(function () {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    $("html,body").animate({ scrollTop: target.offset().top }, 500);
                    return false;
                }
            }
        });
    });
    $(".sidebar__inner ul li a").click(function (e) {
        var dataid = $(this).attr("data-slide");
        $(".asset--common").removeClass("active--show");
        $("#" + dataid).addClass("active--show");
        $(".sidebar__inner ul li a").removeClass("active");
        $(this).addClass("active");
    });
    $(".owl-filter-bartwo").on("click", ".itemBlocl", function () {
        var $item = $(this);
        var filter = $item.data("owl-filter");
        owl.owlcarousel2_filter(filter);
    });
    var owlTwo = $("#owlBlocks").owlCarousel({ loop: true, margin: 10, nav: true, responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 2 } } });
    $(".object-custom-menu > li.has-mega-menu > a").on("click", function (e) {
        e.preventDefault();
        $(this).siblings(".object-submenu").slideToggle("400");
        $(this).toggleClass("active").siblings(".object-submenu").toggleClass("is-visiable");
    });
    $(".circle-bg").click(function () {
        $(".outer-icons").fadeToggle();
    });
    $(".clse-icon").click(function () {
        $(".outer-icons").fadeOut();
    });
    var $html = $("html"),
        $body = $("body");
    function searchClose() {
        $body.removeClass("page-search-popup-opened"), $html.css({ overflow: "" });
    }
    $(".btn-search-click").on("click", function (e) {
        e.preventDefault(),
            (function () {
                $body.addClass("page-search-popup-opened"), $html.css({ overflow: "hidden" });
                var e = $(".brook-search-popup").find("form input[type='search']");
                setTimeout(function () {
                    e.focus();
                }, 500);
            })();
    });
    $(".search-close").on("click", function (e) {
        e.preventDefault();
        searchClose();
    });
    $(".brook-search-popup").on("click", function (e) {
        e.target === this && searchClose();
    });
    var sync1 = $("#owl-timeline");
    var sync2 = $("#time-year");
    var slidesPerPage = 3;
    var syncedSecondary = true;
    sync1
        .owlCarousel({
            items: 3,
            slideSpeed: 2000,
            nav: false,
            autoplay: false,
            dots: false,
            margin: 40,
            loop: true,
            responsive: { 0: { items: 1, dots: false }, 600: { items: 2, nav: false }, 1000: { items: 3, nav: false } },
            responsiveRefreshRate: 200,
            navText: [
                '<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>',
                '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>',
            ],
        })
        .on("changed.owl.carousel", syncPosition);
    sync2
        .on("initialized.owl.carousel", function () {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            margin: 40,
            nav: true,
            smartSpeed: 200,
            slideSpeed: 500,
            navText: ["<img src='/static/embassy/images/abt--lft.png'>", "<img src='/static/embassy/images/abt-rgt.png'>"],
            loop: true,
            responsive: { 0: { items: 1, dots: true }, 600: { items: 2, nav: true }, 1000: { items: 3, nav: true } },
            slideBy: slidesPerPage,
        })
        .on("changed.owl.carousel", syncPosition2);
    function syncPosition(el) {
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - el.item.count / 2 - 0.5);
        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
        sync2.find(".owl-item").removeClass("current").eq(current).addClass("current");
        var onscreen = sync2.find(".owl-item.active").length - 1;
        var start = sync2.find(".owl-item.active").first().index();
        var end = sync2.find(".owl-item.active").last().index();
        if (current > end) {
            sync2.data("owl.carousel").to(current, 100, true);
        }
        if (current < start) {
            sync2.data("owl.carousel").to(current - onscreen, 100, true);
        }
    }
    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data("owl.carousel").to(number, 100, true);
        }
    }
    sync2.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data("owl.carousel").to(number, 300, true);
    });
});
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 800) {
        $("#fixed-download").fadeIn();
    } else {
        $("#fixed-download").fadeOut();
    }
});
$(document).ready(function () {
    $(".zoom").click(function () {
        $(".product-photo").width($(".product-photo").width() * 1.2);
        $(".product-photo").height($(".product-photo").height() * 1.2);
    });
    $(".zoom-out").click(function () {
        $(".product-photo").width($(".product-photo").width() / 1.2);
        $(".product-photo").height($(".product-photo").height() / 1.2);
    });
    $("#healthTab li").click(function () {
        $("#healthTab li").removeClass("active");
        $(this).addClass("active");
    });
    $("body").click(function (e) {
        $(".search-full-view").removeClass("search-normal-screen");
    });
    $(".search-full-view").click(function (e) {
        e.stopPropagation();
    });
    $("#ser-input, .sea-mob").on("click", function (e) {
        $(".search-full-view").addClass("search-normal-screen");
    });
    $(".bod--main h5, .bod--main img").click(function () {
        $("#boardDire ").modal("show");
    });
    $("#job-dob").datepicker({ format: "dd/mm/yyyy", autoclose: true, orientation: "top", endDate: "-18y", changeMonth: true, changeYear: true, maxDate: 0, yearRange: '-110:-18' });
    var $html = $("html"),
        $body = $("body");
    $(document).delegate(".open", "click", function (event) {
        $(this).addClass("oppenned");
        event.stopPropagation();
    });
    $(document).delegate("body", "click", function (event) {
        $(".open").removeClass("oppenned");
    });
    $(document).delegate(".cls", "click", function (event) {
        $(".open").removeClass("oppenned");
        event.stopPropagation();
    });
    var showChar = 115;
    var ellipsestext = "";
    var moretext = "Read More";
    var lesstext = "Read Less";
    function getPosition(string, subString, index) {
        return string.split(subString, index).join(subString).length;
    }
    $(".team--content ul li img").css("width", "113px");
    $(".carousel-wrapper .carousel").hide();
    $("#Engagement-carousel").show();
    $("#img-vid").on("change", function () {
        $(".carousel-wrapper .carousel").hide();
        if (this.value == "Engagement-carousel") {
            $("#Engagement-video").hide();
            $("#Engagement-carousel").show();
        } else if (this.value == "Engagement-video") {
            $("#Engagement-carousel").hide();
            $("#Engagement-video").show();
        }
    });
    $("#owlEnergize").owlCarousel({ loop: true, margin: 20, responsiveClass: true, dots: true, nav: false, responsive: { 0: { items: 1, nav: false }, 600: { items: 1 }, 1000: { items: 1, nav: false } } });
    $("#owlculture").owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        dots: false,
        navText: ["<img src='/static/embassy/images/arrow--left.png'>", "<img src='/static/embassy/images/arrow--right.png'>"],
        stagePadding: 60,
        responsive: { 0: { items: 1, nav: false, dots: true }, 600: { items: 2 }, 1000: { items: 2, nav: true } },
    });
    $("#gal").owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        dots: false,
        navText: ["<img src='/static/embassy/images/arrow--left.png'>", "<img src='/static/embassy/images/arrow--right.png'>"],
        responsive: { 0: { items: 1, nav: true }, 600: { items: 1, nav: true }, 1000: { items: 1, nav: true } },
    });
    if ($(".dropdown .dropdown-submenu a").attr("aria-expanded") === "false") {
        $(this).next(".dropdown-menu").hide();
    }
    $("header .dropdown-menu").hover(
        function () {
            $(".dropdown-menu").removeAttr("style");
        },
        function () {
            $(".dropdown-menu").removeAttr("style");
        }
    );
    $("header .dropdown-menu").click(
        function () {
            $(".dropdown-menu").removeAttr("style");
        },
        function () {
            $("header .dropdown-menu").removeAttr("style");
        }
    );
    $("header .dropdown-menu").removeAttr("style");
    $("header .show").removeAttr("style");
    $("#eventCarousel").owlCarousel({ loop: true, margin: 0, responsiveClass: true, dots: true, responsive: { 0: { items: 1, nav: false }, 600: { items: 1, nav: false }, 1000: { items: 1, nav: false, loop: false } } });
    $('.apply-form select option[value=""]').text("Select");
    $("#eventDeaCarousel").owlCarousel({ loop: true, margin: 0, responsiveClass: true, dots: true, responsive: { 0: { items: 1, nav: false }, 600: { items: 1, nav: false }, 1000: { items: 1, nav: false, loop: false } } });
    $("#owl-blogdetail").owlCarousel({ loop: true, margin: 10, responsiveClass: true, dots: true, responsive: { 0: { items: 1, nav: false }, 600: { items: 2, nav: false }, 1000: { items: 3, nav: false, loop: false } } });
    $("#owltestimonial").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        dots: true,
        navText: ["<img src='/static/embassy/images/arrow--left.png'>", "<img src='/static/embassy/images/arrow--right.png'>"],
        stagePadding: 50,
        responsive: { 0: { items: 1, nav: false }, 600: { items: 2, nav: true }, 1000: { items: 2, nav: true, loop: true } },
    });
    $("#newsDetail").owlCarousel({
        loop: true,
        margin: 20,
        navText: ["<img src='/static/embassy/images/arrow--left.png'>", "<img src='/static/embassy/images/arrow--right.png'>"],
        responsive: { 0: { items: 1, nav: false }, 600: { items: 3, nav: true }, 1000: { items: 3, nav: true, loop: true } },
    });
    var nowl = $("#commercialcarousel");
    nowl.owlCarousel({ loop: false, margin: 40, navSpeed: 1500, dots: false, touchDrag: true, mouseDrag: true, responsive: { 0: { items: 1, nav: false }, 600: { items: 1, nav: false }, 1000: { items: 1, nav: false, loop: false } } });
    nowl.on("dragged.owl.carousel", function (event) {
        $("body").css("overflow", "auto");
    });
    nowl.on("drag.owl.carousel", function (event) {
        document.ontouchmove = function (e) {
            e.preventDefault();
        };
    });
    nowl.on("dragged.owl.carousel", function (event) {
        document.ontouchmove = function (e) {
            return true;
        };
    });
    nowl.on("mousewheel", ".owl-stage", function (e) {
        if (e.originalEvent.wheelDelta > 0) {
            nowl.trigger("next.owl");
        } else {
            nowl.trigger("prev.owl");
        }
        e.preventDefault();
    });
    $("#commercialcarousel").on("change.owl.carousel", function (index) {
        checkClasses();
    });
    function checkClasses() {
        var total = $("#commercialcarousel .owl-stage .owl-item").length;
        $("#commercialcarousel .owl-stage .owl-item").each(function (index) {
            if (index === total - 1 && total > 1) {
                $("html, body").animate({ scrollTop: $("#inthenews-homepage").offset().top - 200 }, 1000);
            }
        });
    }
    $("#mtabs li").click(function () {
        $("#mtabs li").removeClass("active");
        $(this).addClass("active");
        $(".mtab_content").hide();
        var selected_tab = $(this).find("a").attr("href");
        $(selected_tab).fadeIn();
        return false;
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
    $('#investor-overview').carousel({
       interval: 6000
    });
    $(".popup-mobile-visiable").on("click", function (e) {
        e.target === this && menuClose();
    });
    function menuClose() {
        $body.removeClass("popup-mobile-menu-wrapper"), $html.css({ overflow: "" });
    }
    $("#email_id").removeAttr("required");
    jQuery.validator.addMethod(
        "onlyCharacters",
        function (value, element) {
            return /^[a-zA-Z][a-zA-Z\s]*$/.test(value);
        },
        "fullname should contain only characters from a-z or A-Z"
    );
    jQuery.validator.addMethod("customemailValidation", function (value, element) {
        return /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.(([0-9]{1,3})|([a-zA-Z]{2,3})|(com|org))$/.test(value);
    });
    jQuery.validator.addMethod(
        "phoneNumberValidation",
        function (value, element) {
            return /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/.test(value);
        },
        "Enter valid phone number."
    );
    jQuery.validator.addMethod(
        "extensionsValidation",
        function (value, element) {
            if (value.length > 0) {
                return /^([a-zA-Z0-9\s_\\.\-\(\):])+(.doc|.docx|.pdf)$/.test(value);
            } else {
                return true;
            }
        },
        "Provide valid File Format."
    );
    jQuery(function () {
        jQuery(".subscribe-form").validate({
            rules: { email_name: { required: true, customemailValidation: true } },
            messages: { email_name: { customemailValidation: "Please enter a valid email address" } },
            submitHandler: function (form) {
                form.submit();
            },
        });
    });
    jQuery(function () {
        jQuery(".address-form").validate({
            rules: {
                first_name: { required: true, onlyCharacters: true },
                last_name: { required: true, onlyCharacters: true },
                email_id: { required: true, email: true },
                assets: { required: true },
                area: { required: true },
                description: { required: true },
            },
            messages: {
                email_id: { email: "Please enter a valid email address" },
                last_name: { onlyCharacters: "Last name should contain only characters from a-z or A-Z" },
                first_name: { onlyCharacters: "First name should contain only characters from a-z or A-Z" },
            },
            submitHandler: function (form) {
                form.submit();
            },
        });
        jQuery(".address-form").on("submit", function (e) {
            if (grecaptcha.getResponse() == "") {
                jQuery(".catcha-error").html("");
                e.preventDefault();
                jQuery(".catcha-error").empty();
                jQuery(".catcha-error").append("<span>Please Select Captcha</span>");
            } else {
                jQuery(".catcha-error").html("");
            }
        });
    });
    jQuery(function () {
        jQuery(".earning-pop").validate({
            rules: { firstname: { required: true, onlyCharacters: true }, company: { required: true, onlyCharacters: true }, email: { required: true, email: true } },
            messages: { email_id: { email: "Please enter a valid email address" } },
            submitHandler: function (form) {
                form.submit();
            },
        });
    });
    $("#firstname, #lastname").bind("keydown", function (e) {
        var keyCode = e.keyCode ? e.keyCode : e.which;
        if (keyCode > 47 && keyCode < 58) {
            e.preventDefault();
        }
    });
    $("#job-mobile").on("keypress keyup blur", function (event) {
        $(this).val(
            $(this)
                .val()
                .replace(/[^0-9\.]/g, "")
        );
        if ((event.which != 46 || $(this).val().indexOf(".") != -1) && (event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    });
    $(".moreless-button").click(function () {
        $(this).parent().parent().find(".moretext").slideToggle();
        if ($(this).text() == "Read more") {
            $(this).text("Read less");
        } else {
            $(this).text("Read more");
        }
    });
    $(function () {
        $("#fixed-download").hover(
            function () {
                $("#fixed-download ").css("right", "0px");
            },
            function () {
                $("#fixed-download ").css("right", "-220px");
            }
        );
    });
    $(function () {
        $(".centered--sec ul li").hover(
            function () {
                $(this).addClass("active--show");
            },
            function () {
                $(".centered--sec ul li  ").removeClass("active--show");
            }
        );
    });
    $("#fixed-download").on("click", function (event) {
        $("#fixed-popup").css("display", "block");
    });
    $(".close-fixed-popup").on("click", function (event) {
        $("#fixed-popup").css("display", "none");
    });

    owl.owlcarousel2_filter(".Bengaluru");
    $(".owl-filter-bar").on("click", ".item", function () {
        var item = $(this);
        var filter = item.data("owl-filter");
        owl.owlcarousel2_filter(filter);
    });
    $(".owl-filter-bar a.item").click(function () {
        $(".owl-filter-bar a.item").removeClass("active");
        $(this).addClass("active");
    });
    $(function () {
        var owlm = $("#metrics"),
            effect = getAnimationName(),
            outIndex,
            isDragged = false;
        owlm.owlCarousel({ margin: 0, navSpeed: 500, nav: false, dots: false, items: 1, autoplay: true, animateIn: "fake", animateOut: "fake" });
        owlm.on("change.owl.carousel", function (event) {
            outIndex = event.item.index;
        });
        owlm.on("changed.owl.carousel", function (event) {
            var inIndex = event.item.index,
                dir = outIndex <= inIndex ? "Next" : "Prev";
            var animation = {
                moveIn: { item: $(".owl-item", owlm).eq(inIndex), effect: effect + "In" + dir },
                moveOut: { item: $(".owl-item", owlm).eq(outIndex), effect: effect + "Out" + dir },
                run: function (type) {
                    var animationEndEvent = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                        animationObj = this[type],
                        inOut = type == "moveIn" ? "in" : "out",
                        animationClass = "animated owl-animated-" + inOut + " " + animationObj.effect,
                        $nav = owlm.find(".owl-prev, .owl-next, .owl-dot, .owl-stage");
                    $nav.css("pointerEvents", "none");
                    animationObj.item
                        .stop()
                        .addClass(animationClass)
                        .one(animationEndEvent, function () {
                            animationObj.item.removeClass(animationClass);
                            $nav.css("pointerEvents", "auto");
                        });
                },
            };
            if (!isDragged) {
                animation.run("moveOut");
                animation.run("moveIn");
            }
        });
        owlm.on("drag.owl.carousel", function (event) {
            isDragged = true;
        });
        owlm.on("dragged.owl.carousel", function (event) {
            isDragged = false;
        });
        function getAnimationName() {
            var re = /fx[a-zA-Z0-9\-_]+/i,
                matches = re.exec(owlm.attr("class"));
            return matches !== null ? matches[0] : matches;
        }
        $("#fxselect").on("change", function (e) {
            var owlmCarousel = $("#metrics"),
                animationName = getAnimationName();
            effect = $(this).find("option:selected").val();
            if (animationName !== null) {
                owlm.removeClass(animationName);
            }
            owlmCarousel.addClass(effect);
        });
    });
});
