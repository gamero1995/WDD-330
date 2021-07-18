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
    },
    {
        label: "Week 3 notes, Code Examples and Team Work",
        url: "../week3/index.html"
    },
    {
        label: "Week 4 notes, Code Examples and Team Work",
        url: "../week4/index.html"
    },
    {
        label: "Week 5 notes, Code Examples and Team Work",
        url: "../week5/index.html"
    },
    {
        label: "Week 6",
        url: "../week6/index.html"
    },
    {
        label: "Week 7 notes, Code Examples and Team Work",
        url: "../week7/index.html"
    },
    {
        label: "Week 8 notes, Code Examples and Team Work",
        url: "../week8/index.html"
    },
    {
        label: "Week 9 notes, Code Examples and Team Work",
        url: "../week9/index.html"
    },
    {
        label: "Week 10 notes, Code Examples and Team Work",
        url: "../week10/index.html"
    },
    {
        label: "Week 11 - Authentication",
        url: "../week11/client/week11.html"
    },
    {
        label: "Bock Challenge 2 - Potty Tracker",
        url: "../pottyTrackerApp/index.html"
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