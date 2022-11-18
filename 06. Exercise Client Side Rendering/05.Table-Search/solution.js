import { render, html } from "../node_modules/lit-html/lit-html.js"
import { trowTemplate } from "./template.js"

let dataValues

let tableBody = document.querySelector('table tbody')
console.log(tableBody)
fetch('http://localhost:3030/jsonstore/advanced/table')
   .then(function (response) {
      if (response.status == 200) {
         return response.json()
      } else {
         throw new Error('have a problem')
      }
   })
   .then(function (data) {
      dataValues = Object.values(data)
      console.log(dataValues)

      render(trowTemplate(dataValues), tableBody)
   })
   .catch(function (err) {
      alert(err)
   })




document.querySelector('#searchBtn').addEventListener('click', onClick);

function onClick() {
   let inputField = (document.getElementById('searchField').value.trim()).toLowerCase()

   dataValues.forEach(a => {
      let obj = {
         names: `${a.firstName} ${a.lastName}`,
         email: a.email,
         course: a.course
      }

      if (Object.values(obj).some(a => a.toLowerCase().includes(inputField))) {
         a.class = 'select'
      } else {
         a.class = undefined
      }
   })
   render(trowTemplate(dataValues), tableBody)
}

