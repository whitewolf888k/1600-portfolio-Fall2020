import { films } from './Data/films.js'
import { people } from './Data/people.js'
import { planets } from './Data/planets.js'
import { species } from './Data/species.js'

const mainContent = document.querySelector('#main')

const mainHeader = document.createElement('header')
mainHeader.className = 'mainHeader'
document.body.appendChild(mainHeader)

const planetButton = document.createElement('button')
planetButton. textContent = 'Planets'
mainHeader.appendChild(planetButton)

const speciesButton = document.createElement('button')
speciesButton. textContent = 'Species'
mainHeader.appendChild(speciesButton)

const planetTypes = planets.filter(planets => planets.rotation_period === '24')
console.log(planetTypes)

planetButton.addEventListener('click', event => {
    planetTypes.forEach((element) => {
    const charFigure = document.createElement('figure')
    const charImg = document.createElement('img')
    charImg.src = `https://starwars-visualguide.com/assets/img/planets/2.jpg`
    const charCaption = document.createElement('figcaption')
    charCaption.textContent = 'Alderaan'

    charFigure.appendChild(charImg)
    charFigure.appendChild(charCaption)

    mainContent.appendChild(charFigure)
})
})

function getLastNumber(url) {
    console.log(url)

}

getLastNumber(url)
