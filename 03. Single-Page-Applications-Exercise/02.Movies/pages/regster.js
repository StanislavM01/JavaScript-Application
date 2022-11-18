import viewFinder from "../viewFinder.js"
import { jsonRequest } from "../httpService.js"
import auth from "../auth.js"

let section = undefined

export function setupSection(domElement) {
    section = domElement
    let form = section.querySelector(`#register-form`)
    form.addEventListener(`submit`, registerUser)

}
async function registerUser(e) {

    e.preventDefault()
    let form = e.target
    let formData = new FormData(form)
    let email = formData.get(`email`)
    let password = formData.get(`password`)
    let repeatPassword = formData.get(`repeatPassword`)
    console.log(email)
    if (email.trim().length == 0 ||
        password.trim().length == 0 ||
        password != repeatPassword ||
        password.length < 6) {
        alert(`Field must be not empty and password must match!`)
        throw new Error(`Field must be not empty and password must match!`)
    }

    let user = {
        email: formData.get(`email`),
        password: formData.get(`password`)
    }
    let url = `http://localhost:3030/users/register`
    let result = await jsonRequest(url, 'post', user)
    console.log(result)
    auth.setAuthToken(result.accessToken)

    viewFinder.navigateTo('home')


}

export async function getView() {
    return section
}

let addRegisterPage = {
    setupSection,
    getView
}
export default addRegisterPage