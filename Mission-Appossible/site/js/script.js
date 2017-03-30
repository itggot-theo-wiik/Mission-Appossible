// function menu_toggler() {
//     element = document.querySelector("nav_main")
//     element.classList.toggle("nav_is_visible")
//
// }

// Hamburgar meny v2
function burger() {
    element = document.querySelector("nav_main")
    element.classList.add("burger")

}

// För introt
function hider_js() {
    // element.classList.toggle("hider")
    element = document.querySelector("intro")
    element.classList.toggle("hider")
}

// Nedan = Inte så bra
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
