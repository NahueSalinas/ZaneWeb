// JavaScript to toggle the dropdown menu
const hamburgerMenu = document.querySelector('.hamburger-menu');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Toggle dropdown menu on click
hamburgerMenu.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
});

// Add smooth scroll functionality with offset handling
document.querySelectorAll('.dropdown-menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior

        const targetSection = document.querySelector(this.getAttribute('href'));
        const offset = 100; // Height of the fixed navigation bar
        const sectionPosition = targetSection.offsetTop - offset;

        window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth'
        });

        // Close the dropdown after clicking
        dropdownMenu.classList.add('hidden');
    });
});