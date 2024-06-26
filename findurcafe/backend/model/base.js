class Base {
  /**
   * @type {import('mysql2/promise').Connection}
   */
  db = null;

  /**
   * @param {import('mysql2/promise').Connection} connection
   */
  constructor(connection) {
    this.db = connection;
  }
}

module.exports = Base;
