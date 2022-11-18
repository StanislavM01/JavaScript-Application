import jsonRequester from "./jsonRequester.js"

let baseUrl = 'http://localhost:3030'

async function createMemes(body) {
    let result = await jsonRequester(`${baseUrl}/data/memes`, 'post', body, true)
    return result
}

async function getAllMemes() {
    let result = await jsonRequester(`${baseUrl}/data/memes?sortBy=_createdOn%20desc`)
    return result
}

async function getOneMeme(id) {
    let result = await jsonRequester(`${baseUrl}/data/memes/${id}`)
    return result
}

async function editMeme(body, id) {
    let result = await jsonRequester(`${baseUrl}/data/memes/:${id}`, 'put', body, true)
    return result
}

async function deleteMeme(id) {
    let result = await jsonRequester(`${baseUrl}/data/memes/:${id}`, 'delete', undefined, true)
    return result
}

export default {
    createMemes,
    getAllMemes,
    getOneMeme,
    editMeme,
    deleteMeme
}
