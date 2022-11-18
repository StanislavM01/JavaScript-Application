import { navTemplate } from "./navTemplate.js"



function getView(context, next) {
    let resultTemplate = navTemplate()
    context.renderNav(resultTemplate)
    next()
}


export default {
    getView
}
