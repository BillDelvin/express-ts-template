import { createPool } from "mysql2";
import "dotenv/config";

export const connectionDB = createPool({
  host: `${process.env.DBHOST}`,
  user: `${process.env.DBUSER}`,
  database: `${process.env.DB}`,
  password: `${process.env.DBPASSWORD}`,
  multipleStatements: true,
  waitForConnections: true,
  connectionLimit: 99,
  queueLimit: 0,
});
