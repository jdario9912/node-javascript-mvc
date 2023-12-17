import express from "express";
import homeRouter from "./routers/home.js";
import moviesRouter from "./routers/movies.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: (origin, callback) => {
      const accepted_origins = [
        "http://localhost:5743",
        "https://frutitech.com",
      ];

      if (accepted_origins.includes(origin)) return callback(null, true);

      if (!origin) return callback(null, true);

      return callback(new Error("Not allowed by CORS"));
    },
  })
);

app.disable("x-powered-by");

app.use(homeRouter);
app.use("/api/movies", moviesRouter);

export default app;
