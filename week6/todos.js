import { ToDo } from './ToDo.js'

let tasks = [];

tasks = JSON.parse(localStorage.getItem("todos"))

displayTaks();


function displayTaks() {
    let ul = document.querySelector('ul');
    ul.innerHTML = "";
    tasks.forEach(
        item => {
            ul.innerHTML +=
                `<li>
            <input type="checkbox" id="">
            <span>${item.Content}</span>
            <button>X</button>
            </li>`;
        }
    );
}

let button = document.querySelector('button')
    .addEventListener('click', (e) => {
        let content = document.querySelector('#content')
        let todo = new ToDo(content.value)
        tasks.push(todo)

        localStorage.setItem('todos', JSON.stringify(tasks));

        content.value = ""
        displayTaks()
    });
