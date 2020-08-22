"use strict"

let numberOfFilms,
    moreThan,
    lvl;

numberOfFilms = prompt('Сколько фильмов вы посмотрели','');

(numberOfFilms > 1) ? moreThan = true  :  moreThan = false;

switch (numberOfFilms){
    case 1:
        lvl = 'noob';
        break;
    case 2:
        lvl = 'noob mini';
        break;
    case 3:
        lvl = 'normal';
        break;
    default:
        lvl = 'pro';
        break;
}

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    moreThan,
    lvl,
    privat: false
}

for(let i = 0; i < 2; i++ ) {
    let nameFilm = prompt('Название фильма',''),
        filmScore = prompt('оценка','')
    personalMovieDB.movies[nameFilm] = filmScore
}

console.log(personalMovieDB)
