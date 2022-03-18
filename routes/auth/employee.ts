import express = require("express");
import { registerEmployee } from "../../controllers/auth/employee";

const routes = express();

routes.post("/employee/login", registerEmployee);

export default routes;
