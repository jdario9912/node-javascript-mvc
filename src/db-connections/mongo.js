import mongoose from "mongoose";
import { mongoUri } from "../config.js";

mongoose
  .connect(mongoUri)
  .then(() => console.log("Conectado a mongo"))
  .catch((e) => console.log(e.message));
