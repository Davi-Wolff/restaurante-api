CREATE TABLE categoria(
    categoriaId SERIAL PRIMARY KEY,
    nomeCategoria VARCHAR(20) NOT NULL
);

CREATE TABLE produto(
    produtoId SERIAL PRIMARY KEY,
    nomeProduto VARCHAR(45) NOT NULL,
    categoriaId INT,
    descricao VARCHAR(150),
    preco DECIMAL(10,2) NOT NULL,
    CONSTRAINT fk_categoria FOREIGN KEY (categoriaId) REFERENCES categoria(categoriaId)
);

CREATE TABLE funcionario(
    funcionarioId SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    cargo VARCHAR(20) NOT NULL,
    ativo BOOLEAN DEFAULT TRUE,
    salario DECIMAL(10,2)
);

CREATE TABLE mesa(
    mesaId SERIAL PRIMARY KEY,
    capacidade SMALLINT,
    status CHAR(1) DEFAULT 'L'
);

CREATE TABLE pedido(
    pedidoId SERIAL PRIMARY KEY,
    funcionarioId INT,
    mesaId INT,
    dataHora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20),
    observacao VARCHAR(50),
    total DECIMAL(10,2) DEFAULT 0.00,
    FOREIGN KEY (funcionarioId) REFERENCES funcionario(funcionarioId),
    FOREIGN KEY (mesaId) REFERENCES mesa(mesaId)
);

CREATE TABLE item_pedido(
    pedidoId INT,
    produtoId INT,
    quantidade INT NOT NULL,
    preco_unitario DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (pedidoId, produtoId),
    FOREIGN KEY (pedidoId) REFERENCES pedido(pedidoId),
    FOREIGN KEY (produtoId) REFERENCES produto(produtoId)
);

CREATE TABLE pagamento(
    pagamentoId SERIAL PRIMARY KEY,
    pedidoId INT,
    metodo VARCHAR(20),
    valor DECIMAL(10,2),
    dataHora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (pedidoId) REFERENCES pedido(pedidoId)
);