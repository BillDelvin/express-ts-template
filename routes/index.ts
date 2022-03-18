import express from "express";
import employeeRoutes from "./auth/employee";
import visitorRoutes from "./auth/visitor";

const app = express();
const api = "/api/v1";

app.use(api, employeeRoutes);
app.use(api, visitorRoutes);

export default app;
