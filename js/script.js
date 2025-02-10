// Ensure the DOM is fully loaded before running this script
document.addEventListener('DOMContentLoaded', function() {
    // Ensure the elements exist before trying to add event listeners
    const hamburgerButton = document.getElementById('hamburger-button');
    const navMenu = document.getElementById('nav-menu');
    
    // Check if the elements are found
    if (!hamburgerButton || !navMenu) {
        console.error('Hamburger or navLinks element not found!');
        return;  // Exit the function early if elements are not found
    }

    // Add the click event listener to toggle the menu visibility
    hamburgerButton.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});


// Live Chat Toggle
const chatBtn = document.querySelector('.live-chat-btn');
const chatBox = document.getElementById('chat-box');
const closeChat = document.getElementById('close-chat');

chatBtn.addEventListener('click', () => {
    chatBox.style.display = 'block';
});

closeChat.addEventListener('click', () => {
    chatBox.style.display = 'none';
});
