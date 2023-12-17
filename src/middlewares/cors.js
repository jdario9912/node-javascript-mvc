import cors from "cors";

const accepted_origins = ["http://localhost:5743", "https://frutitech.com"];

export const corsMiddleware = ({ acceptedOrigins = accepted_origins } = {}) =>
  cors({
    origin: (origin, callback) => {
      if (acceptedOrigins.includes(origin)) return callback(null, true);

      if (!origin) return callback(null, true);

      return callback(new Error("Not allowed by CORS"));
    },
  });
