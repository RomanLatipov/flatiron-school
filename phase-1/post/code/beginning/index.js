/*

Phase 1 -> Creating data with JSON Server and POST requests
Updated March 15, 2024
Created May 26, 2023
by Sakib Rasul

Objectives
1. Run an instance of JSON Server that hosts a dataset.
1. Make a GET request to display a dataset.
2. Make a POST request to add to that dataset.

*/

// Let's try making a GET request to display existing data on the page.

// Now, let's trigger a POST request when the user submits the form,
// so that they can add data to the database! Remember to think about
// the event, the target, and the handler when planning a listener.


// ~ Challenges
// 1. There are a handful of awfully similar lines in our requests. Try abstracting them
//    into a function!
// 2. Try writing your own POST request.
// 3. Try writing PATCH and DELETE requests!

/* crud
create -> post
read -> get
update -> patch
delete -> deletes
*/

fetch("http://localhost:3000/pokemon")
.then(response => response.json())
.then(pokemon => {
    pokemon.forEach(e => {
        const p = document.createElement("li");
        p.textContent = e.name;
        document.querySelector("ul").append(p);
    })
}).catch();

// fetch("http://localhost:3000/pokemon")
// .then(response => response.json())
// .then(poke => {
//     poke.forEach(e => {
//         const temp = `
//             <p style="color: green">${e.name}</p>
//         `;
//         document.querySelector("body").innerHTML += temp;
//     });
// }).catch();

document.querySelector("form").addEventListener("submit", event  => {
    event.preventDefault();
    fetch("http://localhost:3000/pokemon", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: document.querySelector("form").name.value,
            types: [
                document.querySelector("form").type1.value,
                document.querySelector("form").type2.value,
            ]
        })    
    })
    .then(response => response.json())
    .then(pokemon => {
        const li = document.createElement("li");
        li.textContent = pokemon.name;
        document.querySelector("#pokemon").append(li);
    });
})