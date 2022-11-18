import { render, html } from "../node_modules/lit-html/lit-html.js"
import cityTemplate from "./cityTemplate.js"

let formEl = document.querySelector('form')
let div = document.getElementById('root')

formEl.addEventListener('submit', function (e) {
    e.preventDefault()
    let formData = new FormData(e.target)
    let inputField = formData.get('towns')
    let allCity = inputField.split(', ')
    let templateWithAllCity = cityTemplate(allCity)
    console.log(templateWithAllCity)
    console.log(allCity)
    render(templateWithAllCity,div)
})