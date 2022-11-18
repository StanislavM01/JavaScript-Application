import { html, render } from "../node_modules/lit-html/lit-html.js"
import movieTemplate from "./movie/movieTemplate.js"
import movieTemplateList from "./movie/movieTemplateList.js"
import movieService from "./movie/service.js/movieService.js"

function imageClick(e) {
    let titleOnMovie = e.currentTarget.parentNode.querySelector('h1')
    console.log(titleOnMovie.textContent)
}

movieService.getAll()
    .then(movies => {
        console.log(movies)
        movies.map(a => a.imageClick = imageClick)
        let result = movieTemplateList(movies)
        render(result, document.querySelector('main'))
    })
