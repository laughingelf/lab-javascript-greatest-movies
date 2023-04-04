// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((movie) => {
        return movie.director;
    })
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const stevensMovies = moviesArray.filter((movie) => {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    })
    return stevensMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) {
        return 0;
    }
    const total = moviesArray.map((movie) => {
        if (!movie.score) {
            return movie.score = 0;
        }
        return movie.score
    })
    let totalval = total.reduce((accum, currVal) => {
        return accum + currVal;
    })
    let totals = (totalval / moviesArray.length).toFixed(2)
    return Number(totals)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(function (movie) {
        return movie.genre.includes("Drama");
    });

    return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    let newArr = [...moviesArray]

    let sortedMovies = newArr.sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title)
        } else {
            return a.year - b.year
        }
    }
    )
    return sortedMovies

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const movieTitles = moviesArray.map((movie) => {
        return movie.title
    })
    movieTitles.sort()
    if (movieTitles.length > 20) {
        return movieTitles.slice(0, 20)
    }
    return movieTitles
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let empty = 0
    let movieTime = moviesArray.map((movie) => {
        let movDuration = movie.duration.replace(/[^0-9]/g, "");
        return movDuration
    })
    const calculatedTime = movieTime.forEach(element => {
        // let totalTime = 
        console.log(Number(element.slice(1)) + Number(element.slice(0, 1)))
        return empty += (Number(element.slice(1)) + Number(element.slice(0, 1) * 60))
    });
    // console.log(empty)
    return empty
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
