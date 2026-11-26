@echo off

REM Acessa a raiz do projeto
cd /d "%~dp0.."

echo Iniciando deploy da aplicacao...

REM Constroi as imagens e inicia os containers
docker compose up -d --build

if errorlevel 1 (
    echo Erro durante o deploy!
    exit /b 1
)

echo Deploy concluido!

REM Exibe o status dos containers
docker compose ps
