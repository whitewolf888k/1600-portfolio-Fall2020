// Reusable async function to fetch data from the provided url
async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

// Now, use the assync getAPIData function
function loadPage() {
    getAPIData(`https://pokeapi.co/api/v2/pokemon`).then
        (async (data) => {
            for (const pokemon of data.results) {
                await getAPIData(pokemon.url).then((pokeData) => {
                    populatePokeCard(pokeData)
                })
            }
        })
}

const pokeGrid = document.querySelector('.pokeGrid')

function populatePokeCard(pokemon) {
    let pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    let pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    pokeCard.addEventListener('click', () => {
        console.log(`you clicked`)
        pokeCard.classList.toggle('is-flipped')
    })

    pokeCard.appendChild(populateCardFront(pokemon))
    pokeCard.appendChild(populateCardBack(pokemon))
    pokeScene.appendChild(pokeCard)
    pokeGrid.appendChild(pokeScene)
}

function populateCardFront(pokemon) {
    let cardFront = document.createElement('div')
    cardFront.className = `card_face card_face--front`
    let frontLabel = document.createElement('p')
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
    let backLabel = document.createElement('p')
    backLabel.textContent = "I am the back"
    /*getAPIData(`https://pokeapi.co/api/v2/pokemon`).then
        (async (data) => {
            let backLabel = document.createElement('ul')
            data.moves.forEach(move => {
                console.log(move.move.name)
                let moveItem = document.createElement('li')
                moveItem.textcontent = move.move.name
                backLabel.appendChild(moveItem)
            })*/
            cardBack.appendChild(backLabel)
            return cardBack
        }//)
//}

function getImageFileName(pokemon) {
    if (pokemon.id < 10) {
        return `00${pokemon.id}`
    } else if (pokemon.id > 9 && pokemon.id < 99) {
        return `0${pokemon.id}`
    }
}

/*function Pokemon(name, height, weight, abilities) {
    this.name = name
    this.height = height
    this.weight = weight
    this.abilities = abilities
    this.id = 900
}

let bulbasaur = new Pokemon('Bulbasaur', 5, 90, ['whip', 'slice'])
console.log(bulbasaur)*/

loadPage()