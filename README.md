ProFin - Plataforma de Controle Financeiro Pessoal
1. Apresentação

Bem-vindo ao repositório do projeto ProFin. Este projeto é uma entrega do MBA DevXpert Full Stack .NET e é referente ao módulo 2. O objetivo principal desenvolver uma plataforma de controle financeiro pessoal que permite aos usuários gerenciar suas finanças e controlar seus gastos, tanto através de uma interface web utilizando Angular versão 19.1.0 quanto através de uma API RESTful.

Autores
    Breno Francisco Morais
    Caio Gustavo Rodrigues Silva
    Fabiano Marcolin Maciel
    Luis Felipe da Silva Sousa
    Marcelo Costa
    Thiago Albuquerque Severo    

2. Proposta do Projeto

O projeto consiste em:

    A Plataforma de Controle Financeiro Pessoal é uma aplicação web full-stack projetada para ajudar usuários a gerenciar suas finanças de forma eficiente e organizada. A solução deve oferecer um painel integrado para registro de transações financeiras, relatórios interativos, e ferramentas de planejamento financeiro, garantindo segurança, usabilidade e escalabilidade.
    O sistema será dividido em três camadas principais:
        1. Frontend (Interface do Usuário): Desenvolvido em Angular ou Blazor para criar uma SPA (Single Page Application) responsiva e interativa.
        2. Backend (API RESTful): Desenvolvido com ASP.NET Core WebAPI,responsável pelo processamento de dados e lógica de negócios.
        3. Banco de Dados: SQL Server ou SQLITE com EF Core para persistência e gerenciamento de dados.

3. Tecnologias Utilizadas

    Linguagem de Programação: C#
    Frameworks:
        ASP.NET Core Web API versão net8.0
        Entity Framework Core versão ^8.0.10
        Angular ^19.1.0
    Banco de Dados: SQL Server e SQLITE
    Autenticação e Autorização:
        ASP.NET Core Identity
        JWT (JSON Web Token) para autenticação na API
    Front-end:        
        Angular ^19.1.0
        TypeScript
    Documentação da API: Swagger

4. Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

    src/
        BlogMBA.MVC/ - Projeto MVC
        BlogMBA.API/ - API RESTful
        BlogMBA.Business/ - Modelos de Dados e Notificações
        BlogMBA.Data/ - Contexto de banco de dados da aplicação e Repositório
    README.md - Arquivo de Documentação do Projeto
    FEEDBACK.md - Arquivo para Consolidação dos Feedbacks
    .gitignore - Arquivo de Ignoração do Git

5. Funcionalidades Implementadas

    1. Cadastro e Autenticação de Usuários
        • Cadastro de Usuários:
            - Permite registro de novos usuários com dados como nome, e-mail,
        senha.
            - Validação de campos obrigatórios com feedback claro ao usuário.
        • Autenticação:
            - Implementação de login seguro utilizando ASP.NET Core Identity e JWT.
            - Sessões protegidas com expiração configurável do token JWT.

    2. Gerenciamento de Transações
        • Registro de Transações:
            - Adicionar transações com dados como valor, descrição, categoria, tipo (entrada/saída)
            - Permitir edição e exclusão de transações.
        • Filtro e Busca de Transações:
            - Implementar filtros por data, categoria e tipo.
    3. Gestão de Categorias
        • Categorias:
            - CRUD completo para categorias de transações financeiras.
            - Categorias padrão criadas automaticamente (ex.: Alimentação,
        Transporte).                
    4. Relatórios e Dashboards
        • Relatórios Interativos:
            - Geração de relatórios financeiros detalhados por categoria e
        período.

6. Como Executar o Projeto
Pré-requisitos
    .NET SDK 8.0 ou superior
    SQL Server ou SQLITE    
    Visual Studio 2022 ou superior (ou qualquer IDE de sua preferência)
    Git para executar API
    Visual Studio Code
    NodeJs versão 16 ou superior
    Angular ^19.1.0

Passos para Execução

    Clone o Repositório:
        git clone https://github.com/ProfinProject/ProFin.git
        cd https://github.com/ProfinProject/ProFin.git

    Configuração do Banco de Dados:
        No arquivo appsettings.json, configure a string de conexão do SQL Server.
        Rode o projeto para que a configuração do Seed crie o banco e popule com os dados básicos, atente-se ao passar por referência qual banco você deseja utilizar, SQLSERVER ou SQLITE, 

    Executar a Aplicação WEB API:
        cd src/Back-End/ProFin.API/
        "dotnet run"
        Acesse a aplicação em: http://localhost:5005 ou https://localhost:7092 caso queira usar com camada https.

    Executar a aplicação angular:
        - Vá até o diretório cd src/Front-End/ProFin.App no prompt de comando.
        - Execute o comando "code ." [A pasta será aberta no Visual Studio Code].
        - Vá até o terminal através do atalho "ctrl + '" e digite
        o comando "npm i" ou "npm install", dessa forma o node irá instalar todos os pacotes necessários para a execução do projeto Angular.
        - Após concluir o processo, ainda no terminal, digite o comando, "ng server" ou "ng s".        

7. Instruções de Configuração

    JWT para API: As chaves de configuração do JWT estão no appsettings.json.
    Migrações do Banco de Dados: As migrações são gerenciadas pelo Entity Framework Core. Não é necessário aplicar devido a configuração do Seed de dados.

8. Documentação da API

A documentação da API está disponível através do Swagger. Após iniciar a API, acesse a documentação em:

http://localhost:5005/swagger
9. Avaliação

    Este projeto é parte de um curso acadêmico e não aceita contribuições externas.
    Para feedbacks ou dúvidas utilize o recurso de Issues
    O arquivo FEEDBACK.md é um resumo das avaliações do instrutor e deverá ser modificado apenas por ele.
