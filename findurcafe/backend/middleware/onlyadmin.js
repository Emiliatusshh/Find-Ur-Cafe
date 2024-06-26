async function onlyAdmin(req, res, next) {
  if (req.user.role > 0) {
    return res.status(403).json({ message: "Forbidden" });
  }

  next();
}

module.exports = onlyAdmin;
