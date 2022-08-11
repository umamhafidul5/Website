// number of bubbles
const numBub = 5;

// create the bubbles
for(let i=0; i<numBub; i++) {
    const bubbles = document.createElement('div');
    document.body.appendChild(bubbles);

    bubbles.setAttribute('class', 'bubbles');
    bubbles.innerHTML = i+1;
    const getHeightBubble = window.getComputedStyle(bubbles).getPropertyValue('height');
    bubbles.style.lineHeight = `${getHeightBubble}`;
    const r = Math.round(Math.random()*255);
    const g = Math.round(Math.random()*255);
    const b = Math.round(Math.random()*255);
    bubbles.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.85)`;
    bubbles.style.top = `${Math.round(Math.random()*window.innerHeight*.8)}px`;
    bubbles.style.left = `${Math.round(Math.random()*window.innerWidth*.8)}px`;
};

// animate the bubbles
const bubbles = document.querySelectorAll('.bubbles');
bubbles.forEach(bubble => {
    const initialArrowY = (Math.random() > 0.5) ? 1 : -1;
    const initialArrowX = (Math.random() > 0.5) ? -1 : 1;
    let speedY = Math.round(initialArrowY*Math.random()*window.innerHeight/50);
    let speedX = Math.round(initialArrowX*Math.random()*window.innerWidth/50);

    let positionY = bubble.offsetTop+(bubble.offsetHeight*.5);
    let positionX = bubble.offsetLeft+(bubble.offsetWidth*.5);

    setInterval(() => {
        if(positionY > window.innerHeight-(bubble.offsetHeight*.5) || positionY < (bubble.offsetHeight*.5)) {
            speedY = -speedY;
        };
        
        if(positionX > window.innerWidth-(bubble.offsetWidth*.5) || positionX < (bubble.offsetWidth*.5)) {
            speedX = -speedX;
        };
    
        bubble.style.top = `${positionY-(bubble.offsetHeight*.5)}px`;
        bubble.style.left = `${positionX-(bubble.offsetWidth*.5)}px`;
        positionY += speedY;
        positionX += speedX;
    }, 100);
});