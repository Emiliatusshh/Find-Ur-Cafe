const jwt = require("jsonwebtoken");

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {*} next
 * @returns
 */
async function authorize(req, res, next) {
  const token = req.headers.authorization?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const [user] = await req.db.query(
      "SELECT * FROM users WHERE id = ?",
      payload.id
    );

    if (user.length === 0) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.user = user[0];
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
}

module.exports = authorize;
