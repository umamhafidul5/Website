const price = document.querySelector('.price');

const priceList = ['IDR 5000K', 'IDR 5500K', 'IDR 8000K', 'IDR 6500K'];
const color = [
    'linear-gradient(to left, rgb(24, 64, 64),rgb(40, 104, 106))',
    'linear-gradient(to left, rgb(181, 114, 1),rgb(232, 160, 0))',
    'linear-gradient(to left, rgb(27, 100, 133),rgb(57, 152, 196))',
    'linear-gradient(to left, rgb(16, 50, 85),rgb(55, 155, 193))',
]

const displayPrice = () => {
    priceList.forEach((el, i) => {
        setTimeout(() => {
            price.innerHTML = el;  
            price.style.backgroundImage = color[i];  
        }, 8000*i);
    });
};

displayPrice();
setInterval(displayPrice, 32000);
MediaKeyMessageEvent
