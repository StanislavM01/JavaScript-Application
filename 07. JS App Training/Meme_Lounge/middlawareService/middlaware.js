import { render } from "../node_modules/lit-html/lit-html.js"

let viewContainer
let navContainer

function initilize(viewContainerDomEl, navContainerDomEl) {
    viewContainer = viewContainerDomEl
    navContainer = navContainerDomEl
}

function renderNav(templateNav) {
    render(templateNav, navContainer)
}

function renderView(templateView) {
    render(templateView, viewContainer)
}

function decorateContext(context, next) {
    context.renderView = renderView
    context.renderNav = renderNav
    next()
}

export default{
    initilize,
    decorateContext,
    renderNav,
    renderView
}