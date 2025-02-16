# 🏦 ProFin - Plataforma de Controle Financeiro Pessoal

Bem-vindo ao **ProFin**, um projeto desenvolvido no **MBA DevXpert Full Stack .NET** para o módulo 2. O **ProFin** é uma solução inovadora para gerenciamento financeiro pessoal, permitindo que os usuários acompanhem seus gastos e receitas de maneira intuitiva através de uma aplicação web moderna e uma API RESTful robusta.

## 🚀 Sobre o Projeto

A plataforma foi criada para proporcionar uma experiência fluida e segura no controle financeiro, oferecendo:

- **Registro e categorização de transações** 💰
- **Painel interativo com relatórios financeiros** 📊
- **Autenticação segura via JWT** 🔒
- **Filtros avançados para melhor gestão dos gastos** 🔍

## 👥 Equipe de Desenvolvimento

- **Breno Francisco Morais**
- **Caio Gustavo Rodrigues Silva**
- **Fabiano Marcolin Maciel**
- **Luis Felipe da Silva Sousa**
- **Marcelo Costa**
- **Thiago Albuquerque Severo**

## 🛠️ Tecnologias Utilizadas

### **Back-End:**

- **C#**
- **ASP.NET Core Web API (.NET 8.0)**
- **Entity Framework Core (EF Core 8.0.10)**
- **SQL Server / SQLite**
- **ASP.NET Core Identity + JWT**

### **Front-End:**

- **Angular 19.1.0**
- **TypeScript**
- **Bootstrap para UI responsiva**

### **Documentação:**

- **Swagger** 📄

## 📂 Estrutura do Projeto

```plaintext
src/Back-End 
 ├── ProFin.API/      # API RESTful
 ├── ProFin.Core/     # Regras de negócio e validações
 ├── ProFin.Data/     # Banco de dados e repositórios
 ├── ProFin.Identity/ # Login e autenticação do usuário
README.md             # Documentação do projeto
FEEDBACK.md           # Consolidação de feedbacks
.gitignore            # Configuração do Git
------------------------------------------------------------
src/Front-End/ProFin.App
 ├── ProFin.App/src # Arquivos fontes para execução do projeto
```

## 🎯 Funcionalidades Principais

✅ **Cadastro e Autenticação de Usuários**

- Registro de novos usuários com validação
- Login seguro via **ASP.NET Core Identity** e **JWT**

✅ **Gerenciamento de Transações**

- Adicionar, editar e excluir transações financeiras
- Filtros por data, categoria e tipo (entrada/saída)

✅ **Gestão de Categorias**

- CRUD completo para categorias de transações financeiras
- Criação automática de categorias padrão (Ex: Alimentação, Transporte)

✅ **Relatórios e Dashboards**

- Relatórios interativos detalhados por categoria e período

## ▶️ Como Executar o Projeto

### 📌 **Pré-requisitos**

- **.NET SDK 8.0** ou superior
- **SQL Server** ou **SQLite**
- **Visual Studio 2022** ou **VS Code**
- **Node.js 16+** e **Angular CLI**
- **Git**

### 💻 **Passos para Execução**

1️⃣ **Clone o Repositório:**

```sh
git clone https://github.com/ProfinProject/ProFin.git
cd ProFin
```

2️⃣ **Configuração do Banco de Dados:**

- No arquivo `appsettings.json`, configure a **string de conexão** para SQL Server ou SQLite.
- Execute o projeto para que a **configuração do Seed** crie e popule o banco automaticamente.

3️⃣ **Executar a API (.NET 8.0):**

```sh
cd src/Back-End/ProFin.API/
dotnet run
```

📌 Acesse a API em: [http://localhost:5005](http://localhost:5005) ou [https://localhost:7092](https://localhost:7092) (HTTPS).

4️⃣ **Executar a aplicação Angular:**

```sh
cd src/Front-End/ProFin.App
code .  # Abre no VS Code
npm install  # Instala as dependências
ng serve  # Inicia o servidor
```

📌 Acesse o front-end em: [http://localhost:4200](http://localhost:4200)

## 🔑 Configuração de Segurança

- **Autenticação JWT:** Configurada no `appsettings.json`.
- **Migração do Banco:** Gerenciada pelo **EF Core**, com Seed de dados automático.

## 📜 Documentação da API

A API está documentada via **Swagger**:
📌 Acesse em: [http://localhost:5005/swagger](http://localhost:5005/swagger)

## 📌 Considerações Finais

Este projeto faz parte de um curso acadêmico e **não aceita contribuições externas**.
Para dúvidas ou feedbacks, utilize a aba **Issues** do repositório.
O arquivo **FEEDBACK.md** contém avaliações do instrutor e deve ser modificado apenas por ele.

🚀 **Gostou do projeto? Deixe uma estrela ⭐ no repositório!**

---

🔗 **Conecte-se com a equipe no LinkedIn!**
\#dotnet #angular #fullstack #finanças #profin #webdevelopment

