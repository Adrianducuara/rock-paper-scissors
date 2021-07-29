"use strict"

const tagMain = document.querySelector("main")
const targets = document.querySelectorAll(".box")
const pointUserTag = document.querySelector("#point-user")
const pointMachineTag = document.querySelector("#point-machine")
const tieUser = document.querySelector("#tie-user")
let pointMachine = 0
let pointUser = 0
var attackValue = null

function validElements(element) {
    if(element.getAttribute("data-rock") == 0) {
        element.addEventListener("click", ()=>{
            validAttack(attackSelectMachine(), 0)
        })
    }
    if(element.getAttribute("data-paper") == 1) {
        element.addEventListener("click", ()=>{
            validAttack(attackSelectMachine(), 1)
        })
    }
    if(element.getAttribute("data-scissor") == 2) {
        element.addEventListener("click", ()=>{
            validAttack(attackSelectMachine(), 2)
        })
    }
} 
function attackSelectUser(argTarget) {
    argTarget.forEach(validElements)
}
function attackSelectMachine() {
    let select
    select = Math.floor(Math.random() * (3 - 0)) + 0

    return select
}
function validAttack(selectMachine, selectUser) {
    if(selectMachine == 0 && selectUser == 1) {
        pointUser += 1
        renderPoint(pointUserTag, pointUser)

    } else if(selectMachine == 1 && selectUser == 0) {
        pointMachine += 1
        renderPoint(pointMachineTag, pointMachine)
    } else if(selectMachine == 2 && selectUser == 1) {
        pointMachine += 1
        renderPoint(pointMachineTag, pointMachine)
    } else if(selectMachine == 1 && selectUser == 2) {
        pointUser += 1
        renderPoint(pointUserTag, pointUser)
    } else if(selectMachine == 0 && selectUser == 2) {
        pointMachine += 1
        renderPoint(pointMachineTag, pointMachine)
    } else if(selectMachine == 2 && selectUser == 0) {
        pointUser += 1
        renderPoint(pointUserTag, pointUser)
    } else {
        alertTie(tagMain)
    }
}
function renderPoint(tagHTML, points) {
    tagHTML.innerText = points
}
function alertTie(contentTag) {
    const containerAlert = document.createElement("section")
    containerAlert.className = "container-alert"
    const tagAlert = document.createElement("article")
    tagAlert.className = "alert"
    const tagTitle = document.createElement("h2")
    tagTitle.textContent = "¡Empate!⚡"
    const tagButton = document.createElement("button")
    tagButton.textContent = "continuar"
    contentTag.append(containerAlert)
    containerAlert.append(tagAlert)
    tagAlert.append(tagTitle)
    setTimeout(function(){
        containerAlert.className = "hidden"
    }, 2000)
}
attackSelectUser(targets)