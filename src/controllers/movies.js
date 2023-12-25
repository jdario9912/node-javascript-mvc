// aca se deberian importar los modelos de mongo o mysql
// import MovieModel from "../models/mongo/movies.js";
// import MovieModel from "../models/mysql/movies.js";

export default class MoviesController {
  static getMovies(req, res) {
    return res.json("Getting all movies");
  }

  static getMovie(req, res) {
    return res.json("Getting movie");
  }

  static createMovie(req, res) {
    return res.json("Creating movie");
  }

  static deleteMovie(req, res) {
    return res.json("Deleting movie");
  }

  static updateMovie() {
    // para las validaciones con zod se agrega el metodo parcial
    // permite validar los campos definidos si es que estan presentes en la req
    return res.json("Updating movie");
  }
}
