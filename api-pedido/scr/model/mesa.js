const pool = require("../config/database");

const MesaModel = {
  //GET

  findAll: async () => {
    const { rows } = await pool.query(`SELECT * FROM mesas ORDER BY id ASC;`);
    return rows;
  },

  findById: async (id) => {
    const { rows } = await pool.query(
      `SELECT FROM mesas WHERE mesaId = $1;`,
      [id],
    );
    return rows[0] || null; //ainda vou fazer exceptions para não retornar null
  },

  findByCapacidade: async (id, capacidade) => {
    const { rows } = await pool.query(
      `SELECT * FROM mesas WHERE mesaId = $1 AND capacidade = $2;`,
      [id, capacidade],
    );
    return rows[0] || null; //ainda vou fazer exceptions para não retornar null
  },

  findByStatus: async (id, status) => {
    const { rows } = await pool.query(
      `SELECT * FROM mesas WHERE mesaId = $1 AND status = $2;`,
      [id],
    );
    return rows[0] || null; //ainda vou fazer exceptions para não retornar null
  },

  //POST
  addMesa: async (mesaId,capacidade) => {
    const { rows } = await pool.query(
      `INSERT INTO mesas (mesaId,capacidade) VALUES ($1, $2) RETURNING *;`,
      [mesaId,capacidade],
    );
    return rows[0] || null;
  },

  //PUT
  trocarMesaStatus: async (id, status) => {
    const { rows } = await pool.query(
      "UPDATE mesas SET status = $1 WHERE mesaId = $2;",
      [status, id],
    );
    return rows[0];
  },

  //DELETE
  deleteMesa: async (id) => {
    const { rows } = await pool.query(
      "DELETE FROM mesas WHERE mesaId = $1;",
      [id],
    );
    return rows[0]||null;
  }
};
