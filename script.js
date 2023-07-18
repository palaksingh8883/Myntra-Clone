// Get necessary elements
const sliderImages = document.querySelector('.slider');
const sliderDots = document.querySelector('.slider-dots');

// Create dots dynamically based on the number of images
const images = sliderImages.querySelectorAll('img');
for (let i = 0; i < images.length; i++) {
  const dot = document.createElement('span');
  dot.addEventListener('click', () => {
    goToSlide(i);
    resetTimer();
  });
  sliderDots.appendChild(dot);
}

// Set the initial active dot
sliderDots.firstElementChild.classList.add('active');

let currentIndex = 0;
let timer;

// Function to control slider movement
function goToSlide(index) {
  sliderImages.style.transform = `translateX(-${index * 100}%)`;

  // Update active dot
  const dots = sliderDots.querySelectorAll('span');
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');

  currentIndex = index;
}

// Function to automatically slide the images
function slideImages() {
  const nextIndex = (currentIndex + 1) % images.length;
  goToSlide(nextIndex);
}

// Function to reset the timer
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(slideImages, 5000); // Adjust the interval as needed (5 seconds = 5000 milliseconds)
}

// Start the initial timer
resetTimer();
