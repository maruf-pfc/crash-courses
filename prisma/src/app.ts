import express, { Application } from "express";

const app: Application = express();

// Middlewares
app.use(express.json());

// Simple route
app.get("/", (req, res) => {
  res.send("Hello from Express + TypeScript!");
});

export default app;
