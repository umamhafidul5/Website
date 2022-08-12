const draggable = document.querySelector('.draggable');

draggable.addEventListener('mousedown', (event) => {
    const yPosClick = event.y-draggable.offsetTop;
    const xPosClick =  event.x-draggable.offsetLeft;

    draggable.style.position = 'absolute';

    function move(event) {
        draggable.style.top = `${event.y-yPosClick}px`;
        draggable.style.left = `${event.x-xPosClick}px`;
    };

    document.body.addEventListener('mousemove', move);
    
    draggable.addEventListener('mouseup', () => {
        document.body.removeEventListener('mousemove', move);
    });
});
