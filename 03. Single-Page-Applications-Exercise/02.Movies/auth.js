import { jsonRequest } from "./httpService.js"
import viewFinder from "./viewFinder.js"

export function setAuthToken(token) {
    localStorage.setItem(`authToken`, token)
}

export function getAuthToken() {
    return localStorage.getItem('authToken')
}
export function isLoggedIn() {
    return localStorage.getItem(`authToken`) !== null || localStorage.getItem(`authToken`) !== undefined
}

export async function logout() {
    let result = await jsonRequest(`http://localhost:3030/users/logout`, `Get`, undefined, true, true)
    localStorage.clear()
    return viewFinder.redirectTo(`login`)

}

let auth = {
    setAuthToken,
    getAuthToken,
    isLoggedIn,
    logout
}

export default auth