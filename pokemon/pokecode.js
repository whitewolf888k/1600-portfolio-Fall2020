// Reusable async function to fetch data from the provided url
import { removeChildren } from '../utils/index.js'

async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

let pokeArray

// Now, use the assync getAPIData function
function loadPage() {
    getAPIData(`https://pokeapi.co/api/v2/pokemon/`).then
        (async (data) => {
            for (const pokemon of data.results) {
                await getAPIData(pokemon.url).then((pokeData) => {
                    populatePokeCard(pokeData)
                    addtoarray(pokeArray, pokeData)
                })
            }
        })
}
console.log(pokeArray)
function addtoarray(array, data) {
    array.push(data)
}

const mainHeader = document.querySelector('.button')

const pokeGrid = document.querySelector('.pokeGrid')

//const newButton = document.querySelector('#newPokemon')

/*newButton.addEventListener('click', () => {
    let pokeName = prompt("What's your new Pokemon's Name?")
    populatePokeCard(createNewPokemon(pokeName))
})*/


const firstGenButton = document.createElement('button')
firstGenButton.textContent = 'First Generation'
mainHeader.appendChild(firstGenButton)

const secondGenButton = document.createElement('button')
secondGenButton.textContent = 'Second Generation'
mainHeader.appendChild(secondGenButton)

const thirdGenButton = document.createElement('button')
thirdGenButton.textContent = 'Third Generation'
mainHeader.appendChild(thirdGenButton)

firstGenButton.addEventListener('click', async (event) => {
    removeChildren(pokeGrid)
    for (let i = 0; i < 9; i++) {
        await getAPIData(`https://pokeapi.co/api/v2/pokemon/${firstGenArray[i]}`).then((pokeData) => {
            populatePokeCard(pokeData)
        })
    }
})

secondGenButton.addEventListener('click', async (event) => {
    removeChildren(pokeGrid)
    for (let i = 0; i < 9; i++) {
        await getAPIData(`https://pokeapi.co/api/v2/pokemon/${secGenArray[i]}`).then((pokeData) => {
            populatePokeCard(pokeData)
        })
    } 
})

thirdGenButton.addEventListener('click', async (event) => {
    removeChildren(pokeGrid)
    for (let i = 0; i < 9; i++) {
        await getAPIData(`https://pokeapi.co/api/v2/pokemon/${thirdGenArray[i]}`).then((pokeData) => {
            populatePokeCard(pokeData)
        })
    }
})




function populatePokeCard(pokemon) {
    let pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    let pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    pokeCard.addEventListener('click', () => {
        console.log(`you clicked`)
        pokeCard.classList.toggle('is-flipped')
    })

    pokeCard.appendChild(populateCardFront(pokemon));
    pokeCard.appendChild(populateCardBack(pokemon));
    pokeScene.appendChild(pokeCard)
    pokeGrid.appendChild(pokeScene)
}

function populateCardFront(pokemon) {
    let cardFront = document.createElement('div')
    cardFront.className = `card_face card_face--front`
    let frontLabel = document.createElement('h2')
    let frontImage = document.createElement('img')
    frontLabel.textContent = pokemon.name
    frontImage.src = `../images/pokemon/${getImageFileName(pokemon)}.png`
    cardFront.appendChild(frontImage)
    cardFront.appendChild(frontLabel)
    return cardFront
}

function populateCardBack(pokemon) {
    let cardBack = document.createElement('div')
    cardBack.className = `card_face card_face--back`
    let backLabel = document.createElement('h3')
    backLabel.textContent = `Type:`
    let typeList = document.createElement('ul')
    pokemon.types.forEach(type => {
        let typeName = document.createElement('li')
        typeName.textContent = type.type.name
        typeList.appendChild(typeName)
    })
    let abilityLabel = document.createElement('h3')
    abilityLabel.textContent = `Abilities:`
    let abilityList = document.createElement('ul')
    pokemon.abilities.forEach(ability => {
        let abilityName = document.createElement('li')
        abilityName.textContent = ability.ability.name
        abilityList.appendChild(abilityName)
    })
    /*let movesLabel = document.createElement('h3')
    movesLabel.textContent = 'Moves:'
    let moveAccuracy = document.createElement('p')
    const mostAccurateMove = getBestAccuracyAndPower(pokemon.moves)
    moveAccuracy.textContent = `${mostAccurateMove.move.name}`*/
    cardBack.appendChild(backLabel)
    cardBack.appendChild(typeList)
    cardBack.appendChild(abilityLabel)
    cardBack.appendChild(abilityList)
    return cardBack
        }

function getBestAccuracyAndPower(pokemoves) {
    return pokemoves.reduce((mostAccurate, move) => {
        getAPIData(move.move.url).then
        (async (data) => {
            //console.log(data)
        })
        return mostAccurate.accuracy > move.accuracy ? mostAccurate : move;
      }, {});
}

function getImageFileName(pokemon) {
    if (pokemon.id < 10) {
        return `00${pokemon.id}`
    } else if (pokemon.id > 9 && pokemon.id < 99) {
        return `0${pokemon.id}`
    } else if (pokemon.id > 99 && pokemon.id < 300) {
        return `${pokemon.id}`
    }
}

const firstGenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const secGenArray = [152, 153, 154, 155, 156, 157, 158, 159, 160]

const thirdGenArray = [252, 253, 254, 255, 256, 257, 258, 259, 260]
 



/*loadPage()
function Pokemon(name, height, weight, abilities) {
    this.name = name
    this.height = height
    this.weight = weight
    this.abilities = abilities
    this.id = 900
}

let bulbasaur = new Pokemon('Bulbasaur', 5, 90, ['whip', 'slice'])
console.log(bulbasaur)

function createNewPokemon(name) {
    return new Pokemon(name, 450, 200, ['gorge', 'sleep', 'cough'])
}*/