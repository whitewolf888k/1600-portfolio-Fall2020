import { films } from './Data/films.js'
import { people } from './Data/people.js'
import { planets } from './Data/planets.js'
import { species } from './Data/species.js'
import { removeChildren, getLastNumber } from '../utils/index.js'

const nav = document.querySelector('.nav')
const navList = document.querySelector('.navList')
const itemView = document.querySelector('#main')
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
    populateNav(planets, "planets")
})

speciesButton.addEventListener('click', event => {
    populateNav(species, "species")
})

function populateNav(items, urlItem) {
    removeChildren(navList)
    items.forEach(item => {
        let anchorWrap = document.createElement('a')
        anchorWrap.href = '#'
        anchorWrap.addEventListener('click', event => {
            let itemName = event.target.textContent
            const foundItem = items.find(subItem => subItem.name === itemName)
            populateItemView(foundItem, urlItem)
        })

        let listItem = document.createElement('li')
        listItem.textContent = item.name

        anchorWrap.appendChild(listItem)
        navList.appendChild(anchorWrap)
        nav.appendChild(navList)
    })
}

function populateItemView(itemData, urlItem) {
    removeChildren(itemView)
    let itemImg = document.createElement('img')
    let itemNum = getLastNumber(itemData.url)
    itemImg.src = `https://starwars-visualguide.com/assets/img/${urlItem}/${itemNum}.jpg`
    itemImg.addEventListener('error', () => {
        itemImg.hidden = true
        dialog.classList.toggle('is-active')
    })

    itemView.appendChild(itemImg)
}
