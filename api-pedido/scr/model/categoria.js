const pool = require("../config/database");

const CategoriaModel = {
  //GET

  findAll: async () => {
    const { rows } = await pool.query(`SELECT * FROM categoria ORDER BY id ASC;`);
    return rows;
  },

  findById: async (id) => {
    const { rows } = await pool.query(
      `SELECT FROM categoria WHERE categoriaId = $1;`,
      [id],
    );
    return rows[0] || null; //ainda vou fazer exceptions para não retornar null
  },

  findByNameCategory: async (nome) => {
    const { rows } = await pool.query(
      `SELECT FROM categoria WHERE nomeCategoria = $1;`,
      [nome],
    );
    return rows[0] || null; //ainda vou fazer exceptions para não retornar null
  },

  //POST
    addCategoria: async (nomeCategoria) => {
  const { rows } = await pool.query(
    `INSERT INTO categoria (nomeCategoria) VALUES ($1) RETURNING *;`,
    [nomeCategoria],
  );
  return rows[0] || null;
},

  //PUT

  mudarCategoria: async (id,nomeCategoria) => {
  const { rows } = await pool.query(
    "UPDATE categoria SET nomeCategoria = $1 WHERE categoriaId = $2;",
    [nomeCategoria,id],
  );
  return rows[0] || null;
},

  //DELETE
  deleteCategoria: async (id) => {
    const { rows } = await pool.query(
      "DELETE FROM categoria WHERE categoriaId = $1;",
      [id],
    );
    return rows[0]||null;
  }
};
