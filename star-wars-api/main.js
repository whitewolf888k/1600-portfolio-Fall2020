import { films } from './Data/films.js'
import { people } from './Data/people.js'
import { planets } from './Data/planets.js'
import { species } from './Data/species.js'

const nav = document.querySelector('.nav')
const navList = document.querySelector('.navList')
const mainContent = document.querySelector('#main')

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
    console.log(planetData)
    const planetFig = document.createElement('figure')
    const planetImg = document.createElement('img')
    let planetNum = getLastNumber(element.url)
    planetImg.src = `https://starwars-visualguide.com/assets/img/planets/${planetNum}.jpg`
}

function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if (url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
} 
populateNav(planets)