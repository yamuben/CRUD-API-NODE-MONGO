import express from "express";
import customerRoutes from "./customerRoutes";
import loanRoutes from "./loanRoutes";

const app = express();

app.use("/customer", customerRoutes);
app.use("/loan", loanRoutes);

export default app;
