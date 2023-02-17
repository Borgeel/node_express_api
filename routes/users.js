import express from "express";

const router = express.Router();

const users = [
  {
    firstName: "Irfan",
    lastName: "Cesir",
    age: 28,
  },
  {
    firstName: "Zana",
    lastName: "Garaplija",
    age: 24,
  },
  {
    firstName: "Faruk",
    lastName: "Mustafic",
    age: 27,
  },
];

router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});

router.post("/", (req, res) => {
  console.log("POST ROUTE REACHED");

  res.send("POST ROUTE REACHED");
});

export default router;
