 O sistema foi construído em um **monorepositório**, com o **backend** em NestJS e o **frontend** em Angular, organizados em pastas distintas.

---

## 📁 Estrutura do Repositório

```
frutaria/
├── backend/       # API em NestJS com Prisma e PostgreSQL
├── frontend/      # Interface web em Angular
└── README.md      # Este arquivo
```

---

## 🛠️ Instruções para Rodar o Projeto

### ✅ Pré-requisitos

- Node.js (v18 ou superior)
- NPM ou Yarn
- Docker (opcional)
- Prisma CLI: `npm install -g prisma`

---

## 🔙 Backend

### 1. Acesse a pasta `backend`

```bash
cd backend
```

### 2. Instale as dependências

```bash
npm install
```

---

### 3. Configuração do Banco de Dados

O projeto oferece duas opções para conectar com o banco de dados:

---

#### 🔹 **Opção 1: Banco de Dados Local com Docker**

1. Certifique-se de ter o Docker instalado e rodando.
2. Crie o arquivo `.env` e insira a seguinte variável:

```env
DATABASE_URL="postgresql://developer:developer-password@localhost:5432/mydb?schema=sample"
```

3. Rode o container PostgreSQL:

```bash
docker compose up
```

---

#### 🔹 **Opção 2: Banco de Dados Remoto no Supabase (Reserva)**

Caso o Docker não esteja disponível no ambiente de avaliação, um banco remoto no Supabase está pronto para uso.

1. Crie o arquivo `.env` e insira as variáveis:

```env
DATABASE_URL="postgresql://postgres.jrahqlokadxweiruulbn:Frutariadev@aws-0-us-east-2.pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres.jrahqlokadxweiruulbn:Frutariadev@aws-0-us-east-2.pooler.supabase.com:5432/postgres"
```

---

### 4. Setup do Prisma e banco de dados

Execute os comandos abaixo:

```bash
npx prisma migrate dev
npx prisma generate
npm run seed
```

---

### 5. Inicie o servidor

```bash
npm run start
```

---

## 🖼️ Frontend

> Instruções de uso do frontend podem ser adicionadas aqui, se necessário.

---

## 🧪 Dados de Teste

O seed do projeto inclui diversas frutas, verduras e vegetais, categorizados por tipo e unidade de medida, com imagens, preços e controle de estoque mínimo, atual e máximo.

---

## 📜 Licença

Este projeto é de uso acadêmico e está licenciado sob os termos MIT.

---

## ✉️ Contato

Desenvolvido por **Nahan Trindade**  
[LinkedIn](https://www.linkedin.com/in/nahantrindade)  
[GitHub](https://github.com/nahant)
