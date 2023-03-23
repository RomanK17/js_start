"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("How many films have you watched?", "");
        while (isNaN(personalMovieDB.count) || personalMovieDB.count == "" || personalMovieDB.count == null) {
            alert("error: enter number of films!");
            personalMovieDB.count = +prompt("How many films have you watched?", "");
        }
    },
    allMovies: function () {
        if (personalMovieDB.count < 10) {
            alert("You've seen too few films");
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            alert("You're avarage viewer");
        } else if (personalMovieDB.count > 30) {
            alert("You're film fun");
        } else {
            alert("error");
        }
    },
    twoLatestFilms: function () {
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
    },

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB() {
        if (personalMovieDB.privat === false) {
            personalMovieDB.privat = true;
        } else if (personalMovieDB.privat === true) {
            personalMovieDB.privat = false;
        }
    },

    writeYourGenres: function () {
        for (let genresQuestion = 1; genresQuestion <= 3; genresQuestion++) {
            let genre = prompt(`What's your favorite genre? ${genresQuestion}`, "");
            personalMovieDB.genres[genresQuestion - 1] = genre;
            if (genre == "" || genre == null) {
                genresQuestion--;
            }
        }
        personalMovieDB.genres.forEach(function (item, itemNumber) {
            console.log(`Your favorite genre #${itemNumber + 1} is ${item}`)
        });
    }

};