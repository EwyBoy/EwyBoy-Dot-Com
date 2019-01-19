$(function () {
    $.get("elements/meta.html", function (data) {
        $("head").append(data);
    });
});