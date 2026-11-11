
# Projeto DevOps

Projeto acadêmico desenvolvido para aplicar conceitos e práticas da disciplina de **DevOps na prática**, incluindo integração contínua (CI), testes automatizados e infraestrutura como código (IaC).

## Sobre o projeto

O projeto consiste em uma aplicação para gerenciamento de séries, composta por um frontend e uma API backend desenvolvida em Node.js com Express.

O objetivo é aplicar práticas de automação e qualidade no desenvolvimento, utilizando ferramentas de integração contínua e provisionamento de infraestrutura.

## Tecnologias utilizadas

- **Backend:** Node.js e Express
- **Testes:** Jest e Supertest
- **CI/CD:** GitHub Actions
- **Infraestrutura como código:** Terraform
- **Cloud:** AWS (Amazon S3)

## Estrutura do repositório

```text
projeto-devops/
├── .github/
│   └── workflows/
│       └── backend-ci.yml
├── backend/
├── frontend/
├── infrastructure/
│   └── terraform/
├── .gitignore
└── README.md
```

## Integração contínua (CI)

O projeto utiliza GitHub Actions para executar automaticamente os testes do backend em eventos de push e pull request direcionados à branch `main`.

O workflow realiza as seguintes etapas:

1. Configuração do ambiente Node.js.
2. Instalação das dependências.
3. Execução dos testes automatizados com Jest e Supertest.

## Infraestrutura como código (IaC)

A infraestrutura é definida utilizando Terraform, com configuração para provisionamento de um bucket Amazon S3 destinado ao armazenamento dos arquivos estáticos do frontend.

Os arquivos de configuração estão localizados em `infrastructure/terraform/`.

**Observação:** a infraestrutura está configurada e validada, mas o provisionamento na AWS não foi executado.

## Como executar o backend

Entre na pasta do backend:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Execute os testes:

```bash
npm test
```

## Repositório

[GitHub – Projeto DevOps](https://github.com/brendhaed/projeto-devops)