import { Router } from "express";
import MoviesController from "../controllers/movies.js";

const router = Router()

router.get("/", MoviesController.getMovies)
router.post("/", MoviesController.createMovie)
router.get("/:id", MoviesController.getMovie)
router.patch("/:id", MoviesController.updateMovie)
router.delete("/:id", MoviesController.deleteMovie)

export default router