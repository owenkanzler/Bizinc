const express = require("express");

const app = express();
const PORT = 3001;

app.use(express.static("public"));

app.get("/message", (req, res) => res.json({ message: "Hello, World!" }));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
