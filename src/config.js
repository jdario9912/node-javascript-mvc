import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT ?? 3100;
const mysqlConfig = {
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 100,
  queueLimit: 0,
};

const mongoUri = process.env.MONGO_URI

export { port, mysqlConfig, mongoUri };
