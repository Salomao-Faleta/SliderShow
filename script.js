let totalSlide = document.querySelectorAll('.slider--item').length;
document.querySelector('.slider--width').style.width = `calc(100vw * ${totalSlide})`;
document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`;

let currentSlide = 0;

function goPrev(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = totalSlide -1;
    }

    updateMargin();
}

function goNext(){
    currentSlide++;
    if(currentSlide > (totalSlide -1)){
        currentSlide = 0;
    }

    updateMargin();
}

function updateMargin(){
   let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
   let newMargin = (currentSlide * sliderItemWidth);
   document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;
}

// setInterval(goNext, 5000);  - OPCIONAL