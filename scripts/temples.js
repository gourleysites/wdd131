const currentYear = new Date().getFullYear();
document.querySelector("#currentyear").textContent = currentYear;

const lastModified = new Date();
document.getElementById("lastmodified").textContent = document.lastModified;

const navElement = document.querySelector('nav');
const menuButton = document.querySelector('#menu');

menuButton.addEventListener('click', () => {
    navElement.classList.toggle('open');
    menuButton.classList.toggle('open');

    if (menuButton.classList.contains('open')) {
        menuButton.textContent = '✕';
    } else {
        menuButton.textContent = '☰';
    }
});