import './template.html';
import './assets/styles/index.scss';

const nextBtn = document.querySelector('.btn-next');
const prevBtn = document.querySelector('.btn-prev');
const sliderImages = document.querySelectorAll('.slider__image-wrapper');
let counter = 0;

const nextImage = () => {
  counter++;

  if (counter > sliderImages.length - 1) {
    counter = 0;
  }

  sliderImages.forEach((img, idx) => {
    if (idx === counter) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
  });
};

const prevImage = () => {
  counter--;

  if (counter < 0) {
    counter = sliderImages.length - 1;
  }

  sliderImages.forEach((img, idx) => {
    if (idx === counter) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
  });
};

nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);
