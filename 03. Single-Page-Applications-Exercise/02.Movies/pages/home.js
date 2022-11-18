let section = undefined

export function setupSection(domElement) {
    section = domElement

}

export async function getView() {
    return section
}

let addHomePage = {
    setupSection,
    getView
}

export default addHomePage