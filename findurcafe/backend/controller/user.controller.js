const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function changePassword(req, res) {
  const model = new User(req.db);
  const user = req.user;

  try {
    if (!req.body.old_password || !req.body.new_password) {
      return res.status(400).json({ message: "Bad request" });
    }

    const match = await bcrypt.compare(req.body.old_password, user.password);

    if (!match) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const salt = await bcrypt.genSalt(12);
    const password = await bcrypt.hash(req.body.new_password, salt);

    const success = await model.update(user.id, {
      password,
      email: user.email,
      name: user.first_name,
    });

    res.json({ data: success });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function getUsers(req, res) {
  const model = new User(req.db);

  try {
    const users = await model.getAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function createUser(req, res) {
  const model = new User(req.db);

  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const id = await model.create(req.body);
    res.json({ id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function updateUser(req, res) {
  const model = new User(req.db);
  const user = req.user;

  try {
    const success = await model.updates(user.id, req.body);
    return res.json({ success });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function login(req, res) {
  const model = new User(req.db);

  try {
    const user = await model.findByEmail(req.body.email);
    const match = await bcrypt.compare(req.body.password, user.password);

    if (!match) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // create a token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "2 days",
    });

    res.json({ token, role: user.role });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getProfileLogined(req, res) {
  const user = req.user;
  delete user.password;

  res.json({ data: user });
}

module.exports = {
  getUsers,
  createUser,
  updateUser,
  login,
  changePassword,
  getProfileLogined,
};
