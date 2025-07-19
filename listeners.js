document.addEventListener('keydown', event => {
    if (event.key === 'w' || event.key === 'ArrowUp') {
        keys.up = true;
        player.state = 'two';
    } else if (event.key === 's' || event.key === 'ArrowDown') {
        keys.down = true;
        player.state = 'three'
    } else if (event.key === 'a' || event.key === 'ArrowLeft') {
        keys.left = true;
        player.state = 'four';
    } else if (event.key === 'd' || event.key === 'ArrowRight') {
        keys.right = true;
        player.state = 'five';
    }
});

document.addEventListener('keyup', event => {
    if (event.key === 'w' || event.key === 'ArrowUp') {
        keys.up = false;
    } else if (event.key === 's' || event.key === 'ArrowDown') {
        keys.down = false;
    } else if (event.key === 'a' || event.key === 'ArrowLeft') {
        keys.left = false;
    } else if (event.key === 'd' || event.key === 'ArrowRight') {
        keys.right = false;
    }
    player.state = 'one';
});

document.addEventListener('mouseup', event => {
    const buttonX = (canvas.offsetLeft - (canvas.width/2)) + button.x;
    const buttonY = (canvas.offsetTop - (canvas.height/2)) + button.y;
    if (!play && event.pageX >= buttonX && event.pageX <= buttonX + button.width && event.pageY >= buttonY && event.pageY <= buttonY + button.height) {
     set();
    }
});