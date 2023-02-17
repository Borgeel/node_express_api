import express from "express";
// Allows us to take in incoming post request bodies
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

// Implies that we will use json data in our whole application
app.use(bodyParser.json());

app.use("/users", usersRoutes);

// Creating first route
app.get("/", (req, res) => res.send("Hello from Homepage"));

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
