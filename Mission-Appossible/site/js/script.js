// function menu_toggler() {
//     element = document.querySelector("nav_main")
//     element.classList.toggle("nav_is_visible")
//
// }

$(document).ready(function() {
    $("button").click(function() {
        $("nav").animate({
            left: '0px'
        });
    });
});

$(document).ready(function() {
    $(".exit_button").click(function() {
        $("nav").animate({
            left: '-304px'
        });
    });
});
