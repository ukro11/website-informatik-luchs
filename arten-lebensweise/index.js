const navigationButton = document.querySelector('.navigation-btn');
const lebensweiseContainer = document.querySelector('.main-section-1-blog-container-2');

navigationButton.addEventListener('click', () => {
    lebensweiseContainer.scrollIntoView({ behavior: 'smooth' });
});