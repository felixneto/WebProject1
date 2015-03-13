var main = function () {
    "use strict";
     
    $(".item").on("mouseenter", mouseOverItem);
    $(".item").on("mouseleave", mouseOutItem);
    $(".item").on("click", mouseClickItem);
    $("#itemPageBackButton").on("click", itemPageBackButton);
     
     
};
 
$(document).ready(main);
 
function mouseOverItem () {
    $(this).css("border", "1px solid black");
}
 
function mouseOutItem () {
    $(this).css("border", "0px");
}
 
function mouseClickItem () {
    $(".contentPane").fadeOut("fast", "linear", function() {
                              $("#frontPage").css("display", "none");
                              $("#itemPage").fadeIn("slow"); });
}
 
function itemPageBackButton () {
    $(".contentPane").fadeOut("fast", "linear", function() {
                              $("#itemPage").css("display", "none");
                              $("#frontPage").fadeIn("slow"); });
} 
