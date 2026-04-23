CREATE TABLE produto(
	produtoId INT UNIQUE PRIMARY KEY,
	nomeProduto VARCHAR(45),
	categoriaId Long FOREIGN KEY,
	descricao VARCHAR(150),
	preco DECIMAL
)

CREATE TABLE categoria(
	categoriaId INT UNIQUE PRIMARY KEY,
	nomeCategoria VARCHAR(20),
)

CREATE TABLE funcionario(
	funcionarioId INT UNIQUE PRIMARY KEY,
	funcionarioNome VARCHAR(100),
	funcionarioEmail VARCHAR(100),
	funcionarioAtivo Boolean,
	salario DECIMAL,
)

CREATE TABLE mesas(
	mesaId SMALLINT PRIMARY KEY,
	mesaTamanho SMALLINT,
)

CREATE TABLE pedido(
	pedidoId  INT PRIMARY KEY,
	funcionarioId INT FOREIGN KEY,
	pedidoData DATE,
	pedidoHorario TIME,
	
)

CREATE JOIN TABLE produtoCategoria(
	produtoId INT FOREIGN KEY,
	categoriaId INT FOREIGN KEY,
)
CREATE JOIN TABLE pedidoFuncionario(
	funcionarioId INT FOREIGN KEY,
	pedidoId INT FOREIGN KEY,
)

CREATE JOIN TABLE pedidoMesa(
	mesaId INT FOREIGN KEY,
	pedidoId INT FOREIGN KEY,
)
