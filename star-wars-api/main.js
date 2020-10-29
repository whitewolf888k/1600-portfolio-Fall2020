import { films } from './Data/films.js'
import { people } from './Data/people.js'
import { planets } from './Data/planets.js'
import { species } from './Data/species.js'

const mainContent = document.querySelector('#main')

const mainHeader = document.createElement('header')
mainHeader.className = 'mainHeader'
document.body.insertBefore(mainHeader, mainContent)

const planetButton = document.createElement('button')
planetButton. textContent = 'Planets'
mainHeader.appendChild(planetButton)

const speciesButton = document.createElement('button')
speciesButton. textContent = 'Species'
mainHeader.appendChild(speciesButton)

const planetTypes = planets.filter((planets) => planets.rotation_period === '24')
console.log(planetTypes)

const speicesTypes = species.filter((species) => species.average_lifespan === '1000')

planetButton.addEventListener('click', () => populateDOM(planetTypes))

speciesButton.addEventListener('click', () => populateDOM(speicesTypes))

/*planetButton.addEventListener('click', event => {
    planetTypes.forEach((element) => {
    const charFigure = document.createElement('figure')
    const charImg = document.createElement('img')
    let plaNum = getLastNumber(element.url)
    charImg.src = `https://starwars-visualguide.com/assets/img/planets/${plaNum}.jpg`
    charImg.addEventListener('error', event => {
        console.log(event)
        console.log(`Sorry, image not found for item #${plaNum}`)
        charImg.hidden = true
    })
    const charCaption = document.createElement('figcaption')
    charCaption.textContent = element.name

    charFigure.appendChild(charImg)
    charFigure.appendChild(charCaption)

    mainContent.appendChild(charFigure)
})
})*/

function populateDOM(planets) {
    removeChildren(mainContent)
    planets.forEach((element) => {
        const charFigure = document.createElement('figure')
        const charImg = document.createElement('img')
        let plaNum = getLastNumber(element.url)
        charImg.src = `https://starwars-visualguide.com/assets/img/planets/${plaNum}.jpg`
        charImg.addEventListener('error', event => {
            console.log(event)
            console.log(`Sorry, image not found for item #${plaNum}`)
            charImg.hidden = true
        })
        const charCaption = document.createElement('figcaption')
        charCaption.textContent = element.name
    
        charFigure.appendChild(charImg)
        charFigure.appendChild(charCaption)
    
        mainContent.appendChild(charFigure)
  })
}

//let theUrl = "https://swapi.co/api/planets/2/"
//let theUrl2 = "https://swapi.co/api/planets/12/"

function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if (url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
}

function removeChildren(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}