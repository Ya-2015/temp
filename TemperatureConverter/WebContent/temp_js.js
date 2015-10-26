var $ = function (id) {
    return document.getElementById(id); 
}

window.onload = function () {
	 $("fahrenheit").onkeydown = fahrenheit_onenter;
	 $("celsius").onkeydown = celsius_onenter;
}

function fahrenheit_onenter(e){
	var code = (e.keyCode ? e.keyCode : e.which);
	if(code == 13) { //Enter keycode
		var fah = $("fahrenheit").value;
		if (isNaN(fah)) {
	        alert("Input Invalid");
	        return false;
	    }
		
		var cel = (+fah - 32) * 5 / 9;
		$("celsius").value = cel.toFixed(2);
		
		var tem = parseFloat(fah);
		//var tem = fah;
		if(tem >= 90){
			document.getElementById("img1").src = "90.jpg";
		}else if(tem >= 80){
			document.getElementById("img1").src = "80-90.jpg";
		}else if(tem >= 70){
			document.getElementById("img1").src = "70-80.jpg";
		}else if (tem >= 60){
			document.getElementById("img1").src = "60-70.jpg";
		}else if(tem >= 50){
			document.getElementById("img1").src = "50-60.jpg";
		}else{
			document.getElementById("img1").src = "less50.jpg";
		}
		
		//document.getElementById("img1").src = "less50.jpg";
	}
	
}

function celsius_onenter(e){
	
	var code = (e.keyCode ? e.keyCode : e.which);
	if(code == 13) {
		
		var cel = $("celsius").value;
		if (isNaN(cel)) {
	        alert("Input Invalid");
	        return false;
	    }
		
		var fah = +cel * 9 / 5 + 32;
		$("fahrenheit").value = fah.toFixed(2);
		
		var tem = parseFloat(fah);
		//var tem = fah;
		if(tem >= 90){
			document.getElementById("img1").src = "90.jpg";
		}else if(tem >= 80){
			document.getElementById("img1").src = "80-90.jpg";
		}else if(tem >= 70){
			document.getElementById("img1").src = "70-80.jpg";
		}else if (tem >= 60){
			document.getElementById("img1").src = "60-70.jpg";
		}else if(tem >= 50){
			document.getElementById("img1").src = "50-60.jpg";
		}else{
			document.getElementById("img1").src = "less50.jpg";
		}
	}
}