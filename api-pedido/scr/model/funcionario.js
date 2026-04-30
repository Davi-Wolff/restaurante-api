const pool = require("../config/database");

const FuncionarioModel = {
  //GET

  findAll: async () => {
    const { rows } = await pool.query(
      `SELECT * FROM funcionarios ORDER BY id ASC;`,
    );
    return rows;
  },

  findById: async (id) => {
    const { rows } = await pool.query(
      `SELECT FROM funcionarios WHERE funcionarioId = $1;`,
      [id],
    );
    return rows[0] || null; //ainda vou fazer exceptions para não retornar null
  },

  findByName: async (nome) => {
    const { rows } = await pool.query(
      `SELECT FROM funcionarios WHERE funcionarioNome = $1;`,
      [nome],
    );
    return rows[0] || null; //ainda vou fazer exceptions para não retornar null
  },

  findByEmail: async (email) => {
    const { rows } = await pool.query(
      `SELECT FROM funcionarios WHERE funcionarioEmail = $1;`,
      [email],
    );
    return rows[0] || null; //ainda vou fazer exceptions para não retornar null
  },

  findAllByCargo: async (cargo) => {
    const { rows } = await pool.query(
      `SELECT * FROM funcionarios WHERE funcionarioCargo = $1;`,
      [cargo],
    );
    return rows[0] || null; //ainda vou fazer exceptions para não retornar null
  },

  findAllFuncionariosAtivos: async (funcionariosAtivos) => {
    const { rows } = await pool.query(
      `SELECT FROM funcionarios WHERE funcionarioAtivo = $1;`,
      [funcionariosAtivos],
    );
    return rows[0] || null; //ainda vou fazer exceptions para não retornar null
  },
  //POST
  adicionarFuncionario: async (
    funcionarioNome,
    funcionarioEmail,
    funcionarioCargo,
    funcionarioSalario,
  ) => {
    const { rows } = await pool.query(
      `INSERT INTO funcionario (funcionarioNome, funcionarioEmail, funcionarioCargo, funcionarioSalario)
     VALUES ($1, $2, $3, $4)
     RETURNING *;`,
      [funcionarioNome, funcionarioEmail, funcionarioCargo, funcionarioSalario],
    );
    return rows[0] || null; // ainda vou fazer exceptions para não retornar null
  },

  //PUT
  atualizarFuncionario: async (
    funcionarioId,
    funcionarioNome,
    funcionarioEmail,
    funcionarioCargo,
    funcionarioSalario,
  ) => {
    const { rows } = await pool.query(
      `UPDATE funcionario
     SET funcionarioNome = $2,
         funcionarioEmail = $3,
         funcionarioCargo = $4,
         funcionarioSalario = $5
     WHERE funcionarioId = $1
     RETURNING *;`,
      [
        funcionarioId,
        funcionarioNome,
        funcionarioEmail,
        funcionarioCargo,
        funcionarioSalario,
      ],
    );
    return rows[0] || null;
  },

  desativarFuncionario: async (id) => {
    const { rows } = await pool.query(
      `UPDATE funcionario
     SET funcionarioAtivo = FALSE
     WHERE funcionarioId = $1
     RETURNING *;`,
      [id],
    );
    return rows[0] || null;
  },

  //DELETE
  deleteFuncionario: async (id) => {
    const { rows } = await pool.query(
      "DELETE FROM funcionario WHERE funcionarioId = $1;",
      [id],
    );
    return rows[0] || null;
  }, //provavelmente não será usado mas é bom ter
};
