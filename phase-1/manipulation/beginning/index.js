/*

Phase 1 -> DOM Manipulation
by Sakib Rasul
Updated March 13, 2024
Created September 12, 2023

Core Deliverables
1. Select a node.
2. Modify a node.
3. Remove a node.
4. Append a node.

Challenges
1. Append a list.
2. Replace a node.

*/

// ~ APIs, CRUD, `document`

// ~ Read/Select a node
// -> querySelector is a DOM method that lets us look up nodes by CSS **selector**.
// -> querySelectorAll is a DOM method that returns an array-like list of nodes that match a CSS selector.
// -> textContent is a property of text nodes (e.g. h1, p) that contain their text.


// ~ Update/Modify a node's attributes
// -> To modify an attribute, just use = after the attribute name in object dot notation

// ~ Delete/Remove a node
// -> To remove an existing element, we can look it up and call the node's method `remove()`.

// ~ Create + Append a node
// -> createElement(), append()

// ~ Challenges
// 1. Write a function named displayList that takes a name and an array,
//    and appends a list to #dates. For example, given "Books" and "The Shining",
//    the function should append to #dates something like:
//        Books
//        • The Shining
// 2. Replace the <strong> element with a newly created one.

document.querySelectorAll("p").forEach(pElement => {console.log(pElement);});
document.querySelector("#today").textContent = "Today!";
document.querySelector("#today").style.color = "red";

document.querySelector("#tomorrow").remove();

// const image = document.createElement("img");
// image.src="https://www.pitpat.com/wp-content/uploads/2020/06/PP_German-Shepherd-1536x1063.jpg";
// document.body.append(image);
// document.querySelector("#tomorrow").createElement(" sunny");
// document.querySelector("#tomorrow").append("sunny")


// function displayList(name, arr) {
//     const div = document.querySelector("#dates")
// }

function displayList(name, array) {
    const div = document.querySelector("#dates");
    const heading = document.createElement("h2");
    heading.textContent = name;
    div.append(heading);
    const list = document.createElement("ul");
    // [array].forEach([function]) applies [function] to each item in [array]
    array.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.append(li);
    });
    // ...equivalent to...
    // for (let i = 0; i < array.length; i++) {
    //     const li = document.createElement("li");
    //     li.textContent = array[i];
    //     list.append(item);
    // }
    div.append(list);
};
// displayList("Book Series", ["Harry Potter", "Alex Rider", "The Magic Treehouse"]);