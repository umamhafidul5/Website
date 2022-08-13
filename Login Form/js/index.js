const btnLogin = document.querySelector('.btnLogin');
const sbmLogin = document.querySelector('#login');
const btnCancel = document.querySelector('#cncl');
const container = document.querySelector('.container');
const xPosTrans = window.innerWidth;
container.style.setProperty('--xPosTrans', `${-xPosTrans}px`);

btnLogin.addEventListener('click', () => {
    container.style.transform = 'translateX(0)';
    container.style.opacity = '1';
});

btnCancel.addEventListener('click', () => {
    container.style.transform = `translateX(${-xPosTrans}px)`;
});

sbmLogin.addEventListener('click', () => {
    container.style.transform = `translateX(${+xPosTrans}px)`;
});