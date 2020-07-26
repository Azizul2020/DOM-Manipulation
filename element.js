let input = document.querySelector('.input');
let container = document.querySelector('.container');
let list = document.querySelector('.list');
// // input[0].addEventListener('keyup', function(e) {
// //     if (e.keyCode === 13) {
// //         console.log(e);
// //         console.log(this.value);
// //     }
// // })
// // input[0].addEventListener('click', (e) => {
// //     // console.log(e.clientX);
// //     // console.log(e.offsetX);
// //     console.log(e.clientY);
// //     console.log(e.offsetY);
// // })
input.addEventListener('keypress', function(e) {
    if (e.keyCode == 13 && this.value != 0) {
        let ul = document.createElement('ul');
        container.insertBefore(ul,list);
        ul.appendChild(createLI(this.value));
        this.value = '';
    }
});
input.addEventListener('keypress', function(e) {
    if (e.keyCode == 13 && this.value != 0) {
        let ul = document.createElement('ul');
        container.insertBefore(ul,list);
        ul.appendChild(createLI(this.value));
        this.value = '';
    }
})

function createLI(value) {
    let li = document.createElement('li');
    li.innerHTML = value;
    return li;
}

// window.addEventListener('keypress', work);
// input.addEventListener('keypress', work);

// function work(e) {
//     console.log(e);
//     console.log(e.keyCode);
// }