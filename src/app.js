import express from "express";
import homeRouter from "./routers/home.js";
import moviesRouter from "./routers/movies.js";
import { corsMiddleware } from "./middlewares/cors.js";

const app = express();

app.use(express.json());

app.use(corsMiddleware());

app.disable("x-powered-by");

app.use(homeRouter);
app.use("/api/movies", moviesRouter);

export default app;
