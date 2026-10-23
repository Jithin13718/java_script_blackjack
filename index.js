let firstcard = 14
let secondcard = 7
let sum = firstcard+secondcard
let isblackjack = false
let isALive = true
let message = ""
let msgEl = document.getElementById("message-el")
let sumel = document.getElementById("sum-el")
let cardsel = document.getElementById("cards-el") 
function startGame(){
    cardsel.textContent = "Cards: " + firstcard + " " + secondcard
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
}
