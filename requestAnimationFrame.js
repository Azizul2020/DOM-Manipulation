function fast() {
    console.log(`This is created by using requestAnimationFrame. For stop or start this, click 'ENTER' button`);
    start = requestAnimationFrame(fast);
}
fast();
let shown = true;


function image() {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const img = document.createElement('img');
    img.src = 'bg.jpg';
    img.width = 200;
    img.id = 'img';
    div.appendChild(img);
};
image();

const imgStyle = {
    position: 'absolute',
    left: 0
}
let i = 1;

let mover = true;
let imgWidth = (innerWidth - img.offsetWidth);

function animate() {
    const img = document.querySelector('#img');
    Object.assign(img.style, imgStyle);
    //img.style.transform = `rotate(${i}deg)`;
    if (i >= imgWidth) {
        mover = false;
    };
    if (i <= 0) {
        mover = true;
    }
    if (mover == false) {
        i -= 100;
    } else {
        i += 100;
    }
    img.style.left = i + 'px';
    any = requestAnimationFrame(animate);
}
animate();
window.addEventListener('keyup', function(e) {
    if (e.keyCode == 13) {
        if (shown == true) {
            cancelAnimationFrame(start);
            cancelAnimationFrame(any);
            shown = false;
        } else {
            requestAnimationFrame(fast);
            requestAnimationFrame(animate);
            shown = true;
        }
    } else {
        alert(`Please press the 'ENTER' key for stop and start`);
    }
})