import { render, html } from "../node_modules/lit-html/lit-html.js"
import {ifDefined} from "../node_modules/lit-html/directives/if-defined.js"

export let templateCity = (data) => html`
<ul>${data.map(a => html`<li class="${ifDefined(a.class)}">${a.name}</li>`)}</ul>`