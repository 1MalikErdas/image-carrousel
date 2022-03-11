const allImage = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg"];
let aImage = 0;
const nextButton = document.querySelector('.nButton');
const prevButton = document.querySelector('.pButton');

let image = document.querySelector('.image');

nextButton.addEventListener("click", nextImage);
prevButton.addEventListener("click", previousImage);

function nextImage(){
    aImage++;
    if(aImage > 2){
        aImage = 0;
    }
    console.log(aImage);
    image.src = allImage[aImage];
}

function previousImage(){
    aImage--;
    if( aImage < 0){
        aImage = 2;
    }
    console.log(aImage);
    image.src = allImage[aImage];
} 
