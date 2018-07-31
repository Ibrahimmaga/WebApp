$(document).ready(function () {
    $("img").hide();
});

$("button").on("click", function () {
    $("#img1").fadeToggle();
    $("#img2").fadeToggle(1000);
    $("#img3").fadeToggle(3000);

})