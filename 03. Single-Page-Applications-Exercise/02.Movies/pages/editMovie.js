let section = undefined

export function setupSection(domElement) {
    section = domElement

}

export async function getView() {
    return section
}
let editMoviePage = {
    setupSection,
    getView
}
export default editMoviePage