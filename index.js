"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many films have you watched?", "");
    while (isNaN(numberOfFilms) || numberOfFilms == "" || numberOfFilms == null) {
        alert("error: enter number of films!");
        numberOfFilms = +prompt("How many films have you watched?", "");
    }
}

start();

let genre1,
    genre2,
    genre3;
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [genre1, genre2, genre3],
    privat: false
};

function allMovies() {
    if (personalMovieDB.count < 10) {
        alert("You've seen too few films");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        alert("You're avarage viewer");
    } else if (personalMovieDB.count > 30) {
        alert("You're film fun");
    } else {
        alert("error");
    }
}

allMovies();

function twoLatestFilms() {
    for (let q = 0; q < 2; q++) {
        let a = prompt("Last watched film?", ""),
            b = prompt("How would you rate it?", "");
        if (a == "" || b == "" || a == null || b == null || a.length > 50 || b.length > 50) {
            alert("error");
            q--;
        }
        else {
            personalMovieDB.movies[a] = b;
        }

    }
}

twoLatestFilms();

function writeYourGenres() {
    for (let genresQuestion = 1; genresQuestion <= 3; genresQuestion++) {
        personalMovieDB.genres[genresQuestion] = prompt(`What's your favorite genre? ${genresQuestion}`, "");
    }
    console.log(personalMovieDB.genres);
}

writeYourGenres();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB();
