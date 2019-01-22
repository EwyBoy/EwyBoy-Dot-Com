const url = 'http://staging_cursemeta.dries007.net/api/v3/direct/addon/268210';

function run() {
    $.getJSON(url, function (result) {
        console.log(result);
    });
}