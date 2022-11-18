
import auth from "./auth.js";
import addHomePage from "./pages/home.js";
import addLoginPage from "./pages/login.js";
import addRegisterPage from "./pages/regster.js";

let views = {
    "home": async () => await addHomePage.getView(),
    "login": async () => await addLoginPage.getView(),
    "register": async () => await addRegisterPage.getView(),
    "logout": async () => await auth.logout()
}


function initialize(allLinksElements) {
    allLinksElements.forEach(a => a.addEventListener(`click`, changeViewHandler))
}

export async function changeViewHandler(e) {
    let route = e.target.dataset.route
    navigateTo(route)
}

export async function navigateTo(route) {
    if (views.hasOwnProperty(route)) {
        let view = await views[route]()
        let appEl = document.querySelector(`#main`)
        appEl.querySelectorAll(`.view`).forEach(e => e.remove())
        appEl.appendChild(view)

    }
}

export async function redirectTo(route) {
    if (views.hasOwnProperty(route)) {
        let viewFunc = views[route]()
        return viewFunc

    }
}

let viewFinder = {
    initialize,
    navigateTo,
    changeViewHandler,
    redirectTo
}
export default viewFinder
