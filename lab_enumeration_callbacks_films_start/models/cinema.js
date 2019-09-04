const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.filmTitles = function () {
  const titles = this.films.map(film => film.title)
  // console.log(titles);
  return titles;
};


//reckon we will be using a filter method. we could use find (in which case, the test would not include an array. But find only finds one object.)
Cinema.prototype.findByTitle = function (title) {
  return this.films.filter((film => film.title === title)
)
// return foundFilm
};

module.exports = Cinema;
