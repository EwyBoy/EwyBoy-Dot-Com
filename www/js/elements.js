$(function(){
    $("#header").load("elements/header.html");
    $("#footer").load("elements/footer.html");
});

$(function () {
    $.get("elements/meta.html", function (data) {
        $("head").append(data);
    });
});