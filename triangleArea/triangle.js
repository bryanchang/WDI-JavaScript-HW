var InvalidTriangleError = "Not a valid error"

function Triangle(sideA, side B, sideC){
	this.sideA = sideA;
	this.sideB = sideB;
	this.sideC = sideC;
	this.validator = function(){
		if (this.sideA <= 0 || this.sideB <= 0 || this.sideC <=0){
		throw new InvalidTriangleError;
		};
	}
	this.validator();
}


triangle.area = function(){
	if (this.sideA <= 0 || this.sideB <= 0 || this.sideC <=0){
		throw new Error
	}

}

//initial m

var side1 = parseInt(prompt("Input the positive number"),10);
var side2 = parseInt(prompt("Input the second number"),10);
var side3 = parseInt(prompt("Input the third number"),10);


function HeronsFormula(side1, side2, side3){
	var parameter = side1 + side2 + side3;
	function half(number) = number / 2;
	var s = half(paramter);
	var area = Math.sqrt(s * (s-side1) * (s-side2) * (s-side3));
	return parseFloat(area);
}

// var triangle{
// 	sideA:
// }

// console.log(triangle(side1,side2, side3));
alert(area(side1,side2, side3));