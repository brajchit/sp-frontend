$(document).ready(function() {
    $.getJSON("usuarios.json", function (jsonResp) {
        $.each(jsonResp, function(index, item) {
            //tb puede ser asi
            //var $li = $("<li/>").addClass("list-group-item");
            var $li = $('<li class="list-group-item">')
            $li.text(item.usuario);
            $("#guayaquil").append($li)
        });
    })
});
