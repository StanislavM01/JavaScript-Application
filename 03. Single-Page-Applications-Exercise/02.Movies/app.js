import addLoginPage from "./pages/login.js"
import addRegisterPage from "./pages/regster.js"
import addHomePage from "./pages/home.js"
import addMovieDetailsPage from "./pages/movieDetails.js"
import editMoviePage from "./pages/editMovie.js"

import viewFinder from "./viewFinder.js"

let appEl = document.querySelector(`#main`)

async function setup() {


    addLoginPage.setupSection(document.getElementById(`form-login`))
    addRegisterPage.setupSection(document.getElementById(`form-sign-up`))
    addHomePage.setupSection(document.getElementById(`home-page`))
    addMovieDetailsPage.setupSection(document.getElementById(`movie-details`))
    editMoviePage.setupSection(document.getElementById(`edit-movie`))
    
    viewFinder.initialize(document.querySelectorAll(`.link`))

}
setup()

