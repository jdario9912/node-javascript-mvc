import { Router } from "express";
import * as controller from "../controllers/home.js";

const router = Router();

router.get("/", controller.homeController);

export default router;
