import { films } from './Data/films.js'
import { people } from './Data/people.js'
import { planets } from './Data/planets.js'
import { species } from './Data/species.js'
import { removeChildren, getLastNumber } from '../utils/index.js'

const nav = document.querySelector('.nav')
const navList = document.querySelector('.navList')
const planetView = document.querySelector('#main')
const speciesView = document.querySelector('#main')
const mainHeader = document.querySelector('.button')

const dialog = document.querySelector('.modal')
const closeButton = document.querySelector('.modal-close')

closeButton.addEventListener('click', () => {
    dialog.classList.toggle('is-active')
})

const planetButton = document.createElement('button')
planetButton.textContent = 'Planets'
mainHeader.appendChild(planetButton)

const speciesButton = document.createElement('button')
speciesButton.textContent = 'Species'
mainHeader.appendChild(speciesButton)

planetButton.addEventListener('click', event => {
function populateNav(planets) {
    planets.forEach(planet => {
        let anchorWrap = document.createElement('a')
        anchorWrap.href = '#'
        anchorWrap.addEventListener('click', event => {
            let planetName = event.target.textContent
            const foundPlanet = planets.find(planet => planet.name === planetName)
            populatePlanetView(foundPlanet)
        })

        let listItem = document.createElement('li')
        listItem.textContent = planet.name

        anchorWrap.appendChild(listItem)
        navList.appendChild(anchorWrap)
        nav.appendChild(navList)
    })
}

function populatePlanetView(planetData) {
    removeChildren(planetView)
    let planetImg = document.createElement('img')
    let planetNum = getLastNumber(planetData.url)
    planetImg.src = `https://starwars-visualguide.com/assets/img/planets/${planetNum}.jpg`
    planetImg.addEventListener('error', () => {
        planetImg.hidden = true
        dialog.classList.toggle('is-active')
    })

    planetView.appendChild(planetImg)
}

populateNav(planets)
})

speciesButton.addEventListener('click', event => {
function populateNav(species) {
    species.forEach(species => {
        let anchorWrap = document.createElement('a')
        anchorWrap.herf = '#'
        anchorWrap.addEventListener('click', event => {
            let speciesName = event.target.textContent
            const foundSpecies = people.find(specie => specie.name === speciesName)
            populateSpeciesView(foundSpecies)
        })

        let listItem = document.createElement('li')
        listItem.textContent = species.name

        anchorWrap.appendChild(listItem)
        navList.appendChild(anchorWrap)
        nav.appendChild(navList)
    })
}
function populateSpeciesView(specieData) {
    removeChildren(speciesView)
    let speciesImg = document.createElement('img')
    let speciesNum = getLastNumber(specieData.url)
    speciesImg.src= `https://starwars-visualguide.com/assets/img/species/${speciesNum}.jpg`
    speciesImg.addEventListener('error', () => {
        speciesImg.hidden = true
        dialog.classList.toggle('is-active')
    })

    speciesView.appendChild(speciesImg)
}

populateNav(species)
})