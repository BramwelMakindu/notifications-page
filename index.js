const notification = document.querySelector('.js-div');
const message = document.querySelector('.message')
const countEl = document.querySelector('.count');
const newMsgs = document.querySelectorAll('.new');
const allRead = document.querySelector('.read');

let count = 3;

notification.addEventListener('click', () => {
    message.classList.toggle('active');
});

newMsgs.forEach(newMsg => {
    newMsg.addEventListener('click', ()=>{
        count--;
        showmsgs()
        newMsg.classList.add('active');
    });
})

function showmsgs(){
    countEl.innerHTML = `${count}`;
    if (count < 0) {
        countEl.innerHTML = '0'
    }
}

allRead.addEventListener('click', () => {
    newMsgs.forEach(newMsg => {
        newMsg.classList.add('active');
        countEl.innerHTML = '0';
        count = 0;
    });
});
