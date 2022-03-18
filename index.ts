import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import http from "http";
import passport from "passport";
import routes from "./routes";

const app = express();
const PORT = 8000;
const server = http.createServer(app);

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.get("/", (_, res) => res.send("Server running"));
app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(routes);

server.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
