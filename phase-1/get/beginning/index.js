/*

Phase 1 -> GET
Updated March 14, 2024
Created May 25, 2023
by Sakib Rasul

Objectives
1. Make a GET request to an external API.

*/

// A synchronous request to https://cat-fact.herokuapp.com/facts/random.

// A synchronous request to https://anapioficeandfire.com/api/books.

// An asynchronous request to https://pokeapi.co/api/v2/pokemon/[name]"

// ~ Challenge: Make a GET request to an API of your choice!


//fetch
//create = POST
//Read
//Update = PATCH
//Delete = DELETE
let parser;
fetch("https://cat-fact.herokuapp.com/facts/random")
.then(response => response.json())
.then(fact => {
    document.querySelector("#cat").textContent = fact.text;
}).catch();

fetch("https://anapioficeandfire.com/api/books")
.then(response => response.json())
.then(books => {
    books.forEach(e => {
    const li = document.createElement("li");
    li.textContent = e.name;
    document.querySelector("#got").append(li);
    });
}).catch();

async function getPokemon(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemon = await response.json();
    document.querySelector("#pokemon").textContent = pokemon.name;
}
getPokemon("mew");
