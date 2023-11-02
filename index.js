const movieWrapperEl = document.querySelector(".movies__list--wrapper");
const movieWrapper = document.getElementById("movie__wrapper");
const showResult = document.querySelector(".results__header");
let title;


function userSearchInput(event) {

    title = document.body.querySelector(".search__input").value;
    if (event.keyCode == 13) {
        renderMovies(title);
    }
}



async function renderMovies(title) {
    const movies = await fetch(`https://omdbapi.com/?apikey=38b2a9be&s=${title}`);

    const moviesData = await movies.json();
    const films = moviesData.Search.slice(0, 6);
    movieWrapperEl.innerHTML = films.map((movie) => moviesHTML(movie)).join("");

}



function moviesHTML(movie) {
    const showListHeader = document.querySelector(".results__header");
    showListHeader.classList += " show__results--header";
    return `
    <div class="movie__wrapper">
    <div class="movie__card">
        <figure class="movie__img--wrapper">
            <img src="${movie.Poster}" alt="" class="movie__img">
        </figure>
    <div class="movie__description">
        <div class="name">${movie.Title}</div>
        <div class="year">${movie.Year}</div>
        </div>

    </div>
</div>`;
}




