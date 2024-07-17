const AbstractRepository = require("./AbstractRepository");

class RandoRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "Recipe" as configuration
    super({ table: "rando" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all rows from the "rows" table
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    // Return the array of rows
    return rows;
  }
}
module.exports = RandoRepository;
