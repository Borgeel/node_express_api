import express from "express";

import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

let users = [];

router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});

router.post("/", createUser);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
