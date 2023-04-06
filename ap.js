let myProjects;
let projectNames;
async function getProjects() {
    let response = await fetch('projects.json')
    let data = await response.json()
    myProjects = data['myProjects']
    projectNames = data['projectNames']
    showProjects()
}
getProjects()
let apProjectsEl = document.querySelector(".ap-projects")
function showProjects() {
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
}