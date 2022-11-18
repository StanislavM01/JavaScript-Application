import { selectMounthly } from "./03. mounthlyView.js"
import { hideAllSection } from "./hideAndShow.js"

let yearOnClick = ``


function showYearSection() {
    let sectionToShow = document.querySelector(`#years`)
    sectionToShow.style.display = ``
}

let allYearsBox = document.querySelector(`#years table tbody`)

allYearsBox.addEventListener(`click`, addEventOnYears)
function addEventOnYears(e) {
    if (e.target.tagName == `TD`) {
        yearOnClick = e.target.querySelector(`div`).textContent
        console.log(`you select year`, yearOnClick)

       // hideAllSection()
       // selectMounthly()
    }
}



export {
    showYearSection,
    addEventOnYears
}

