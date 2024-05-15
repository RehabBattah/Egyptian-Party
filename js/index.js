let open =$(".open-menu").width();

$(".open-menu").css("left", -open);

$(".open-menu .close-btn").click(() => {
    $(".open-menu ").animate({"left": -open} ,500);
});

$(".open-menu .open").click(() => {

    if( $(".open-menu").css("left")== "0px" ){
        $(".open-menu ").animate({"left": -open} ,500);
    }else{
        $(".open-menu ").animate({"left": 0} ,500);
    }

});

// =====================================

$("#singer").ready(() =>{
    $("#singer p:first").css("display", "block");
    $("#singer h4").click( function () {
        $(this).next().slideToggle(500);
        $("#singer p").not($(this).next()).slideUp(500);
    });

});

// ========================================


function countdown() {
    var moment = new Date();
    var date = new Date(2022, 12, 28);

    var currentTime = moment.getTime();
    var eventTime = date.getTime();

    var remTime = eventTime - currentTime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24) - 30;

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.querySelector("#Day").innerHTML ="<h3>" + d + " D" + "</h3>";
    document.querySelector("#hour").innerHTML = "<h3>" + h + " h" + "</h3>";
    document.querySelector("#minute").innerHTML = "<h3>" + m + " m" + "</h3>";
    document.querySelector("#second").innerHTML =  "<h3>" + s + " s" + "</h3>";

    setTimeout(countdown, 1000);
}
countdown();


// ======================================

$(function () {
    var max = 100;
    $("textarea").keyup(function () {
        var length = $(this).val().length;
        var character = max - length;
        console.log(character)
        if (character <= 0) {
            $("#stop").text("your available character finished");
        } else {
            $("#stop").text(character);
        }
    });
});



