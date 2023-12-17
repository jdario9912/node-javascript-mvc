import { Router } from "express";
import MoviesController from "../controllers/movies.js";

const router = Router()

router.get("/", MoviesController.getMovies)
router.post("/")
router.get("/:id")
router.patch("/:id")
router.delete("/:id")

export default router