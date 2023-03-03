// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }

  let count = 0;
  moviesArray.filter(item => {
    if (item.genre.includes('Drama') && item.director === 'Steven Spielberg') {
      count += 1;
    }
  });
  return count;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }

  let newMovies = moviesArray.filter(movie => movie.score >= 0);

  let avg =
    newMovies.reduce((avr, curr) => {
      return avr + curr.score;
    }, 0) / moviesArray.length;
  return Math.round(avg * 100) / 100;
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let newMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));

  let avgDrama =
    newMovies.reduce((avr, curr) => {
      return avr + curr.score;
    }, 0) / newMovies.length;

  if (!newMovies.length) {
    return 0;
  } else {
    return Math.round(avgDrama * 100) / 100;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let newArray = [];
  moviesArray.year.sort((a, b) => a - b);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
