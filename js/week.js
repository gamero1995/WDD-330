const links = [
    {
        label: "Home",
        url: "../index.html"
    },
    {
        label: "Week 1 notes & Code Examples",
        url: "../week1/index.html"
    },
    {
        label: "Week 2 notes, Code Examples and Team Work",
        url: "../week2/index.html"
    }
]

let ul = document.querySelector('#menu')

links.forEach(
    link => {
        ul.innerHTML +=
            `
        <li>
            <a href="${link.url}">${link.label}</a>
        </li>
        `
    }
)