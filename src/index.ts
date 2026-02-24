import express from "express";

const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/", (req, res) => {
  // res.json({ message: "Classroom API is running" });
  res.send('Hello, welcome to the Classroom API!');
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
