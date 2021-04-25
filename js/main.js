const links = [
    {
        label: "Home",
        url: "WDD-330/index.html"
    },
    {
        label: "Week 1 notes & Code Examples",
        url: "WDD-330/week1/index.html"
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