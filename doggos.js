// JavaScript Doggos Project version 1.0
// By: sirdaniel711
// Linked files: index.html
//
// This example shows how an AJAX request is made to a public API/server called dog.ceo, and how to process the requested data once it is returned (asynchronous).
// It will display the returned request in the browsers console once it is processed.

const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector(".doggos");

function addNewDoggo() {
    const promise = fetch(DOG_URL);
    promise
        .then(function(response) {
            const processingPromise = response.json();
            return processingPromise;
        })
        .then(function(processedResponse) {
            const img = document.createElement("img");
            img.src = processedResponse.message;
            img.alt = "Cute doggo";
            doggos.appendChild(img);
        });
}

document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);