const pool = require("../config/database");

const ProdutoModel = {
  //GET

  findAll: async () => {
    const { rows } = await pool.query(`SELECT * FROM produtos ORDER BY ASC;`);
    return rows;
  },

  findById: async (id) => {
    const { rows } = await pool.query(`SELECT * FROM produtos WHERE id = $1;`, [
      id,
    ]);
    return rows[0] || null; //ainda vou fazer exceptions para não retornar null
  },

  findByName: async (nome) => {
    const { rows } = await pool.query(
      `SELECT * FROM produtos WHERE nomeProduto = $1;`,
      [nome],
    );
    return rows[0] || null; //ainda vou fazer exceptions para não retornar null
  },

  findAllActives: async () => {
    const { rows } = await pool.query(
      `SELECT * FROM produtos WHERE ativo = 1;`,
    );
    return rows;
  },

  findByCategory: async (idCategoria) => {
    const { rows } = await pool.query(`SELECT * FROM produtos WHERE categoriaId = $1;`,[idCategoria]);
    return rows;
  },

  //POST

  createNewProduct: async ({nome, idCategoria, descricao, preco}) => {
    const {rows} = await pool.query(`INSERT INTO produtos (nome, idCategoria, descricao, preco) VALUES ($1, $2, $3, $4) RETURNING *;`,[nome, idCategoria, descricao, preco]);
    return rows[0];
  },

  //PUT

  updateProduto: async (id,{nome, idCategoria, descricao, preco}) => {
    const { rows } = await pool.query("");
    return rows;
  },

  update: async (id, { nome, idCategoria, descricao, preco }) => {
    const fields = [];
    const values = [];
    let index = 1;

    if (nome        !== undefined) { fields.push(`nome = $${index++}`);         values.push(nome); }
    if (idCategoria !== undefined) { fields.push(`id_categoria = $${index++}`); values.push(idCategoria); }
    if (descricao   !== undefined) { fields.push(`descricao = $${index++}`);    values.push(descricao); }
    if (preco       !== undefined) { fields.push(`preco = $${index++}`);        values.push(preco); }

    // Nada para atualizar
    if (fields.length === 0) return null;

    values.push(id); // último parâmetro é sempre o id

    const query = `
      UPDATE produtos
         SET ${fields.join(", ")}
       WHERE id = $${index}
      RETURNING *
    `;

    const { rows } = await pool.query(query, values);
    return rows[0] || null;
  },

  //DELETE (improvavel de ser usado, mas é bom ter)
};
