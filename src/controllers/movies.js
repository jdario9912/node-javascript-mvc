export default class MoviesController {
  static getMovies(req, res) {
    return res.json('Gettin all movies')
  }

  static patchMovie(){
    // para las validaciones con zod se agrega el metodo parcial
    // permite validar los campos definidos si es que estan presentes en la req
  }
}