const AbstractRepository = require("./AbstractRepository");

class RandoRepository extends AbstractRepository {
  constructor() {
    super({ table: "rando" });
  }

  async create(rando) {
    // console.log(rando);
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (title, location, description, user_id) VALUES (?, ?, ?, ?)`,
      [
        rando.title, // Correction ici
        rando.location, // Correction ici
        rando.description, // Correction ici
        rando.userId, // Correction ici
      ]
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async readByRando(user) {
    const [rows] = await this.database.query(
      `SELECT r.* FROM ${this.table} r INNER JOIN user u ON r.user_id = u.id WHERE u.id = ?`,
      [user]
    );
    return rows;
  }

  // TODO: Implement the update and delete operations
}

module.exports = RandoRepository;
