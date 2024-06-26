const Cafe = require("../model/cafe");

async function getCafes(req, res) {
  const model = new Cafe(req.db);

  try {
    const cafes = await model.getAll();
    res.json(cafes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getCafe(req, res) {
  const model = new Cafe(req.db);

  try {
    const cafe = await model.findById(req.params.id);
    res.json(cafe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function createCafe(req, res) {
  const model = new Cafe(req.db);

  req.body.gambar_foto = req.file?.filename;

  try {
    const id = await model.create(req.body);
    res.json({ id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function updateCafe(req, res) {
  const model = new Cafe(req.db);

  if (req.file?.filename) {
    req.body.gambar_foto = req.file?.filename;
  }

  try {
    const success = await model.update(req.params.id, req.body);
    return res.json({ success });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deleteCafe(req, res) {
  const model = new Cafe(req.db);

  try {
    const success = await model.delete(req.params.id);
    return res.json({ success });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getCafes,
  getCafe,
  createCafe,
  updateCafe,
  deleteCafe,
};
