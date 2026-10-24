
let cards = []
let sum = 0
let isblackjack = false
let isAlive =  false
let message = "" 
let msgEl = document.getElementById("message-el")
let sumel = document.getElementById("sum-el")
let cardsel = document.getElementById("cards-el") 

function getRandom(){
    let randomnum = Math.floor(Math.random() * 13)+1
    if(randomnum === 1){
        return 11
    }else if(randomnum >10 ){
        return 10 
    }else{
        return randomnum 
    }
}
function startGame(){
    isAlive = true
    let firstcard = getRandom()
    let secondcard = getRandom()
    cards = [firstcard,secondcard]
    sum = firstcard+secondcard
    renderGame()
}
function renderGame(){
    cardsel.textContent = "Cards:"
    for(let i=0;i<cards.length;i++){
        cardsel.textContent += cards[i] + " "
    }
    // cardsel.textContent = "Cards: " + cards[0] + " " + cards[1]
    sumel.textContent = "Sum: "+sum
    if(sum<=20){
        message= "Do you want to draw a new card"
    }else if(sum === 21){
        message = "You won the blackjack"
        isblackjack = true
    }else{
        message = "You lost the game"
        isAlive = false
    }
    msgEl.textContent = message
}

function newCard(){
    console.log("Drawing a new deck of card")
    if(isAlive === true && isblackjack=== false){
        let card = getRandom()
        sum+=card
        cards.push(card)
        renderGame();
    }
}

// // console.log(cards)
// let messages = ["hi i am jithin","this is a new way","log out"]
// for(let i=0;i<messages.length;i++){
//     console.log(messages[i])
// }

