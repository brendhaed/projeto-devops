#!/bin/bash

# Interrompe a execução caso algum comando falhe
set -e

# Acessa a raiz do projeto
cd "$(dirname "$0")/.."

echo "Iniciando deploy da aplicação..."

# Constrói as imagens e inicia os containers
docker compose up -d --build

echo "Deploy concluído!"

# Exibe o status dos containers
docker compose ps