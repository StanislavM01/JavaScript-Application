function getAll() {
    return fetch('http://localhost:3030/data/movies')
        .then(response => response.json())
}
export default{
    getAll
}