
$('input[type="submit"]').click(function() {
    alert("submit button has been pressed");
    var name = $("#nameId").val();
    if (name) {
        var api = "http://swapi.co/api/" + name;
      $.getJSON(api)
        .done(function( data ) {
            $("#divId").html("")
            for (var property in data) {
                $("#divId").append(property + ": " + data[property] + "<br>");
            }
        });
    }
});
