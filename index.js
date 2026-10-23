let firstcard = 14
let secondcard = 7
let cards = [firstcard,secondcard]
let sum = firstcard+secondcard
let isblackjack = false
let isAlive = true
let message = "" 
let msgEl = document.getElementById("message-el")
let sumel = document.getElementById("sum-el")
let cardsel = document.getElementById("cards-el") 
function startGame(){
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
        isAlive = true
    }else{
        message = "You lost the game"
        isAlive = false
    }
    msgEl.textContent = message
}

function newCard(){
    console.log("Drawing a new deck of card")
    let card = 8
    sum+=card
    cards.push(card)
    renderGame();
}

console.log(cards)
// let messages = ["hi i am jithin","this is a new way","log out"]
// let newmessage = messages
// messages.push(newmessage)
// messages.pop(messages.length-1)
// console.log(messages)

