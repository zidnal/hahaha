const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const home = document.querySelector('.home');
const dateSchedule = document.querySelector('.date-schedule');
const confirmation = document.querySelector('.confirmation');
const continueButton = document.getElementById('continueButton');

yesButton.addEventListener('click', function() {
    home.style.display = 'none';
    dateSchedule.style.display = 'block';
});

noButton.addEventListener('mouseover', function() {
    const randomX = Math.random() * (window.innerWidth - 200);
    const randomY = Math.random() * (window.innerHeight - 100);
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

continueButton.addEventListener('click', function() {
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const location = document.getElementById('location').value;

    home.style.display = 'none';
    dateSchedule.style.display = 'none';
    confirmation.style.display = 'block';

    const scheduleCards = document.getElementById('scheduleCards');
    scheduleCards.innerHTML = `<div>Date: ${date}, Time: ${time}, Location: ${location}</div>`;
});

// Heart Trail Animation
document.addEventListener('mousemove', (e) => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = `${e.pageX}px`;
    heart.style.top = `${e.pageY}px`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
});