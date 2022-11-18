import create from "./pages/create/create.js"
import nav from "./nav/nav.js"
import page from "./node_modules/page/page.mjs"
import dashboard from "./pages/dashboard/dashboard.js"
import details from "./pages/details/details.js"
import login from "./pages/login/login.js"
import register from "./pages/register/register.js"
import renderingMiddleware from "./renderer/renderingMiddleware.js"
import authService from "./service/authService.js"
import edit from "./pages/edit/edit.js"
import myFurniture from "./pages/myFurniture/myFurniture.js"

let divContainer = document.getElementById('viewContainer')
let navContainer = document.getElementById('navigation')

renderingMiddleware.initialze(divContainer, navContainer)

page('/dashboard', renderingMiddleware.decorateContext, nav.getView, dashboard.getView)
page('/login', renderingMiddleware.decorateContext, nav.getView, login.getView)
page('/register', renderingMiddleware.decorateContext, nav.getView, register.getView)
page('/logout', async (context) => { await authService.logout(); page.redirect('/login') })
page('/details/:id', renderingMiddleware.decorateContext, nav.getView, details.getView)
page('/create', renderingMiddleware.decorateContext, nav.getView, create.getView)
page('/edit/:id', renderingMiddleware.decorateContext, nav.getView, edit.getView)
page('/my-furniture', renderingMiddleware.decorateContext, nav.getView, myFurniture.getView)




page('/index.html', '/dashboard')
page('/', '/dashboard')

page.start() 