let menu = document.querySelector(".landing-nav-menu")
let navLeft = document.querySelector(".nav-left")

let goUpBtn = document.querySelector(".go-up")

let nameMiddle = document.querySelector(".landing-describe")
let nav = document.querySelector(".landing-nav")

let projectDivContainer = document.querySelector(".projuct-contain-div")
let projectImg = document.querySelector(".projects-img")
let projectName = document.querySelector(".projects-name")
let projectHref = document.querySelector(".projects-href")

let aboutEl = document.querySelector(".about")
let experienceEl = document.querySelector(".about-experience")
let languagesEl = document.querySelector(".about-languages")
let toolsEl = document.querySelector(".about-tools")

let scrollDown = document.querySelector(".landing-scroll-down-div")

let catEggEl = document.querySelector(".cat-egg")


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
        scrollDown.style.opacity = "1"

    } else {
        goUpBtn.style.opacity = "1"
        scrollDown.style.opacity = "0"
    }
}

// projects image slider
let myProjects = {
    "WeatherHere app" : {src:"images/projects/weatherhere-app.png",link:"https://haidarkhalid.github.io/WeatherHere/"
    "DuckDuckGo recreate":{src:"images/projects/DuckDuckGo-recreate.png",link:"https://haidarkhalid.github.io/DuckDuckGo-recreate/"},
    "Cat vs Dogs":{src:"images/projects/cat-vs-dogs.png",link:"https://haidarkhalid.github.io/cat-vs-dogs/"},
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
let projectNames = ["WeatherHere app", "DuckDuckGo recreate","Cat vs Dogs","Blackjack game","Score counter","Charecters counter","Multiplication quiz","Calculator","Gaming quiz","Password generator","To-Do list","Digital clock","Colors game"]
let x = 0
function next() {
    x++
    if (x <= projectNames.length - 1) {
        projectName.textContent = projectNames[x]
        
        projectDivContainer.innerHTML = `
        <img class="projects-img" src="${myProjects[projectNames[x]]["src"]}">
        `
        /* 
        projectImg.src = myProjects[projectNames[x]]["src"]*/
        projectHref.href = myProjects[projectNames[x]]["link"] 
    } else {
        x = 0
        projectName.textContent = projectNames[x]
        
        projectDivContainer.innerHTML = `
        <img class="projects-img" src="${myProjects[projectNames[x]]["src"]}">
        `
        projectHref.href = myProjects[projectNames[x]]["link"]
    }
}


function previos() {
    x--
    if (x <= projectNames.length - 1 && x >= 0) {
        projectName.textContent = projectNames[x]
        
        projectDivContainer.innerHTML = `
        <img class="projects-img" src="${myProjects[projectNames[x]]["src"]}">
        `
        projectHref.href = myProjects[projectNames[x]]["link"]
    } else if (x <= -1) {
        x = projectNames.length - 1
        projectName.textContent = projectNames[x]
        
        projectDivContainer.innerHTML = `
        <img class="projects-img" src="${myProjects[projectNames[x]]["src"]}">
        `
        projectHref.href = myProjects[projectNames[x]]["link"]
    }
}

/* cat egg */
function catEgg() {
    catEggEl.style.opacity = "1"
    setTimeout(()=>{catEggEl.style.opacity = "0"},1500)
}

//blob effect
const blob = document.getElementById("blob")
document.body.onmousemove = event => {
    blob.style.display = 'inline-block'
    const { clientX, clientY} = event
    if (clientX >= window.innerWidth - 120) {
        blob.animate({
        left: `${window.innerWidth - 120}px`,
        top: `${clientY +  window.scrollY}px`
        }, {duration: 500, fill:"forwards"})
    } else {
    blob.animate({
    left: `${clientX}px`,
    top: `${clientY +  window.scrollY}px`
    }, {duration: 500, fill:"forwards"})
    }
}
