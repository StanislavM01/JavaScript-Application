function showOneHideAllLeft(sectionToShow) {
    let allSectionEl = document.querySelectorAll(`section`)
    for (const element of allSectionEl) {
        element.style.display = `none`
    }
    sectionToShow.style.display = ``

}

export function hideAllSection() {
    let allSectionEl = document.querySelectorAll(`section`)
    for (const element of allSectionEl) {
        element.style.display = `none`
    }
}