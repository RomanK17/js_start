"use strict";

const numberOfFilms = +prompt("How many films have you watched?", "");
let a = prompt("Last watched film?", ""),
    b = prompt("How would you rate it?", ""),
    c = prompt("Last watched film?", ""),
    g = prompt("How would you rate it?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = g;
console.log(personalMovieDB);