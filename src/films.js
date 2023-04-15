// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = [];
  result = movies.map(movie => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, directorName) {
 let result = [];
 result = movies.filter(movie => movie.director == directorName);
 console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, directorName) {
  let directorFilms = [];
  directorFilms = getMoviesFromDirector(movies, directorName);
  let result = moviesAverage(directorFilms);
  console.log("EXERCICE 3 ->", result);
  return result;  
}

function moviesAverage(array) {
  let scores = [];
  scores = array.map(movie => parseFloat(movie.score));
  let result = scores.reduce((acc, el) => acc + el, 0) / scores.length;
  return result;  
}


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  let arrayTitles = [];
  arrayTitles = movies.map(movie => movie.title);
  let allTitles = [];
  allTitles = arrayTitles.sort();
  let result = [];
  result = allTitles.slice(0, 20);
  console.log("EXERCICE 4 ->", result);
  return result; 
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  let lista = [];
  lista = movies.map(movie => movie);
  //lista.sort((x, y) => x.year - y.year); 
  let result = [];
  result = lista.sort((a,b) => {
    let titleA = a.title;
    let titleB = b.title;
    let yearA = a.year;
    let yearB = b.year;
    if (yearA < yearB) {
      return -1;
    }
    if (yearA > yearB) {
      return 1;
    }
    if (yearA === yearB) {
      if (titleA > titleB) {
        return 1;
      } else {
        return -1;
      }
    }
  });

  console.log("EXERCICE 5 ->", result);
  return result; 
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, categoria) {
  let listaPorGenero = [];
  movies.forEach((movie) => {
    if (movie.genre.includes(categoria) == true && movie.score >0) {
      listaPorGenero.push(movie);
    }
  });
  let result = moviesAverage(listaPorGenero);
  console.log("EXERCICE 6 ->", result);
  return parseFloat(result.toFixed(2)); 
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
