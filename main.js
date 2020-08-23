"use strict"

let numberOfFilms,
    lvl;


function rememberMyFilms(){

    for(let i = 0; i < 1; i++ ) {
        let boolPrompt = false;
        let nameFilm,
            filmScore;

        while (!boolPrompt) {
            nameFilm = prompt('Название фильма','');
            if( (nameFilm.length > 0) && (nameFilm.length < 50) ){
                boolPrompt = true
            }
        }
        boolPrompt = false
        while (!boolPrompt) {
            filmScore = +prompt('Оценка','');
            if(filmScore != null && typeof(filmScore) == 'number'){
                boolPrompt = true
            }
        }
        personalMovieDB.movies[nameFilm] = filmScore
    }
}

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели числом','');
    while(numberOfFilms == '' || isNaN(numberOfFilms) || numberOfFilms == null){
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели числом','');
    }
}

start()


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

rememberMyFilms()




function detectPersonalLvl(){
    if (personalMovieDB.count < 10){
        console.log('Нуб');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('Нормас юзер');
    } else if (personalMovieDB.count >= 30){
        console.log('Киноман');
    } else {
        console.log('error');
    }
}
detectPersonalLvl()
    

function showMyDB(){
    if(!personalMovieDB.privat){
        console.log(personalMovieDB);
    }
}

function writeYourGenres(){
    for( let i = 0; i < 3; i++){
        let genres = prompt(`Ваш любтмый жанр №${i+1}`,"")
        while(genres == '' || genres == null){
            genres = prompt(`Ваш любтмый жанр №${i+1}`,"")
        }
        personalMovieDB.genres[i] = genres
    }
}

writeYourGenres()

showMyDB()

// while and do while //
/*
    switch (numberOfFilms){
        case 10:
            lvl = 'noob';
            break;
        case 11:
            lvl = 'noob mini';
            break;
        case 12:
            lvl = 'normal';
            break;
        default:
            lvl = 'no noob';
            break;
    }
let numWhile = 10,
    numDoWhile = 10;

while( numWhile <= 20) {
    if (numWhile == 15){
        break;
    }
    if (numWhile == 17){
        continue;
    }
    console.log(numWhile)
    numWhile++
};

do{
    console.log(numDoWhile)
    numDoWhile++
} while( numDoWhile < 5 );

*/