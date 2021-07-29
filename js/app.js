"use strict"

const targets = document.querySelectorAll(".box")
const pointUserTag = document.querySelector("#point-user")
const pointMachineTag = document.querySelector("#point-machine")

let pointMachine = 0
let pointUser = 0

function attackSelectUser(argTarget) {

    argTarget.forEach(element => {
        if(element.getAttribute("data-rock") == 0) {
            element.addEventListener("click", ()=>{
               main(attackSelectMachine(), 0)
            })
        }
        if(element.getAttribute("data-paper") == 1) {
            element.addEventListener("click", ()=>{
                main(attackSelectMachine(), 1)
            })
        }
        if(element.getAttribute("data-scissor") == 2) {
            element.addEventListener("click", ()=>{
                main(attackSelectMachine(), 2)
            })
        }
    })
    
}
function attackSelectMachine() {
    let select
    select = Math.floor(Math.random() * (3 - 0)) + 0

    return select
}
function main(selectMachine, selectUser) {
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
        console.log("None point")
    }
}
function renderPoint(tagHTML, points) {
    tagHTML.innerText = points
}
attackSelectUser(targets)