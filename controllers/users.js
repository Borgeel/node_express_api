import { v4 as uuidv4 } from "uuid";

export const createUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`User with the name ${user.firstName} added to DB`);
};

export const getUser = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id != id);

  res.send(`User with the id ${id} deleted from the DB`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const targetUser = users.find((user) => user.id === id);

  if (firstName) targetUser.firstName = firstName;
  if (lastName) targetUser.lastName = lastName;
  if (age) targetUser.age = age;

  res.send(`User with the id  ${id} has been updated`);
};
