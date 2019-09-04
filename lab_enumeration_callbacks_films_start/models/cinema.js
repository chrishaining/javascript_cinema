const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.filmTitles = function () {
  const titles = this.films.map(film => film.title)
  // console.log(titles);
  return titles;
};


Cinema.prototype.findByTitle = function (title) {
  return this.films.find(film => film.title === title)
// return foundFilm
};


Cinema.prototype.findByGenre = function (genre) {
  return this.films.filter(film => film.genre === genre)
};

Cinema.prototype.filmsFromYear = function (year) {
  return this.films.some((film) => {
    return film.year === year
  })
}

Cinema.prototype.filmsOverLengthOfTime = function (length) {
  return this.films.every((film) => {
    return film.length > length
  })
}

Cinema.prototype.totalRunTimeOfAllFilms = function () {
  const films = this.films.map(film => film.length);
  let total = films.reduce((runningTotal, film) => {
    return runningTotal + film;
  })
  return total
}



module.exports = Cinema;
