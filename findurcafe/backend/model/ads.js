const Base = require("./base");

// const [rows] = await this.db.query("SELECT * FROM cafe");
//     return rows;

class Ads extends Base {
  constructor(db) {
    super(db, "ads");
  }

  async getAll() {
    const [rows] = await this.db.query("SELECT * FROM ads");
    return rows;
  }

  async create(data) {
    const result = await this.db.query(
      "INSERT INTO ads (mitra, detail, gambar_foto) VALUES (?,?,?)",
      [data.mitra, data.detail, data.gambar_foto]
    );
    return result.insertedId;
  }
}

module.exports = Ads;
