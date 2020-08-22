"use strict"

let numberOfFilms
numberOfFilms = +prompt('Сколько фильмов вы посмотрели')

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
}

for(let i = 0; i < 2; i++ ) {
    let nameFilm = prompt('Название фильма'),
        filmScore = prompt('оценка')
    personalMovieDB.movies[nameFilm] = filmScore
}

console.log(personalMovieDB)
