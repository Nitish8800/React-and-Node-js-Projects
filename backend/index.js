const express = require("express");
const connectDB = require("./db/index.js");
const app = express();

connectDB();
app.use(express.json());

app.get("/", async (req, resp) => {
  resp.send("api is running");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server is running on " + port);
});
