// slider javascript//

//variables


const track = document.querySelector('.slider_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.arrow_right');
const prevButton = document.querySelector('.arrow_left');
const slideWidth = slides[0].getBoundingClientRect().width;

console.log(slideWidth);

//arrange slides next to each other

slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
})



//when I click left, move left
//when I click right, move right



//////////////////////////////////////////////////////////////////////////////////////////