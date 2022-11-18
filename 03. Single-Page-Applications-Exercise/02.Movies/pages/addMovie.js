let section = undefined

export function setupSection(domElement){
    section = domElement

}

export async function getView(){
    return section
}

let addMoviePage = {
    setupSection,
    getView
}
export default addMovieSection