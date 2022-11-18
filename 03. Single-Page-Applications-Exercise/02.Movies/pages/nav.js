let section = undefined

export function setupSection(domElement){
    section = domElement

}

export async function getView(){
    return section
}

let nav = {
    setupSection,
    getView
}

export default nav
