import { Day } from './day.js'

document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();

    let numberOfDays = document.getElementById("days").value;

    let days = [];
    // Populate Array with day objects

    for (let i = 1; i <= numberOfDays; i++) {
        let day = new Day(i);
        days.push(day);
    }

    var ele = document.getElementsByName('theme');
    let name = document.getElementById("name").value
    let theme = ""

    for (let i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            theme = ele[i].value;
    }

    let banner = document.querySelector('#banner');
    banner.classList.remove('hidden');
    banner.style.backgroundImage = "url(" + theme + ".jpeg";
    banner.alt = theme;

    let appContent = document.querySelector('#app-content');
    appContent.classList.remove('hidden');

    let appTitle = document.querySelector('#app-title');
    appTitle.innerHTML = `${name}'s Potty Tracker`;

    let ul = document.getElementById("calendar")
    for (let i = 1; i <= numberOfDays; i++) {
        ul.innerHTML +=
            `
    <li><button id="${i}" class="day">${i}</button></li>
    `
    }

    // HIDE SET UP  
    var x = document.getElementById("setUp");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    document.querySelectorAll('.day').forEach(item => {
        item.addEventListener('click', event => {
            playAudio();
            let currentId = event.srcElement.innerHTML
            days[currentId - 1].Completed = !days[currentId - 1].Completed;

            document.getElementById(currentId).style.background = 'darkcyan';
            document.getElementById(currentId).style.color = 'white';
            document.getElementById(currentId).disabled = true;

        })
    });

    let daysCompleted = 0;
    for (var i = 0; i < days.length; i++) {
        if (days[i].Completed == true) {
            found += 1;
        }
    }
    if (daysCompleted == days.length) {
        window.alert("you did it!")
    }

});


// GET AND ADD THEME BANNER
function addTheme() {

}

// Create Apps name and Calendar
function createCalendar() {


}

function playAudio() {
    var audio = document.getElementsByTagName("audio")[0];
    audio.play()
}



