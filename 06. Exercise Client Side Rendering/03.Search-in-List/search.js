import { render, html } from "../node_modules/lit-html/lit-html.js"
import { templateCity } from "./cityTemplate.js"
import { towns } from "./towns.js"

let objTowns = towns.map(a => ({ name: a }))

let button = document.querySelector('article button')
let divEl = document.getElementById('towns')

let resultFromTemplateCity = templateCity(objTowns)
render(resultFromTemplateCity, divEl)


button.addEventListener('click', search)


function search(e) {
   let inputField = document.getElementById('searchText')
   let divWithCountMatches = document.getElementById('result')
   let count = 0
   objTowns.forEach(a => {
      if (a.name.includes(inputField.value.trim()) && inputField.value.trim() != '') {
         a.class = 'active'
         count++
      } else {
         a.class = undefined
      }
   })
   divWithCountMatches.textContent = `${count} matches found `
   render(templateCity(objTowns), divEl)
}