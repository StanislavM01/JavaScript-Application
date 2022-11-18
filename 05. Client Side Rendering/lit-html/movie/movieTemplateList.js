import { html, render } from "../../../node_modules/lit-html/lit-html.js"
import movieTemplate from "./movieTemplate.js"


export default (movies) => html`
<ul>
${movies.map(a => html`${movieTemplate(a)}`)}
</ul>`