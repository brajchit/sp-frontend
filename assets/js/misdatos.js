function fileSelected() {

   
    var oFile = document.getElementById('image_file').files[0];
	var oImage = document.getElementById('preview');
	// prepare HTML5 FileReader
    var oReader = new FileReader();
        oReader.onload = function(e){
		// e.target.result contains the DataURL which we will use as a source of the image
        oImage.src = e.target.result;
		oImage.onload = function () { // binding onload event
			// we are going to display some custom image information here
            sResultFileSize = bytesToSize(oFile.size);
		};
    };
	// read selected file as DataURL
    oReader.readAsDataURL(oFile);
	var vFD = new FormData(document.getElementById('upload_form')); 


}
