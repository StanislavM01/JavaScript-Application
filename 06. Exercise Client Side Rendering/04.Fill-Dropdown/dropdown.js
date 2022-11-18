import { render, html } from "../node_modules/lit-html/lit-html.js"
import { addAllOptions } from "./template.js"
let allDataValues

let dropdownMenu = document.getElementById('menu')
let form = document.querySelector('article form')

fetch('http://localhost:3030/jsonstore/advanced/dropdown')
    .then(function (response) {
        if (response.status == 200) {
            return response.json()
        } else {
            throw new Error('have a problem')
        }
    })
    .then(function (data) {
        allDataValues = Object.values(data)
        render(addAllOptions(allDataValues), dropdownMenu)
    })
    .catch(function (err) {
        alert(err)
    })



form.addEventListener('submit', addItem)



function addItem(e) {
    e.preventDefault()
    let textInputField = document.getElementById('itemText')

    fetch('http://localhost:3030/jsonstore/advanced/dropdown', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: textInputField.value
        })
    })
        .then(function (response) {
            if (response.status == 200) {
                return response.json()
            } else {
                throw new Error('have a problem')
            }
        })
        .then(function (data) {
            console.log(data)
            allDataValues.push(data)
            textInputField.value = ''
            render(addAllOptions(allDataValues), dropdownMenu)

        })
        .catch(function (err) {
            alert(err)
        })

}