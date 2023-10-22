/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {};


/* Populate Profile Object with placesLive objects */

let myProfile = {
    name: "pareick Juarez"
}


/* DOM Manipulation - Output */
favoriteFoods: [
    'rice',
    'Tikka',
    'Prioshki',
    'Shrimp',
    'Banana Cream pie',
]
/* Name */

/* Photo with attributes */

myProfile.placesLived.push(
    {
        place: 'San Franciso, ca',
        length: '1 year'
    }
)
/* Favorite Foods List*/
document.querySelector('#name').textContent = myProfile.name;

/* Hobbies List */
myProfile.favoriteFoods.foreach(food => {
    let li = document.createElement('Li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Places Lived DataList */


