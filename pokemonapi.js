import { pokemonList } from './assets/pokemonStuff/pokemon.js'
import { pokeItems } from "./assets/pokemonStuff/items.js"
import { pokeTypes } from "./assets/pokemonStuff/types.js"
import { pokedex } from "./assets/pokemonStuff/pokedex.js"
//--------------create cards----------------
const container = document.querySelector('#cards')
const newDeck = document.getElementById('myDeck')
let cardCountCont = document.querySelector('#cardCount')
let cardCount = 0
cardCountCont.textContent = "Cards "
let count = 1

//-----randomize-----
const testSection = document.getElementById('test')

function pokeCard(name, hp, attack, defence, speed, id) {
    this.name = name,
        this.hp = hp,
        this.attack = attack,
        this.defence = defence,
        this.speed = speed,
        this.id = id
}
let cardCollection = []
cardCollection[21] = 21

let allPokemon = pokedex
let randCard = []

let randBtn = document.getElementById("randomize").addEventListener('click', () => {
    // if()

    for (let i = 0; i < cardCollection.length; i++) {
        // Print each iteration to the console
        // console.log(i);
        randCard = allPokemon[Math.floor(Math.random() * allPokemon.length)]

        // cardCollection.push(() => {

        // })
        let newRandCard = new pokeCard(randCard.ename, randCard.base.HP, randCard.base.Attack, randCard.base.Defense, randCard.base.Speed, randCard.id)

        console.log(randCard)
        let printName = document.createElement('div')
        printName.innerText = newRandCard.name
        testSection.appendChild(printName)
        console.log(newRandCard)
            // console.log("Card array " + cardCollection)
    }
})


//-----------------practice random stuff-----------------
// for (let i = 0; i < cardCollection.length; i++) {

//     //--- make cards ----
//     let card = document.createElement('div')
//     card.className = "card"
//     card.addEventListener('click', () => { card.classList.toggle('flip') })
//     container.appendChild(card)
//     let front = document.createElement('div')
//     front.className = "front"
//     card.appendChild(front)
//     let back = document.createElement('div')
//     back.className = "back"
//     card.appendChild(back)

//     //-----------inside of front of cards----------------
//     let numPrefix = count < 10 ? '00' : '0';
//     let imgName = (`${numPrefix}${count++}${element.ename}.png`)
//         //name
//     let pokeName = document.createElement('h1')
//     pokeName.textContent = element.ename
//     front.appendChild(pokeName)
//         //image
//     let frontImg = document.createElement('img')
//     frontImg.src = `pokemonPics/${imgName}`
//     front.appendChild(frontImg)
//         //stats
//     let statBox = document.createElement('div')
//     statBox.className = "statBox"
//     front.appendChild(statBox)

//     // ---------HP-----------
//     let hpParent = document.createElement('div')
//     hpParent.className = "statParent"
//     statBox.appendChild(hpParent)

//     let hpBar = document.createElement('div')
//     hpBar.className = "statBar"
//     hpParent.appendChild(hpBar)
//     hpBar.style.width = element.base.HP + "%"

//     let hp = document.createElement('p')
//     hp.textContent = "HP " + element.base.HP
//     hpBar.appendChild(hp)
//         //-----------attack------------
//     let atkParent = document.createElement('div')
//     atkParent.className = "statParent"
//     statBox.appendChild(atkParent)

//     let atkBar = document.createElement('div')
//     atkBar.className = "statBar"
//     atkParent.appendChild(atkBar)
//     atkBar.style.width = element.base.Attack + "%"

//     let atk = document.createElement('p')
//     atk.textContent = "Atk " + element.base.Attack
//     atkBar.appendChild(atk)
//         //-------------Def--------------
//     let defParent = document.createElement('div')
//     defParent.className = "statParent"
//     statBox.appendChild(defParent)

//     let defBar = document.createElement('div')
//     defBar.className = "statBar"
//     defParent.appendChild(defBar)
//     defBar.style.width = element.base.Defense + "%"

//     let def = document.createElement('p')
//     def.textContent = "Def " + element.base.Defense
//     defBar.appendChild(def)
//         //-------------speed-----------
//     let spdParent = document.createElement('div')
//     spdParent.className = "statParent"
//     statBox.appendChild(spdParent)

//     let spdBar = document.createElement('div')
//     spdBar.className = "statBar"
//     spdParent.appendChild(spdBar)
//     spdBar.style.width = element.base.Speed + "%"

//     let spd = document.createElement('p')
//     spd.textContent = "Spd " + element.base.Speed
//     spdBar.appendChild(spd)

//     //----------back of card content-----------------
//     let backImg = document.createElement('img')
//     backImg.src = './assets/pokemonStuff/back.png'
//     back.appendChild(backImg)
//     let copyBtn = document.createElement('button')
//     copyBtn.textContent = "Add to Deck"
//     back.appendChild(copyBtn)
//     copyBtn.addEventListener('click', (event) => {

//         cardCount += 1
//         cardCountCont.textContent = "Cards " + cardCount
//         let cloneCard = event.target.parentNode.parentNode
//         let newCard = cloneCard.cloneNode(true)
//         newCard.classList.toggle('flip')
//         let getButton = newCard.querySelector('button')
//         getButton.textContent = "Remove from Deck"
//         getButton.addEventListener('click', (event) => {

//                 cardCount -= 1
//                 cardCountCont.textContent = "Cards " + cardCount
//                 let getCardRemove = event.target.parentNode.parentNode
//                 getCardRemove.parentNode.removeChild(getCardRemove)

//             })
//             // console.log(getButton)
//         newCard.addEventListener('click', () => { newCard.classList.toggle('flip') })
//         newDeck.appendChild(newCard)
//     })
// }




// for (let i = 0; i < 21; i++) {
//     // Print each iteration to the console
//     console.log(i);
//     randCard = allPokemon[Math.floor(Math.random() * allPokemon.length)]
//     let newRandCard = new pokeCard(randCard.ename, randCard.base.HP, randCard.base.Attack, randCard.base.Defense, randCard.base.Speed)
//     let printName = document.createElement('div')
//     printName.innerText = newRandCard.name
//     testSection.appendChild(printName)
//     console.log(newRandCard)
// }

// "Attack": 49,
// "Defense": 49,
// "HP": 45,
// "Sp.Atk": 65,
// "Sp.Def": 65,
// "Speed": 45

//------------Creates cards with foreach loop-----------

pokemonList.forEach(element => {
    let card = document.createElement('div')
    card.className = "card"
    card.addEventListener('click', () => { card.classList.toggle('flip') })
    container.appendChild(card)
    let front = document.createElement('div')
    front.className = "front"
    card.appendChild(front)
    let back = document.createElement('div')
    back.className = "back"
    card.appendChild(back)

    //-----------inside of front of cards----------------
    let numPrefix = count < 10 ? '00' : '0';
    let imgName = (`${numPrefix}${count++}${element.ename}.png`)
        //name
    let pokeName = document.createElement('h1')
    pokeName.textContent = element.ename
    front.appendChild(pokeName)
        //image
    let frontImg = document.createElement('img')
    frontImg.src = `pokemonPics/${imgName}`
    front.appendChild(frontImg)
        //stats
    let statBox = document.createElement('div')
    statBox.className = "statBox"
    front.appendChild(statBox)

    // ---------HP-----------
    let hpParent = document.createElement('div')
    hpParent.className = "statParent"
    statBox.appendChild(hpParent)

    let hpBar = document.createElement('div')
    hpBar.className = "statBar"
    hpParent.appendChild(hpBar)
    hpBar.style.width = element.base.HP + "%"

    let hp = document.createElement('p')
    hp.textContent = "HP " + element.base.HP
    hpBar.appendChild(hp)
        //-----------attack------------
    let atkParent = document.createElement('div')
    atkParent.className = "statParent"
    statBox.appendChild(atkParent)

    let atkBar = document.createElement('div')
    atkBar.className = "statBar"
    atkParent.appendChild(atkBar)
    atkBar.style.width = element.base.Attack + "%"

    let atk = document.createElement('p')
    atk.textContent = "Atk " + element.base.Attack
    atkBar.appendChild(atk)
        //-------------Def--------------
    let defParent = document.createElement('div')
    defParent.className = "statParent"
    statBox.appendChild(defParent)

    let defBar = document.createElement('div')
    defBar.className = "statBar"
    defParent.appendChild(defBar)
    defBar.style.width = element.base.Defense + "%"

    let def = document.createElement('p')
    def.textContent = "Def " + element.base.Defense
    defBar.appendChild(def)
        //-------------speed-----------
    let spdParent = document.createElement('div')
    spdParent.className = "statParent"
    statBox.appendChild(spdParent)

    let spdBar = document.createElement('div')
    spdBar.className = "statBar"
    spdParent.appendChild(spdBar)
    spdBar.style.width = element.base.Speed + "%"

    let spd = document.createElement('p')
    spd.textContent = "Spd " + element.base.Speed
    spdBar.appendChild(spd)

    //----------back of card content-----------------
    let backImg = document.createElement('img')
    backImg.src = './assets/pokemonStuff/back.png'
    back.appendChild(backImg)
    let copyBtn = document.createElement('button')
    copyBtn.textContent = "Add to Deck"
    back.appendChild(copyBtn)
    copyBtn.addEventListener('click', (event) => {

        cardCount += 1
        cardCountCont.textContent = "Cards " + cardCount
        let cloneCard = event.target.parentNode.parentNode
        let newCard = cloneCard.cloneNode(true)
        newCard.classList.toggle('flip')
        let getButton = newCard.querySelector('button')
        getButton.textContent = "Remove from Deck"
        getButton.addEventListener('click', (event) => {

                cardCount -= 1
                cardCountCont.textContent = "Cards " + cardCount
                let getCardRemove = event.target.parentNode.parentNode
                getCardRemove.parentNode.removeChild(getCardRemove)

            })
            // console.log(getButton)
        newCard.addEventListener('click', () => { newCard.classList.toggle('flip') })
        newDeck.appendChild(newCard)
    })
})

// function notificationObj() {
//     this.containter = container
//     this.header = header
//     this.message = message
//     this.button = button

// }
// if (cardCount === 7) {
//     let notification = document.createElement("div")
//     notificationObj()
// }



// function Pokemon() {
//     this.name = name
//     this.hp = hp
//     this.attack = attack
//     this.defence = defence
//     this.speed = speed
// }

//add card name to array that displays list of cards in deck