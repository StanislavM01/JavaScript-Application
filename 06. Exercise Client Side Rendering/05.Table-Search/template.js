import { ifDefined } from "../node_modules/lit-html/directives/if-defined.js"
import { render, html } from "../node_modules/lit-html/lit-html.js"



export let trowTemplate = (data) => {
    let result = data.map(a => html`
    <tr class="${ifDefined(a.class)}">
    <td>${a.firstName} ${a.lastName}</td>
    <td>${a.email}</td>
    <td>${a.course}</td>
    </tr>`)
    return result
}