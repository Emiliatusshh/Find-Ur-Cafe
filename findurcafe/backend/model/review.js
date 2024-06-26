const Base = require("./base");

class Review extends Base {
  constructor(db) {
    super(db, "reviews");
  }

  async getAll(id) {
    const [rows] = await this.db.query(
      "SELECT * FROM reviews WHERE cafe_id = ?",
      [id]
    );
    return rows;
  }

  async create(data) {
    const result = await this.db.query(
      "INSERT INTO reviews (cafe_id, author, rate, content, gambar_foto) VALUES (?,?,?,?,?)",
      [data.cafe_id, data.author, data.rate, data.content, data.gambar_foto]
    );
    return result.insertedId;
  }
}

module.exports = Review;
