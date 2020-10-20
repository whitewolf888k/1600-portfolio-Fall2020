import { films } from './Data/films.js'
import { people } from './Data/people.js'

console.log(people.length)

//console.log(films[0])

//const filmList = document.querySelector('.filmList');

films.forEach(film => {
    console.log(film.title)
    filmList.textContent = film.title
});