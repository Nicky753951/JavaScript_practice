"use strict";

const numberOfFilms = +prompt("Сколько фильмов Вы уже просмотрели?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
          b = prompt("На сколько оцените его?", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log ("done");
    } else{
        console.log ("Error");
        i--;
    }
}

if (personalMovieDB.count < 10){
    console.log ("Мало");
} else if(personalMovieDB.count > 10){
    console.log ("Нормально");        
} else {
    console.log ("Много");  
}



console.log(personalMovieDB);

