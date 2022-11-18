import { renderTemplate } from "./templatingEngine.js"

async function start() {
    let data = await (await fetch('./data.json')).json()
    let template = await (await fetch('./article.html')).text()
    

    let result = renderTemplate(template,data[0])


    let main = document.querySelector('main')
    main.innerHTML = (data.map(a => renderTemplate(template,a)))
}
start()