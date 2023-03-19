"use strict";

const numberOfFilms = +prompt("How many films have you watched?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
if (personalMovieDB.count < 10) {
    alert("You've seen too few films");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    alert("You're avarage viewer");
} else if (personalMovieDB.count > 30) {
    alert("You're film fun");
} else {
    alert("error");
}
for (let q = 0; q < 2; q++) {
    let a = prompt("Last watched film?", ""),
        b = prompt("How would you rate it?", "");
    if (a == "" || b == "" || a == null || b == null || a.length > 50 || b.length > 50) {
        alert("error");
        --q;
    }
    else {
        personalMovieDB.movies[a] = b;
    }

}

