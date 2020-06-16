// JavaScript Doggos Project version 1.1
// By: sirdaniel711
// Linked files: index.html
//
// This example shows how an AJAX request is made to a public API/server called dog.ceo, and how to process the requested data once it is returned (asynchronous).
// It will display the returned request in the browsers console once it is processed.

const RANDOM_DOG_URL = "https://dog.ceo/api/breeds/image/random";
const DOG_BREED_URL_1 = "https://dog.ceo/api/breed/";
const DOG_BREED_URL_2 = "/images/random";
const BREED_LIST_URL = "https://dog.ceo/api/breeds/list/all";

const doggos = document.querySelector(".doggos");
const dogBreed = document.querySelector(".dog-breed");

populateDogBreed();

function populateDogBreed() {
    const promise = fetch(BREED_LIST_URL);
    promise
        .then(function(response) {
            const processingPromise = response.json();
            return processingPromise;
        })
        .then(function(processedResponse) {
            var x;
            var breeds = [];
            var option = document.createElement('option');

            for (x in processedResponse.message) {
                option.text = x.slice(0, 1).toUpperCase() + x.slice(1);
                option.value = x;
                breeds.push(option.outerHTML);
            }
            dogBreed.insertAdjacentHTML('beforeEnd', breeds.join('\n'));
        })
}

function addNewDoggo() {
    var url;
    if (dogBreed.options[dogBreed.selectedIndex].value === "random") {
        url = RANDOM_DOG_URL;
    }
    else {
        url = DOG_BREED_URL_1 + dogBreed.options[dogBreed.selectedIndex].value + DOG_BREED_URL_2;
    }
    const promise = fetch(url);
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
