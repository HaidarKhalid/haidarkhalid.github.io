
let myProjects = {
    "WeatherHere app" : {src:"images/projects/weatherhere-app.png",link:"https://haidarkhalid.github.io/WeatherHere/"},
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
let apProjectsEl = document.querySelector(".ap-projects")

for (let i in projectNames) {
    apProjectsEl.innerHTML += `
    <div class="ap-project-div">
        <h3>${projectNames[i]}</h3>
        <a target="_blank" href="${myProjects[projectNames[i]]["link"]}">
            <img src="${myProjects[projectNames[i]]["src"]}" alt="${projectNames[i]}">
        </a>
    </div
    `
}
