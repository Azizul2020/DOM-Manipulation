let task = document.querySelector('#task');
let msg = document.querySelector('.msg');
let btn = document.querySelector('#addBtn');
const input = document.querySelector('#input');
const search = document.querySelector('#search');
input.addEventListener('keypress', addTask);
btn.addEventListener('click', addTask);
search.addEventListener('input', filterItem);

function addTask(e) {
    if (input.value.length > 30) {
        alert(`You can't add more than 30 character`);
        input.value = '';
    }
    if ((e.keyCode == 13 || e.type === "click") && input.value != '') {
        let ul = document.createElement('ul');
        task.appendChild(ul);
        ul.className = 'list-group my-3';
        ul.appendChild(createLi(ul, input.value));
        //createLi(ul, input.value);
        input.value = '';
    }
}

function createLi(parent, value) {
    let li = document.createElement('li');
    li.classList.add('list-group-item')
    li.classList.add('d-flex')
    let p = document.createElement('p');
    p.style.width = 'auto';
    li.appendChild(p);
    p.innerHTML = value;
    let span = document.createElement('span');
    span.className = 'ml-auto';
    span.style.color = 'red';
    span.style.cursor = 'pointer';
    span.innerHTML = 'X';
    let span2 = document.createElement('span');
    span2.setAttribute('style', 'color:green;cursor:pointer;position:absolute;top:12px;right:50px;')
    span2.innerHTML = 'Edit |';
    span.addEventListener('click', function() {
        task.removeChild(parent);
    });
    span2.addEventListener('click', function() {
        let area = document.createElement('textarea');
        area.setAttribute('style', 'position:absolute;top:16px;left:16px;')
        area.style.width = li.offsetWidth + 'px';
        area.style.height = li.offsetHeight + 'px';
        area.style.resize = 'none';
        area.innerHTML = p.innerHTML;
        parent.appendChild(area);
        area.addEventListener('keypress', function(e) {
            if (e.keyCode == 13) {
                p.innerHTML = e.target.value;
                parent.removeChild(area);
            }
            if (e.target.value.length > 30) {
                alert(`You can't add more than 30 character`);
                e.target.value = p.innerHTML;
            }
        })
    });
    li.appendChild(span2);
    li.appendChild(span);
    //     parent.appendChild(li);
    return li;
}

function filterItem() {
    let value = search.value.toUpperCase();
    let li = document.querySelectorAll('#task ul li');
    let ul = document.querySelectorAll('#task ul');
    for (i = 0; i < li.length; i++) {
        var listValue = li[i].textContent.toUpperCase();
        if (listValue.indexOf(value) != -1) {
            ul[i].style.display = '';
        } else {
            ul[i].style.display = 'none';
        }
    }
    if (listValue.indexOf(value) < 0) {
        msg.innerHTML = `<h2>Data not found</h2>`;
    }
}