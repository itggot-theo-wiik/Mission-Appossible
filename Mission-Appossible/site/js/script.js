// function menu_toggler() {
//     element = document.querySelector("nav")
//     element.classList.toggle("nav_is_visible")
//
// }

// function menu_toggler() {
//     document.querySelector("nav").style.width = "250px";
//
// }

// $('#delete').click(function (e) {
//     $("nav").addClass('animate');
// });
//
// $('#add').click(function (e) {
//     $("add").append("<div class='notification'></div>");
// });
//
// $('add').on('transitionend', function(e){
// $(e.target).remove()
// });

$(document).ready(function() {
    $("button").click(function() {
        $("nav").animate({
            left: '250px'
        });
    });
});
