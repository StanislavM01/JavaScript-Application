import { render, html } from "../node_modules/lit-html/lit-html.js"

export let addAllOptions = (data) => {
    let result = data.map(obj => html`
    <option .value="${obj._id}">${obj.text}</option>`)
    return result
}




