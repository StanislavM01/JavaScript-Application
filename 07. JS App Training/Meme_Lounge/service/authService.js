import jsonRequester from "./jsonRequester.js"



let baseUrl = 'http://localhost:3030'

async function login(body) {
    let result = await jsonRequester(`${baseUrl}/users/login`, 'post', body)

    return result
}

async function register(body) {
    let result = await jsonRequester(`${baseUrl}/users/register`, 'post', body)
    return result
}

async function logout() {
    let result = await jsonRequester(`${baseUrl}/users/logout`, 'get', undefined, true, true)
}

function getAuthToken() {
    return localStorage.getItem('authToken')
}

export default {
login,
register,
logout,
getAuthToken
}