import { render } from "../node_modules/lit-html/lit-html.js"
import authService from "../service/authService.js"
import navTemplate from "./navTemplate.js"




function getView(context, next) {
    let navInfo = {
        isLoggedIn: authService.isLoggedIn(),
        currentPage: context.pathname
    }
    let templateResult = navTemplate.navTemplate(navInfo)
    console.log(templateResult)
    let b = 5
    
    context.renderNav(templateResult)
    next()
}
export default {
    getView
}