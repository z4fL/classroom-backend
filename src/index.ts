import express from "express";
import { toNodeHandler } from "better-auth/node";
import subjectsRouter from "./routes/subjects";
import cors from "cors";
import securityMiddleware from "./middleware/security";
import { auth } from "./lib/auth";

const app = express();
const PORT = 8000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.all('/api/auth/*splat', toNodeHandler(auth));

app.use(express.json());

app.use(securityMiddleware)

app.use("/api/subjects", subjectsRouter);

app.get("/", (req, res) => {
  // res.json({ message: "Classroom API is running" });
  res.send("Hello, welcome to the Classroom API!");
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
