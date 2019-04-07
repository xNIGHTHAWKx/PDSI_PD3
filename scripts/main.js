$(window).on("load", function () {
    $("#win-title").hide();
    $("#level-one").hide();
    $("#number-of-clicks").hide();
});

$(document).ready(function () {
    let clicks = 0;

    $("#start-button").click(function () {
        $("#start-page").hide();
        $("#level-one").show();
        $("#number-of-clicks").show();
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
            $("td").each(function() {
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