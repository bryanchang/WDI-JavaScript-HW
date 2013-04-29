// initial answer without the ordinal 

var faveStartups = ["Quora", "Prismatic", "IFTTT", "Angelist", "Wanelo", "Stripe"];

function listArray(array) {
    for (var i = 0; i < array.length; i += 1) {
        console.log("My # " + (i + 1) + " favorite startup is " + array[i]);
    }
}

// @sferik's example
// ordinalized 

function ordinalize(number){
	// var absoluteValue = Math.abs(number); // Rubyist style
	var hundredMod = number % 100;
	var tenMod = number % 10;
	var ordinal;

	switch(hundredMod){
		case 11:
		case 12:
		case 13:
			ordinal = number.toString() +"th";
			break;
		default: 
			switch(tenMod){
				case 1:
					ordinal = number.toString() + "st";
					break;
				case 2:
					ordinal = number.toString() + "nd";
					break;
				case 3:
					ordinal = number.toString() + "rd";
					break;
				default:
					ordinal = number.toString() + "th";
			}
	}
	return ordinal;

}