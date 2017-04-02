// Toggla skuggan
function toggle_shadow() {
    element = document.querySelector(".nav_main")
    element.classList.toggle("nav_shadow_is_visible")
}

// Toggla osynliga leave
function toggle_leave() {
    element = document.querySelector(".nav_leave")
    element.classList.toggle("nav_is_visible")
}

// För introt
function hider_js(element) {
    // element.classList.toggle("hider")
    // element = document.querySelector(".intro")
    element.classList.add("hider")
}

// Animera Hamburgar menyn
$(document).ready(function() {
    $("#burger").click(function() {
        $("nav").animate({
            left: '0px'
        });
    });
});

$(document).ready(function() {
    $(".nav_leave").click(function() {
        $("nav").animate({
            left: '-304px'
        });
    });
});

function daty() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toDateString();
}
