import { createPool } from "mysql2/promise";
import { mysqlConfig } from "../config.js";

export const pool = createPool(mysqlConfig);