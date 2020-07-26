let h1 = document.querySelector('h1');
let p = document.querySelector('p');

// function h1Style() {
//     return {
//         background: 'orange',
//         color: 'white',
//         fontSize: `56px`,
//         textAlign: 'center'
//     }
// };
let h1Style = {
    background: 'orange',
    color: 'white',
    fontSize: `56px`,
    textAlign: 'center'
};
// Object.assign(h1.style, h1Style());
Object.assign(h1.style, h1Style);