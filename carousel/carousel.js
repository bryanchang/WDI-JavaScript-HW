var timer;
var carousel = document.getElementById('carousel');
var next = document.getElementById('next');
var previous = document.getElementById('previous');

var x = carousel.style.marginLeft;
x = 0;

function slideCarousel() {
	var startx  = parseInt(carousel.style.marginLeft, 10);
	var endx = startx - 1836;
}

function toLeft(){
	carousel.style.marginLeft = (parseInt(carousel.style.marginLeft, 10) - 5) + 'px';
}

function toRight(){
	carousel.style.marginLeft = (parseInt(carousel.style.marginLeft, 10) + 5) + 'px';
}

next.onclick = function() {timer = setInterval(toLeft, 2);};

previous.onclick = function() {
	timer = setInterval(toRight, 2);
};