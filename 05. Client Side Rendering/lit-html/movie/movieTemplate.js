import { html, render } from "../../../node_modules/lit-html/lit-html.js"

export default (data) => html`
<article>
    <h1>${data.title}</h1>
    <p>${data.description}</p>
    <footer>Author:Gosho123</footer>
    <img @click=${data.imageClick} src=${data.img}>
</article>`