# **Feedback 1a Entrega - Avaliação Geral e Recomendações**

## Front End

### Navegação

- Navegação simples.

### Design

- Design muito simples.

### Funcionalidade

- Não testada devido não funcionamento da API

## Back End

### Arquitetura

- Não cobriu um requisito básico de rodar em development com SQLite
- Não vejo necessidade para uma camada de Identity isolada (pode ser na API)

### Funcionalidade

- Não testado, aplicação não roda local

### Modelagem

- Modelagem basica, porém adequada, validações, mapeamento.

## Projeto

### Organização

- Não deveria manter o projeto SPA dentro da estrutura do projeto Server use uma pasta raiz “src” e duas subpastas “front-end e back-end”

### Documentação

- Nenhuma documentação no repositório

### Instalação

- Não deveria forçar o uso de um SDK específico (global.json) sem um real motivo.
- Faltou  a configuração de "guid-typescript": "^1.0.8” no package.json, a aplicação não estava compilando sem isto.