import { films } from './Data/films.js'
import { people } from './Data/people.js'

console.log(people.length)

//console.log(films[0])

//const filmList = document.querySelector('.filmList');
// forEach type of loop:
films.forEach(film => {
    console.log(film.title)
    filmList.textContent = film.title
});

//'for...of' loop:
const main = document.querySelector('main')

for (const film of film) {
    let newImg = document.createElement('img') // new image instance 
    newImg.src = 'https://starwars-visualguide.com/assets/img/characters/2.jpg' //set the source of it or nothing will show 
    // now append the image to the DOM somehow
    main.appendChild(newImg)
    console.log(film.title)
}

//'for' loop:

for (let step = 0; step < 7; step++) {
    // runs 7 times, with values of step 0 through 6.
    let figure = document.createElement('figure')
    let figImg = document.createElement('img') 
    figImg.src = `https://starwars-visualguide.com/assets/img/films/${step + 1}.jpg`
    let figCaption = document.createElement('figcaption')
    figCaption.textContent = flims[step].title

    figure.appendChild(figIgm)
    figure.appendChild(figCaption)



    console.log(films[step].title);

}