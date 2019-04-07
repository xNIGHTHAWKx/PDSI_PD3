$(window).on("load", function () {
    $("#win-title").hide();
    $("#level-one").hide();
    $("#level-two").hide();
    $("#level-three").hide();
    $("#level-four").hide();
    $("#number-of-clicks").hide();
});

$(document).ready(function () {
    let clicks = 0;
    let level;

    $("#start-button").click(function () {
        $("#start-page").hide();
        $("#number-of-clicks").show();

        let x = Math.floor((Math.random() * 4) + 1);
        switch(x) {
            case 1: {
                level = $("#level-one");
                level.name = "#level-one";
            } break;
            case 2: {
                level = $("#level-two");
                level.name = "#level-two";
            } break;
            case 3: {
                level = $("#level-three");
                level.name = "#level-three";
            } break;
            case 4: {
                level = $("#level-four");
                level.name = "#level-four";
            } break;
        }

        level.show();
    });

    $("td").click(function (e) {
        if (!$(this).hasClass("empty")) {
            $(this).toggleClass("marked");
            if (!$(this).next().hasClass("empty")) $(this).next().toggleClass("marked");
            if (!$(this).prev().hasClass("empty")) $(this).prev().toggleClass("marked");

            let fieldAbove = $(this).parent().prev().children().eq($(this).index());
            if (!fieldAbove.hasClass("empty")) fieldAbove.toggleClass("marked");

            let fieldBelow = $(this).parent().next().children().eq($(this).index());
            if (!fieldBelow.hasClass("empty")) fieldBelow.toggleClass("marked");

            clicks++;
            $("#clicks").text(clicks);

            let allMarked = true;
            $(level.name + " td").each(function() {
               if ($(this).hasClass("marked") || $(this).hasClass("empty")) {}
               else allMarked = false;
            });

            if (allMarked) {
                $("#default-title").hide();
                $("#win-title").show();
                $("td").each(function() {
                    $(this).off("click");
                });
            }
        }
    });
});