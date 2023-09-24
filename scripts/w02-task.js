/* W02-Task - Profile Home Page */
const fullName = "Luke Ramirez";
/* Step 1 - Setup type tasks - no code required */
/* Step 2 - Variables */

let currentYear = "2023";
let profilePicture = 'images\Resized_20230919_103135.jpeg'


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector("#year");



/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong> ${fullName}</strong>`;

imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', profilePicture);
imageElement.innerHTML = `pr0file image of ${fullName}`;

/* Step 5 - Array */
let favoriteFood = ['watermellon', 'chicken', 'rice', 'chips'];

foodElement.innerHTML = `favorite foods: ${favoriteFood}`
const singleFood = 'peach';
foodElement.innerHTML += `<br>$favFoods}`;

