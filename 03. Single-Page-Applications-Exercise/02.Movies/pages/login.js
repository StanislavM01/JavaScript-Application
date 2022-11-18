import auth from "../auth.js"
import { jsonRequest } from "../httpService.js"
import viewFinder from "../viewFinder.js"


let section = undefined

export function setupSection(domElement) {
    section = domElement
    let form = section.querySelector(`#login-form`)
    form.addEventListener(`submit`, loginUser)

}

async function loginUser(e) {
    e.preventDefault()
    let form = e.target
    let formData = new FormData(form)
    let user = {
        email: formData.get(`email`),
        password: formData.get(`password`)
    }
    let url = `http://localhost:3030/users/login`
    let result = await jsonRequest(url,'post',user)
    console.log(result)
    auth.setAuthToken(result.accessToken)
    form.reset()
    viewFinder.navigateTo('home')

    
}

export async function getView() {
    return section
}

let addLoginPage = {
    setupSection,
    getView
}
export default addLoginPage