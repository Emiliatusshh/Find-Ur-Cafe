const Review = require("../model/review");

async function createReview(req, res) {
  const model = new Review(req.db);

  req.body.gambar_foto = req.file?.filename;
  req.body.author = req.user.first_name + " " + req.user.last_name;

  try {
    const id = await model.create(req.body);
    res.json({ id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getReviews(req, res) {
  const { id } = req.params;
  const model = new Review(req.db);

  try {
    const reviews = await model.getAll(id);
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createReview,
  getReviews,
};
