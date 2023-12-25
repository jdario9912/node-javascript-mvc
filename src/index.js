import app from "./app.js";
import { port } from "./config.js";
import "./db-connections/mongo.js"

app.listen(port, () => console.log(`Servidor corriendo en ${port}`));
