import express = require("express");
import { registerVisitor } from "../../controllers/auth/visitor";

const routes = express();

routes.post("/visitor/login", registerVisitor);

export default routes;
