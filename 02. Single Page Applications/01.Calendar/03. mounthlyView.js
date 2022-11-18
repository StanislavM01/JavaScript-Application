//import { yearOnClick } from "./01.yearsView.js"



function selectMounthly() {
    console.log(yearOnClick)
    let currentYearsWithMounthly = document.querySelector(`#year-${yearOnClick}`)
    currentYearsWithMounthly.style.display = ``

}

export {
    selectMounthly
}

