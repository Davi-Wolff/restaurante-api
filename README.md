# 🍽️ Sistema de Restaurante — Restaurant Management System

> 🇧🇷 Português abaixo · 🇺🇸 English below

---

## 🇧🇷 Português

### Sobre o projeto

Este é um sistema completo de gerenciamento de restaurante desenvolvido como projeto de aprendizado full-stack. O objetivo é construir uma aplicação real, com múltiplas tecnologias se comunicando, cobrindo desde o pedido do cliente até o controle de estoque na cozinha.

O projeto nasceu da vontade de aprender fazendo — não apenas seguir tutoriais isolados, mas construir algo funcional do zero, enfrentando os problemas reais que aparecem quando sistemas precisam se integrar.

### O que o sistema faz

O cliente escaneia um QR code na mesa, acessa o cardápio pelo celular e faz o pedido diretamente. O garçom acompanha os pedidos em tempo real pelo app. O caixa visualiza e fecha as contas. O estoque é debitado automaticamente a cada pedido confirmado.

### Tecnologias utilizadas

**Backend de pedidos** — Node.js com Express, responsável pelo cardápio, mesas, pedidos e comunicação em tempo real via WebSocket.

**Backend de estoque** — Spring Boot com Java, responsável pelo controle de ingredientes, débito automático e relatórios. Utiliza JPA/Hibernate para as operações no banco e lock otimista para evitar condições de corrida.

**Frontends** — React Web para o cardápio virtual (acessado via QR code) e para o painel do caixa. React Native com Expo para o app do garçom.

**Infraestrutura** — PostgreSQL como banco de dados principal (dois schemas: `pedidos` e `estoque`), Redis para cache do cardápio e pub-sub, RabbitMQ para comunicação assíncrona entre os dois backends.

### Conceitos praticados

- Arquitetura de microsserviços com duas linguagens diferentes se comunicando
- Comunicação assíncrona via message broker (RabbitMQ / AMQP)
- WebSocket para atualizações em tempo real
- Controle de concorrência: lock otimista, semáforos e prevenção de deadlocks
- Cache com TTL usando Redis
- Separação de responsabilidades entre serviços
- Containerização com Docker e Docker Compose

### Como rodar localmente

**Pré-requisitos:** Docker Desktop, Node.js LTS e Java 17+.

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/restaurante.git
cd restaurante

# Sobe toda a infraestrutura (banco, Redis, RabbitMQ)
docker compose up -d

# Instala dependências e inicia a API de pedidos
cd api-pedidos
npm install
npm run dev

# Em outro terminal, inicia a API de estoque
cd api-estoque
./mvnw spring-boot:run
```

Acesse o cardápio em `http://localhost:5173` e a API em `http://localhost:3000`.

Consulte o `.env.example` de cada serviço para configurar as variáveis de ambiente.

### Status do projeto

🚧 Em desenvolvimento — projeto de aprendizado em andamento.

---

## 🇺🇸 English

### About the project

This is a full-stack restaurant management system built as a learning project. The goal is to build a real-world application using multiple technologies working together — covering everything from customer orders to kitchen inventory control.

The project was born from the desire to learn by doing — not just following isolated tutorials, but building something functional from scratch while facing the real challenges that arise when systems need to integrate with each other.

### What the system does

Customers scan a QR code at their table, browse the menu on their phone, and place orders directly. Waitstaff monitor orders in real time through the app. The cashier views and closes bills. Inventory is automatically updated with every confirmed order.

### Technologies used

**Orders backend** — Node.js with Express, responsible for the menu, tables, orders, and real-time communication via WebSocket.

**Inventory backend** — Spring Boot with Java, responsible for ingredient control, automatic stock deduction, and reporting. Uses JPA/Hibernate for database operations and optimistic locking to prevent race conditions.

**Frontends** — React Web for the virtual menu (accessed via QR code) and the cashier dashboard. React Native with Expo for the waiter app.

**Infrastructure** — PostgreSQL as the main database (two schemas: `orders` and `inventory`), Redis for menu caching and pub-sub, RabbitMQ for asynchronous communication between the two backends.

### Concepts practiced

- Microservices architecture with two different languages communicating
- Asynchronous messaging via message broker (RabbitMQ / AMQP)
- WebSocket for real-time updates
- Concurrency control: optimistic locking, semaphores, and deadlock prevention
- TTL-based caching with Redis
- Separation of concerns between services
- Containerization with Docker and Docker Compose

### Running locally

**Prerequisites:** Docker Desktop, Node.js LTS, and Java 17+.

```bash
# Clone the repository
git clone https://github.com/your-username/restaurante.git
cd restaurante

# Start all infrastructure (database, Redis, RabbitMQ)
docker compose up -d

# Install dependencies and start the orders API
cd api-pedidos
npm install
npm run dev

# In another terminal, start the inventory API
cd api-estoque
./mvnw spring-boot:run
```

Access the menu at `http://localhost:5173` and the API at `http://localhost:3000`.

Check the `.env.example` file in each service to configure environment variables.

### Project status

🚧 Under development — ongoing learning project.