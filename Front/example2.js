// JavaScript to toggle the dropdown menu
const hamburgerMenu = document.querySelector('.hamburger-menu');
const dropdownMenu = document.querySelector('.dropdown-menu');

// JavaScript to toggle the sign up form
const signUpButton = document.querySelector('.nav-button:nth-child(2)'); // Assuming it's the second button
const modal = document.getElementById('sign-up-modal');
const closeButton = document.querySelector('.close-button');
const signUpForm = document.getElementById('sign-up-form');


//DRPDWN MENU
// Toggle dropdown menu on click
hamburgerMenu.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
    e.stopPropagation();
});

// Add smooth scroll functionality with offset handling
document.querySelectorAll('.dropdown-menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior

        const targetSection = document.querySelector(this.getAttribute('href'));
        const offset = 0; // Adjust this value if needed based on your nav height
        const sectionPosition = targetSection.offsetTop - offset;

        // Scroll to the section
        window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth'
        });

        // Close the dropdown after clicking
        dropdownMenu.classList.add('hidden');
    });
});


//SIGN UP FORM
// Open modal when sign-up button is clicked
signUpButton.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

// Close modal when the close button is clicked
closeButton.addEventListener('click', () => {
    modal.classList.add('hidden');
});

// Close modal when clicking outside the modal content
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.add('hidden');
    }
});

// Submit sign-up form
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/SingUp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const result = await response.json();

        if (response.ok) {
            alert('Sign up successful!');
            modal.classList.add('hidden'); // Close modal after success
            signUpForm.reset(); // Reset form fields
        } else {
            alert(`Error: ${result.message}`);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

