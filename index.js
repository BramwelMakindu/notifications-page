const notification = document.querySelector('.js-div');
const message = document.querySelector('.message')

notification.addEventListener('click', () => {
    message.classList.toggle('active');
});