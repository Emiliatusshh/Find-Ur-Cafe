const Base = require("./base");

class User extends Base {
  constructor(connection) {
    super(connection);
  }

  async getAll() {
    const [rows] = await this.db.query("SELECT * FROM users");
    return rows;
  }

  async findById(id) {
    const [rows] = await this.db.query("SELECT * FROM users WHERE id = ?", [
      id,
    ]);

    if (rows.length === 0) {
      throw new Error("User not found");
    }

    return rows[0];
  }

  async findByEmail(email) {
    const [rows] = await this.db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    if (rows.length === 0) {
      throw new Error("User not found");
    }

    return rows[0];
  }

  async create(data) {
    const [result] = await this.db.query(
      "INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)",
      [data.first_name, data.last_name, data.email, data.password]
    );
    return result.insertId;
  }

  async update(id, data) {
    const [result] = await this.db.query(
      "UPDATE users SET first_name = ?, email = ?, password = ? WHERE id = ?",
      [data.name, data.email, data.password, id]
    );
    return result.affectedRows > 0;
  }

  async updates(id, data) {
    const [result] = await this.db.query(
      "UPDATE users SET first_name = ?, last_name = ?, email = ?, phone_number = ?, gender = ? WHERE id = ?",
      [
        data.first_name,
        data.last_name,
        data.email,
        data.phone_number,
        data.gender,
        id,
      ]
    );
    return result.affectedRows > 0;
  }

  async delete(id) {
    const [result] = await this.db.query("DELETE FROM users WHERE id = ?", [
      id,
    ]);
    return result.affectedRows > 0;
  }
}

module.exports = User;
