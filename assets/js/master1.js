$(document).ready(function() {
	
	$.getJSON("centro.json", function (jsonResp) {
		
        jsonResp.centros.centromedico1.forEach(function(item) {
            
           
            $("#nombreTxt").text(item.nombre);
            $("#direccionTxt").text(item.direccion);
			item.tiposDeExamenes.forEach(function(item){
				var $li = $('<li class="list-group-item"></li>');
				$li.text(item);
            $(".list-group").append($li)
			})
        });
		
    })
	})