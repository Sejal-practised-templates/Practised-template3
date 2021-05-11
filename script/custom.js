
$(document).ready(function () {


    $('[data-toggle="tooltip"]').tooltip();

    var lastScrollTop = 0;
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop && st > 0) {
            $(".header-section").addClass("nav-down");
        }
        else {
            $(".header-section").removeClass("nav-down");
            if (st <= 0) {
                $(".header-section").removeClass("nav-down");
            }
            else {
                $(".header-section").addClass("nav-down");
            }
        }
        lastScrollTop = st;
    });

  
});

