import { Schema, model } from "mongoose";

// este schema se va a usar en models/mongo/movies.js para realizar operaciones en la db
const MovieSchema = new Schema({
  id: String,
});
