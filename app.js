const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const galleryImage = document.querySelectorAll('.gallery-img');
let currentlySelected = 0;
prevButton.addEventListener('click', function () {
  galleryImage[currentlySelected].classList.remove('active');
  currentlySelected--;
  galleryImage[currentlySelected].classList.add('active');
  nextButton.disabled = false;
  if (currentlySelected === 0) {
    prevButton.disabled = true;
  }
});

nextButton.addEventListener('click', function () {
  galleryImage[currentlySelected].classList.remove('active');

  currentlySelected++;

  galleryImage[currentlySelected].classList.add('active');

  prevButton.disabled = false;

  if (galleryImage.length === currentlySelected + 1) {
    nextButton.disabled = true;
  }
});
