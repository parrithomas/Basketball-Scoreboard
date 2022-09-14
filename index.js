let homeScoreEl = document.getElementById('homescore-el');
let guestScoreEl = document.getElementById('guestscore-el');
let home1btn = document.getElementById('home1btn')
let home2btn = document.getElementById('home2btn')
let home3btn = document.getElementById('home3btn')
let guest1btn = document.getElementById('guest1btn')
let guest2btn = document.getElementById('guest2btn')
let guest3btn = document.getElementById('guest3btn')
let newGameBtn = document.getElementById('new-game-btn')

let homeScore = 0;
let guestScore = 0;

function home1(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}
function home2(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}
function home3(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}
function guest1(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}
function guest2(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}
function guest3(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}


function newGame(){
    homeScore = 0
    homeScoreEl.textContent = homeScore
    guestScore = 0
    guestScoreEl.textContent = guestScore
    
}