function light(sw){
		var pic;
		if(sw == 0){
			pic = "images/dan.png"
		}
		else{
			pic = "images/hacker.jpg"
		}
		document.getElementById('myImage').src = pic;
	}

function insertimage(sw){
	var pic;
	if(sw == 0){
		pic = "images/duhoc.jpg";
	}
	else{
		pic = "images/namanhem.jpg";
	}
	document.getElementById('c95').src = pic;
}