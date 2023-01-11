let menu = document.querySelector(".landing-nav-menu")
let navLeft = document.querySelector(".nav-left")

let goUpBtn = document.querySelector(".go-up")

let nameMiddle = document.querySelector(".landing-describe")
let nav = document.querySelector(".landing-nav")

let projectImg = document.querySelector(".projects-img")
let projectName = document.querySelector(".projects-name")
let projectHref = document.querySelector(".projects-href")

let aboutEl = document.querySelector(".about")
let experienceEl = document.querySelector(".about-experience")
let languagesEl = document.querySelector(".about-languages")
let toolsEl = document.querySelector(".about-tools")

// Humberger menu 

menu.addEventListener("click",()=> {
    menu.classList.toggle("active")
    navLeft.classList.toggle("active")
})

// Go up button 
function goUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
window.onscroll = function (e) {
    if (scrollY == 0) {
        goUpBtn.style.opacity = "0"

    } else {
        goUpBtn.style.opacity = "1"
    }
}

// projects image slider
let myProjects = {
    "DuckDuckGo recreate":{src:"images/projects/DuckDuckGo-recreate.png",link:"https://haidarkhalid.github.io/DuckDuckGo-recreate/"},
    "Blackjack game":{src:"images/projects/BlackJack.png",link:"https://haidarkhalid.github.io/blackjack-game/"},
    "Score counter": {src:"images/projects/score-counter.png",link:"https://haidarkhalid.github.io/score-counter-new/"},
    "Charecters counter": {src:"images/projects/charecter-couner.png",link:"https://haidarkhalid.github.io/charecters-counter/"},
    "Multiplication quiz": {src:"images/projects/multiplication-quiz.png",link:"https://haidarkhalid.github.io/multiplication-quiz/"},
    "Calculator": {src:"images/projects/calculator.png",link:"https://haidarkhalid.github.io/calculator/"},
    "Gaming quiz": {src:"images/projects/Gaming-quiz.png",link:"https://haidarkhalid.github.io/Gaming-quiz/"},
    "Password generator": {src:"images/projects/password-gene.png",link:"https://haidarkhalid.github.io/password-generator/"},
    "To-Do list": {src:"images/projects/to-do-list.png",link:"https://haidarkhalid.github.io/to-do-list/"},
    "Digital clock": {src:"images/projects/digital-clock.png",link:"https://haidarkhalid.github.io/Digital-clock/"},
    "Colors game": {src:"images/projects/colors-game.png",link:"https://haidarkhalid.github.io/colors-game/"},
}
let projectNames = ["DuckDuckGo recreate","Blackjack game","Score counter","Charecters counter","Multiplication quiz","Calculator","Gaming quiz","Password generator","To-Do list","Digital clock","Colors game"]
let x = 0
function next() {
    x++
    if (x <= projectNames.length - 1) {
        projectName.textContent = projectNames[x]
        projectImg.src = myProjects[projectNames[x]]["src"]
        projectHref.href = myProjects[projectNames[x]]["link"]
    } else {
        x = 0
        projectName.textContent = projectNames[x]
        projectImg.src = myProjects[projectNames[x]]["src"]
        projectHref.href = myProjects[projectNames[x]]["link"]
    }
}


function previos() {
    x--
    if (x <= projectNames.length - 1 && x >= 0) {
        projectName.textContent = projectNames[x]
        projectImg.src = myProjects[projectNames[x]]["src"]
        projectHref.href = myProjects[projectNames[x]]["link"]
    } else if (x <= -1) {
        x = projectNames.length - 1
        projectName.textContent = projectNames[x]
        projectImg.src = myProjects[projectNames[x]]["src"]
        projectHref.href = myProjects[projectNames[x]]["link"]
    }
}
