"use strict";

const numberOfFilms = +prompt("How many films have you watched?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let q = 0; q < 2; q++) {
    let a = prompt("Last watched film?", ""),
        b = prompt("How would you rate it?", "");
    personalMovieDB.movies[a] = b;
}

console.log(personalMovieDB);