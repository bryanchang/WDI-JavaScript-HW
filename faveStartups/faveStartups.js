var output = listArray(faveStartups);
console.log(output);var faveStartups = ["Quora", "Prismatic", "IFTTT", "Angelist", "Wanelo", "Stripe"];

function listArray(array) {
    for (var i = 0; i < array.length; i += 1) {
        console.log("My # " + (i + 1) + " favorite startup is " + array[i]);
    }
}