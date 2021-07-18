const RequestURL = "https://swapi.dev/api/people";

let next;
// let previous;

getUrl(RequestURL);

function getUrl(RequestURL) {
    let div = document.querySelector('div');
    div.innerHTML = "";
    fetch(RequestURL)
        .then(response => response.json())
        .then(jsonData => {
            next = jsonData.next;
            previous = jsonData.previous;
            jsonData.results.forEach(person => {
                div.innerHTML +=
                    `
        <ul>
        <li>Name: ${person.name}</li>
        <li>Height:${person.height}</li>
        <li>Birth Year: ${person.birth_year}</li>
        </ul>

        `
            });

        })

    // document.getElementById('previous').addEventListener("click", () => {
    //     getUrl(previous);
    // });

    document.getElementById('next').addEventListener("click", () => {
        getUrl(next);
    });

}