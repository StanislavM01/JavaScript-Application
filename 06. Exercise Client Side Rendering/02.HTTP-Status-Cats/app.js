import { render, html } from "../node_modules/lit-html/lit-html.js"

import { cats } from "./catSeeder.js"
import { createUlTemplate } from "./catTemplate.js"

let catsSection = document.getElementById('allCats')
catsSection.addEventListener('click', clickOnCat)

function clickOnCat(e) {
    if (e.target.tagName == 'BUTTON' && e.target.textContent == 'Show status code') {
        e.target.textContent = 'Hide Status Code'
        let divElToShow = e.target.parentNode.querySelector('div.status')
        divElToShow.style.display = ''
    } else if (e.target.tagName == 'BUTTON' && e.target.textContent == 'Hide Status Code') {
        e.target.textContent = 'Show status code'
        let divElToHide = e.target.parentNode.querySelector('div.status')
        divElToHide.style.display = 'none'

    }
}

let catTemplate = createUlTemplate(cats)
render(catTemplate, catsSection)