// function menu_toggler() {
//     element = document.querySelector("nav_main")
//     element.classList.toggle("nav_is_visible")
//
// }

function hider_js() {
    // element.classList.toggle("hider")
    element = document.querySelector("intro")
    element.classList.toggle("hider")
}

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
