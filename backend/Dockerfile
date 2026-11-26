# Imagem base do Node.js
FROM node:20-alpine

# Diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm ci

# Copia o restante do código
COPY . .

# Cria o diretório para os dados
RUN mkdir -p /app/data

# Define a porta da aplicação
EXPOSE 5000

# Inicia o servidor
CMD ["npm", "start"]