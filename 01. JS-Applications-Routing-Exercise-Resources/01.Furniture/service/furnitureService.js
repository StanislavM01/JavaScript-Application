import jsonRequest from "../helpers/jsonRequest.js";

let baseUrl = 'http://localhost:3030/data/catalog'

async function getAll() {
    let result = jsonRequest(baseUrl)
    return result
}


async function getOne(id) {
    let result = jsonRequest(`${baseUrl}/${id}`)
    return result
}

async function create(item) {
    let result = jsonRequest(baseUrl, 'post', item, true)
    return result
}

async function update(item, id) {
    console.log(id)
    let result = jsonRequest(`${baseUrl}/${id}`, 'put', item, true)
    return result
}

async function deleteting(id) {
    let result = jsonRequest(`${baseUrl}/${id}`, 'delete', undefined, true)
    return result
}

async function getMyFurniture(userId){
let result = await jsonRequest(`${baseUrl}/?where=_ownerId%3D%22${userId}%22`)
return result
}

export default {
    getAll,
    getOne,
    create,
    update,
    deleteting,
    getMyFurniture

}