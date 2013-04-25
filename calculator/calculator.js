var num1 = prompt("Input the first number");
var operator = prompt("Input the operation you want to perform: \n+, -, *, /");
var num2 = prompt("Input the second number");

var operand1 = parseFloat(num1);
var operand2 = parseFloat(num2);


function calc(operand1, operand2, operator){
	switch(operator){		
		case "+":
		  alert(operand1 + operand2);
		  break;
		case "-":
		  alert(operand1 - operand2);
			break;
		case "*":
		  alert(operand1 * operand2);
			break;
		case "/":
		  alert(operand1 / operand2);
			break;
	}
}