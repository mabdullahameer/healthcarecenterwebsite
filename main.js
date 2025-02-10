// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle navigation links when hamburger is clicked
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
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
