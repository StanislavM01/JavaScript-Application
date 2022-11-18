let section = undefined

export function setupSection(domElement) {
    section = domElement

}

export async function getView() {
    return section
}
let addMovieDetailsPage = {
    setupSection,
    getView
}
export default addMovieDetailsPage