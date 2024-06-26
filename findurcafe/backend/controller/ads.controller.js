const Ads = require("../model/ads");

async function createAds(req, res) {
  const model = new Ads(req.db);

  req.body.gambar_foto = req.file?.filename;

  console.log(req.body);

  try {
    const id = await model.create(req.body);
    res.json({ id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getAds(req, res) {
  const model = new Ads(req.db);

  try {
    const ads = await model.getAll();
    res.json(ads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createAds,
  getAds,
};
