const Base = require("./base");

// schema table cafe
// CREATE TABLE cafe (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     nama_cafe VARCHAR(255) NOT NULL,
//     detail_informasi TEXT,
//     deskripsi TEXT,
//     nearby_attraction VARCHAR(255),
//     gambar_foto LONGBLOB,
//     privacy_policy_agreement BOOLEAN NOT NULL
// );

class Cafe extends Base {
  constructor(connection) {
    super(connection);
  }

  async getAll() {
    const [rows] = await this.db.query("SELECT * FROM cafe");
    return rows;
  }

  async findById(id) {
    const [rows] = await this.db.query("SELECT * FROM cafe WHERE id = ?", [id]);

    if (rows.length === 0) {
      throw new Error("Cafe not found");
    }

    return rows[0];
  }

  async create(data) {
    const [result] = await this.db.query(
      "INSERT INTO cafe (nama_cafe, detail_informasi, deskripsi, nearby_attraction, gambar_foto) VALUES (?, ?, ?, ?, ?)",
      [
        data.nama_cafe,
        data.detail_informasi,
        data.deskripsi,
        data.nearby_attraction,
        data.gambar_foto,
      ]
    );
    return result.insertId;
  }

  async update(id, data) {
    const updatedFoto = data.gambar_foto ? true : false;

    let parameters = [
      data.nama_cafe,
      data.detail_informasi,
      data.deskripsi,
      data.nearby_attraction,
    ];

    if (updatedFoto) {
      parameters[4] = data.gambar_foto;
      parameters[5] = id;
    } else {
      parameters[4] = id;
    }

    const [result] = await this.db.query(
      `UPDATE cafe SET nama_cafe = ?, detail_informasi = ?, deskripsi = ?, nearby_attraction = ? ${
        updatedFoto ? ", gambar_foto = ?" : ""
      } WHERE id = ?`,
      parameters
    );
    return result.affectedRows > 0;
  }

  async delete(id) {
    const [result] = await this.db.query("DELETE FROM cafe WHERE id = ?", [id]);
    return result.affectedRows > 0;
  }
}

module.exports = Cafe;
