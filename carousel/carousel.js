var carousel = document.getElementById('carousel');
var images = document.getElementsByTagName('img');
var next = document.getElementById('next');
var previous = document.getElementById('previous');
var timer;

carousel.style.marginLeft = 0;
var x = carousel.style.marginLeft;
x = 0;
// images[0]

function slideCarousel() {
	var startx  = parseInt(carousel.style.marginLeft, 10);
	var endx = startx - 1836;
}

function toLeft(){
	if(parseInt(carousel.style.marginLeft, 10) >= -1200){
		carousel.style.marginLeft = (parseInt(carousel.style.marginLeft, 10) - 612) + 'px';
	}
	else{
		carousel.style.marginLeft = 0;
	}
}

function toRight(){
	if(parseInt(carousel.style.marginLeft, 10) <= -1){
		carousel.style.marginLeft = (parseInt(carousel.style.marginLeft, 10) + 612) + 'px';
	}
	else{
		carousel.style.marginLeft = "-1224px";
	}
}

next.onclick = function() {toLeft();};
previous.onclick = function() {toRight();};
// 	timer = setInterval(toRight, 2);
// };