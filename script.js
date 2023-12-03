var prevBtn = document.querySelector('.prev-btn ');
var nextBtn = document.querySelector('.next-btn ');
var sliderr = document.querySelector('.slider');
var cards = document.querySelector('.card');

prevBtn.addEventListener('click', function () {
	

    
	var cardkiWidth = cards.clientWidth;

	
	console.log(cardkiWidth);
	
	sliderr.scrollBy({
		left: -cardkiWidth,
		behavior: 'smooth',
	});
});

nextBtn.addEventListener('click', function () {
	
	var cardkiWidth = cards.clientWidth;

	
	console.log(cardkiWidth);
	
	sliderr.scrollBy({
		left: +cardkiWidth,
		behavior: 'smooth',
	});
});

var tl= gsap.timeline()
tl.to("header",{
   y:20,
   stagger:0.3,
   duration:0.3,
  delay:0.3,
   opacity:1
})

      