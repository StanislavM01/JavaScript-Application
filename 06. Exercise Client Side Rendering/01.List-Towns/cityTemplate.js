import { render, html } from "../node_modules/lit-html/lit-html.js"

export default (data) => html`
<ul>${data.map(a => html`<li>${a}</li>`)}</ul>
`