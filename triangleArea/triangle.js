var side1 = parseInt(prompt("Input the positive number"));
var side2 = parseInt(prompt("Input the second number"));
var side3 = parseInt(prompt("Input the third number"));

function area(side1,side2, side3){
	var p = (side1+side2+side3)/2;
	return area = Math.sqrt(p*(p-side1)*(p-side2)*(p-side3));
}

// console.log(triangle(side1,side2, side3));
alert(area(side1,side2, side3));